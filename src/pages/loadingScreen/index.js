import React, {Component} from "react";
import {
    CircularProgress
} from '@mui/material';
import './index.scss'
export default class LoadingScreen extends Component {
    render(){
        return <div className="loading-screen">
            <CircularProgress size={50}/>
        </div>
    } 
}
