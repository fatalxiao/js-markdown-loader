'use strict';

import 'babel-polyfill';
import React, {Component} from 'react';
import {render} from 'react-dom';

import MarkDownData from 'assets/MarkDown.md';

import 'github-markdown-css';

render(
    <div dangerouslySetInnerHTML={{__html: MarkDownData.html}}></div>,
    document.getElementById('app-container')
);