/**
 * Created by ikonovalov on 28/11/16.
 */
'use strict';

require('../../less/main.less');

import React from "react";
const element = <div className="myDiv">Hello Electron!</div>;

React.render(element, document.getElementById('content'));