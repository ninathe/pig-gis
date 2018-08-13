import React, { Component}  from 'react';
import './Navbar.css';
import Filedrop from './Filedrop3';

export default class Navbar extends Component {
    render() {
    return (
    <div id = "navbar">
        <h1>GISLYFE</h1>
        <Filedrop />
    </div>);
    }
}