import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';

import './editor-tab.less';

export default class EditorTab extends Component {
    render() {
        return (
            <div className={'editor-tab-item ' + (this.props.file.fileName === 'editor-tab.tsx' ? 'selected-tab' : '')}>
                <div className='editor-tab-item-content'>
                    <span className='editor-tab-file-icon'><Icon name='file' /></span><span>{this.props.file.fileName}</span>
                </div>
            </div>
        );
    }
}
