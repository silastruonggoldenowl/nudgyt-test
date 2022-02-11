import React, {Component} from "react";
import backgourndImg from '../../assets/geometric-g9e863b494_1920.jpg'
import './index.scss'
import {
    InputBase,
    Paper,
    IconButton,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchString: ""
        }
    }

    render(){
        return <div className='home-screen'>
            <img src={backgourndImg} alt='background-home' className="image-background"/>
            <div className="content">
                <div className="content__center">
                    <div className="brand">
                        <h1 className="name-brand">Search with Github Api</h1>
                    </div>
                    <Paper
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                    >
                        <IconButton 
                            sx={{ p: '10px' }} 
                            aria-label="search-icon"
                            onClick={(e) => {
                                if (this.state.searchString) {
                                    window.location =  `/search?q=${this.state.searchString}`
                                }
                            }}
                        >
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Name Repository"
                            className="search"
                            value = {this.state.searchString}
                            onChange={(e) => {
                                this.setState({
                                    searchString: e.currentTarget.value
                                })
                            }}
                            onKeyPress={(event) => {
                                if (this.state.searchString && event.charCode === 13) {
                                    window.location =  `/search?q=${this.state.searchString}`
                                }
                            }}                             
                        />
                    </Paper>

                </div>
            </div>

        </div>
    }
}
