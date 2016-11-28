/**
 * Created by ikonovalov on 28/11/16.
 */
'use strict';

require('../../less/main.less');

import React from "react";
import ReactDOM from "react-dom";
const element = <div className="myDiv">Hello Electron!</div>;

ReactDOM.render(element, document.getElementById('content'));