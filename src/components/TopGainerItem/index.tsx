import React from "react";
import { NavLink } from 'react-router-dom'

import "./style.scss";

const TopGainer = (props: any) => {
  let { id, image, name, symbol, price, percentageChange } = props.performer;
  return (
    <NavLink to={`/crypto/${id}`} className="top-gainer-link">
      <div className="top-gainer grow">
        <img
          src={`https://www.cryptocompare.com${image}`}
          className="top-gainer__img"
          alt="crypto"
        />
        <h3 className="top-gainer__name">{name}</h3>
        <p className="top-gainer__details">{symbol}</p>
        <p className="top-gainer__details">{price}</p>
        <p
          className="top-gainer__details"
          style={percentageChange > 0 ? { color: "green" } : { color: "red" }}
        >
          {percentageChange}%
        </p>
      </div>
    </NavLink>
  );
};

export default TopGainer;
