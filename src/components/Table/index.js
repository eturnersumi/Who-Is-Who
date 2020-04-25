import React from "react";
import "./style.css";






function Table(props) {
    return <h1 className="table">{props.children}</h1>;
  }

export default Table;