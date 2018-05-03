import React, {Component} from 'react';
import MarkDownData from 'assets/MarkDown.md';

import 'assets/sass/MarkDownEditor.scss';
import 'github-markdown-css';

class AppRoot extends Component {

    constructor(props) {

        super(props);

        console.log(MarkDownData);

    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: MarkDownData.html}}></div>
        );
    }
}

export default AppRoot;