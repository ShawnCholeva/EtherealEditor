import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const container = {
    border: '1px solid white',
    height: '98vh'
}

class SideMenu extends Component {
    componentDidMount(){

    }
    
    render(){
        return (
            <div style={container}>
                <h3 style={{color: 'grey'}}>FILE EXPLORER</h3>
                <div id='contents'>
                <h4>Contents</h4>
                </div>
            </div>
        );
    }
}

export default SideMenu;