import React, {Component} from "react";
import {
    Paper,
    InputBase,
    IconButton,
    Avatar,
    Chip,
    Link,
    Pagination
} from '@mui/material';
import moment from 'moment';
import { connect } from "react-redux";
import SearchIcon from '@mui/icons-material/Search'
import StarIcon from '@mui/icons-material/StarOutline'
import WatcherIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import LoadingScreen from "../loadingScreen/index";

import './index.scss'
import { searchRepo } from "../../store/actions";

class SearchScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchString: '',
            page: 0
        }
    }

    UNSAFE_componentWillMount = () => {
        const params = new URLSearchParams(window.location.search)
        let searchString =params.get('q')
        let page =params.get('page')
        this.setState({
            searchString,
            page: page || 1
        })
        this.props.searchRepoDispatch({searchString, page: page || 1})
    }

    render(){
        const { listRepo, totalCountRepo, loading } = this.props
        const { searchString, page } = this.state
        if(loading){
            return <LoadingScreen/>
        }
        return <div className='search-screen '>
            <div className="header">
                <div className="branch">Search with Github API</div>
                <Paper
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '50%' }}
                >
                    <IconButton 
                        sx={{ p: '10px' }}
                        onClick={(e) => {
                            if (searchString) {
                                window.location =  `/search?q=${searchString}`
                            }
                        }}
                    >
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Name Repository"
                        value = {searchString}
                        onChange={(e) => {
                            this.setState({
                                searchString: e.currentTarget.value
                            })
                        }}
                        onKeyPress={(event) => {
                            if (searchString && event.charCode === 13) {
                                window.location =  `/search?q=${searchString}`
                            }
                        }}
                    />
                </Paper>
            </div>
            <div className="body container">
                {listRepo.map((item, index) =>{
                    return (
                        <div key={item.id} className="repo flex_row">
                            <div className="left-repo">
                                <div className="head-repo">
                                    <Link className="name-repo" onClick={()=>{this.props.tagetRepoDispatch(item)}} href={`/project/${item.full_name}`}>{item.name + '/' + item.owner?.login}</Link>
                                    <Chip className="visibility ml-3" label={item.visibility} variant="outlined" size="small" />
                                </div>
                                <div>{item.description}</div>
                                <div className="owner">
                                    <span className="label">
                                        Owner:
                                    </span>
                                    <a href={item.owner.html_url} className="owner">
                                        <span>
                                            <Avatar 
                                                alt={item.owner?.login}
                                                src={item.owner?.avatar_url}
                                                sx={{ width: 24, height: 24 }}
                                                />
                                        </span>
                                        <span>{item.owner?.login}</span>
                                    </a>
                                </div>
                                <div>Language: {item.language}</div>
                                <div>Last update: {moment(item.updated_at).fromNow()}</div>
                            </div>
                            <div className='right-repo'>
                                <div>
                                    <span>{item.stargazers_count}</span>
                                    <span className="right-repo__item"><StarIcon/></span>
                                </div>
                                <div>
                                    <span>{item.watchers}</span>
                                    <span className="right-repo__item"><WatcherIcon/></span>
                                </div>
                                <div>
                                    <span>{item.forks_count}</span>
                                    <span className="right-repo__item"><AccountTreeOutlinedIcon/></span>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <Pagination 
                    defaultPage={page}
                    count={totalCountRepo > 1000? 50 : Math.ceil(totalCountRepo/20)}
                    shape="rounded"
                    hidePrevButton
                    hideNextButton
                    className="pagination"
                    onChange ={(e, number)=>{window.location = `/search?q=${searchString}&page=${number}`}}
                />

            </div>
        </div>
    }
}


const mapStateToProps = (store) => ({
    listRepo: store.listRepo,
    totalCountRepo: store.totalCountRepo,
    loading: store.loading
});
  
const mapDispatchToProps = (dispatch) => ({
    searchRepoDispatch: (data) => {
      dispatch(searchRepo(data));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);