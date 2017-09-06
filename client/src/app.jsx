/**
 * Created by Roger on 2017/9/4.
 */

import React, {Component} from "react";
import ReactDom from "react-dom";
import Routers from './config/routers.jsx';
import "./styles/index.less";

ReactDom.render(
  Routers,
  document.getElementById('root')
);