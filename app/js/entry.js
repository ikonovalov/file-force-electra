/**
 * Created by ikonovalov on 28/11/16.
 */
'use strict';

require('../../less/main.less');

import React from "react";
import ReactDOM from "react-dom";

import {Button, ButtonToolbar, Panel, PageHeader} from 'react-bootstrap';

const buttonsInstance = (
    <Panel>
        <PageHeader>Example page header
            <small>Subtext for header</small>
        </PageHeader>
        <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
            <Button bsSize="large" active>Button</Button>
        </ButtonToolbar>
    </Panel>
);

ReactDOM.render(buttonsInstance, document.getElementById('content'));