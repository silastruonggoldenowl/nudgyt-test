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
import { connect } from "react-redux";
import SearchIcon from '@mui/icons-material/Search'
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

    componentWillMount = () => {
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
        const { listRepo } = this.props
        const { searchString, page } = this.state
        return <div className='search-screen '>
            <div className="header">
                <div>Search with Github API</div>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </Paper>
            </div>
            <div className="body">
                {listRepo.map((item, index) =>{
                    return (
                        <div className="repo flex_row">
                            <div className="left-repo">
                                <div className="head-repo">
                                    <Link className="name-repo" href={`/project/${item.full_name}`}>{item.name + '/' + item.owner?.login}</Link>
                                    <Chip className="visibility ml-3" label={item.visibility} variant="outlined" size="small" />
                                </div>
                                <div>{item.description}</div>
                                <div className="owner">
                                    <span className="label">
                                        Owner: 
                                    </span>
                                    <span class="owner">
                                        <span>
                                            <Avatar 
                                                alt={item.owner?.login}
                                                src={item.owner?.avatar_url}
                                                sx={{ width: 24, height: 24 }}
                                                />
                                        </span>
                                        <span>{item.owner?.login}</span>
                                    </span>
                                    <div>Language: {item.language}</div>
                                    <div>Last update: {item.updated_at}</div>
                                </div>
                            </div>
                            <div className='right-repo flex_row'>
                                <div>{item.stargazers_count} | </div>
                                <div>{item.watchers} | </div>
                                <div>{item.size}</div>
                            </div>
                        </div>
                    )
                })}
                <Pagination 
                    defaultPage={page}
                    count={Math.ceil(1000/20)}
                    shape="rounded"
                    onChange ={(e, number)=>{window.location = `/search?q=${searchString}&page=${number}`}}
                />

            </div>
        </div>
    }
}


const mapStateToProps = (store) => ({
    listRepo: store.listRepo,
    totalCountRepo: store.totalCountRepo
});
  
const mapDispatchToProps = (dispatch) => ({
    searchRepoDispatch: (data) => {
      dispatch(searchRepo(data));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);