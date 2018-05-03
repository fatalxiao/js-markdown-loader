import React, {Component} from 'react';
import MarkDownData from 'assets/MarkDown.md';

import 'github-markdown-css';

class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: MarkDownData.html}}></div>
        );
    }
}

export default Root;