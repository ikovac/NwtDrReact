import React, { Component } from "react";
import "./FavouriteAdd.css";
import { connect } from "react-redux";
import { wishlistAdd, wishlistRemove } from "../../actions/wishlistAction";

class FavouriteAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      added: this.props.addedItems.find(item => item.id === this.props.prod.id) ? true : false
    };
  }
  onHeartClick = prod => {
    this.setState({ added: !this.state.added });
    if (this.state.added)    {
      this.props.wishlistRemove(prod.id);
    } else {
      this.props.wishlistAdd(prod);
    }
  };

  render() {
    const { prod } = this.props;
    let cls = this.state.added ? 'added' : '';
    return (
      <i
        title="Dodaj u favorite"
        className={"fas fa-heart " + cls}
        onClick={() => this.onHeartClick(prod)}
      />
    );
  }
}

const mapStateToProps = state => ({
  addedItems: state.wishlist.items
});

export default connect(
  mapStateToProps,
  { wishlistAdd, wishlistRemove }
)(FavouriteAdd);
