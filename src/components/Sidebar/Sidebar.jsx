import React from "react";
import "./Sidebar.css";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Sidebar = ({ items }) => {
  const Items = items.map(item => (
    <li key={item.id}>
      <Link to={"/proizvod/" + item.id}>{item.naziv}</Link>
    </li>
  ));
  return (
    <div className="sidebar">
      <h3>Favoriti</h3>
      <ol>
          {Items}
      </ol>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.wishlist.items
});

export default connect(mapStateToProps)(Sidebar);
