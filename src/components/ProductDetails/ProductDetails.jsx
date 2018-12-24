import React, { Component } from "react";
import { host } from "../../env";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import FavouriteAdd from "../FavouriteAdd/FavouriteAdd";
import Rate from "../Rate/Rate";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      product: {}
    };
  }
  componentDidMount() {
    fetch(host + "/proizvodi.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          loaded: true,
          product: data.find(prod => prod.id === +this.props.match.params.id)
        });
      });
  }

  renderOutput = () => {
    const { product } = this.state;
    if (product) {
      const { recenzije } = product;
      let Recenzije = recenzije.map(recenzija => {
        let fullStars = [];
        let borderStars = [];
        for (let i = 0; i < recenzija.ocjena; i++) {
          fullStars.push(<i className="fas fa-star" key={i} />);
        }
        for (let i = 5 - recenzija.ocjena; i > 0; i--) {
          borderStars.push(<i className="far fa-star" key={i} />);
        }
        return (
          <div className="recenzija" key={recenzija.recenzija_id}>
            <div className="usr-image-wrapper">
              <img src={host + "/images/user.png"} alt={recenzija.username} />
            </div>
            <div className="recenzija-wrapper">
              <p className="username">{recenzija.username}</p>
              <div className="rating">
                {fullStars}
                {borderStars}
              </div>
              <p>{recenzija.komentar}</p>
            </div>
          </div>
        );
      });
      return (
        <div>
          {
            <div className="content">
              <div className="content-head">
                <h2>
                  <Link to="/">
                    <i className="fas fa-arrow-left" />
                  </Link>
                  {product.naziv}
                  <FavouriteAdd prod={product} />
                </h2>
                <h3>{product.cijena} €</h3>
              </div>
              <div className="main-content">
                <div className="img-wrapper">
                  <img
                    src={host + "/images/" + product.image_name}
                    alt={product.naziv}
                  />
                </div>
                <p>{product.opis}</p>
              </div>
              <Rate recenzije={product.recenzije} />
              <hr />

              <div className="recenzije-container">
                <h4>Recenzije</h4>
                {Recenzije}
              </div>
            </div>
          }
        </div>
      );
    } else {
      return <p>Proizvod ne postoji.</p>;
    }
  };

  render() {
    const { loaded } = this.state;
    return <React.Fragment>{loaded && this.renderOutput()}</React.Fragment>;
  }
}

export default ProductDetails;
