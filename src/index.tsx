import React from 'react'
import ReactDOM from 'react-dom'

import SideMenu from './components/side-menu'

const mainWindowContainerStyle = {
    display: 'inline-block'
}

const menuContainerStyle = {
    display: 'inline-block',
    width: '15%'
}

const bootstrapperElement: HTMLElement = document.getElementById('app') as HTMLElement;

ReactDOM.render(
    
    <div>
        <div style={menuContainerStyle}>
            <SideMenu />
        </div>
        <div style={mainWindowContainerStyle}>
            Node version: {process.versions.node}
        </div>
    </div>,
    bootstrapperElement)