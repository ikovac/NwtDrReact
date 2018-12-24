import React, { Component } from "react";
import "./Rate.css";

class Rate extends Component {
  constructor(props) {
    super(props);
    let ocjene = this.props.recenzije.map(rec => rec.ocjena);

    this.state = {
      ocjene: ocjene
    };
  }

  onStarClick = ocjena => {
    this.setState({ ocjene: [...this.state.ocjene, ocjena] });
  };

  getOcjena = () => {
    const sum = this.state.ocjene.reduce((suma, crntValue) => suma + crntValue);
    return Math.round((sum / this.state.ocjene.length));
  };

  render() {
    return (
      <React.Fragment>
        <p>
          Ocjena: {this.getOcjena()} na temelju {this.state.ocjene.length}{" "}
          recenzije/a
        </p>

        <div className="rate-stars">
          <i className="fas fa-star" onClick={() => this.onStarClick(5)} />
          <i className="fas fa-star" onClick={() => this.onStarClick(4)} />
          <i className="fas fa-star" onClick={() => this.onStarClick(3)} />
          <i className="fas fa-star" onClick={() => this.onStarClick(2)} />
          <i className="fas fa-star" onClick={() => this.onStarClick(1)} />
        </div>
      </React.Fragment>
    );
  }
}

export default Rate;
