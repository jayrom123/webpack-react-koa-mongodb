/**
 * Created by Roger on 2017/9/4.
 */

import React,{Component} from "react";
import ReactDom from "react-dom";
import img from "./static/img/th.jpg";

ReactDom.render(
  <div>roger
    <img src={img} alt="head"/>
  </div>,
  document.getElementById('root')
);