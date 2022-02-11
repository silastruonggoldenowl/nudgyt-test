import React, {Component} from "react";
import { connect } from "react-redux";
import { getReadme, getRepo, getUser } from "../../store/actions";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Chip,
} from '@mui/material';
import './index.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LoadingScreen from "../loadingScreen/index";
class ProjectScreen extends Component {

    UNSAFE_componentWillMount = () => {
        let path = window.location.pathname
        let [,,owner,nameRepo] = path.split('/')
        this.props.getReadmeDispatch(`${owner}/${nameRepo}`);
        this.props.getRepoDispatch(`${owner}/${nameRepo}`);
        this.props.getUserDispatch(owner);
    }

    render(){
        const { readmeData, repo, loading, userInfo } = this.props
        if(loading){
            return <LoadingScreen/>
        }
        return <div className='project-screen container'>
            <div className="row">
                <div className="readme-col">
                    <ReactMarkdown remarkPlugins={[gfm]}>{readmeData}</ReactMarkdown>
                </div>
                <div className="right-col">
                    <Card className="about">
                        <CardHeader title={<h3>About</h3>}/>
                        <CardContent>
                            <Chip 
                                onClick={()=>{window.location = repo.homepage}}
                                className="chip__project"
                                color={'primary'}
                                avatar={<HomeIcon color="inherit"/>}
                                label="Home Page"
                                size="small"
                            />
                            <Chip 
                                onClick={()=>{window.location = repo.html_url}}
                                className="chip__project"
                                avatar={<GitHubIcon/>}
                                label="Github"
                                size="small"
                            />
                            <div>{repo.description}</div>
                            <div>Visibility: {repo.visibility}</div>
                            <div>Stars: {repo.stargazers_count}</div>
                            <div>Watching: {repo.watchers_count}</div>
                            <div>Forks: {repo.forks_count}</div>
                            <div>Opened issues: {repo.open_issues}</div>
                            <div>Size: {repo.size}</div>
                            {
                                !!repo?.topics?.length && <div>Topics: {repo.topics.map(i=><Chip className="chip__project" color={'success'} label={i} size="small"/>)}</div>
                            }
                        </CardContent>
                    </Card>
                    <Card className="owner">

                        <CardHeader 
                            avatar={
                                <Avatar 
                                    alt={userInfo.login}
                                    src={userInfo.avatar_url}
                                    sx={{ width: 50, height: 50 }}
                                />
                            } 
                            title={<h3>{userInfo.login}</h3>}
                            className="owner__card-header"
                            onClick={()=>{window.location = userInfo.html_url}}
                        />
                        <CardContent>
                            <div>{userInfo.bio}</div>
                            <div>Company: {userInfo.company || `none`}</div>
                            <div>Followers: {userInfo.followers}</div>
                            <div>Following: {userInfo.following}</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    }
    
}

const mapStateToProps = (store) => ({
    readmeData: store.readmeData,
    repo: store.tagetRepo,
    userInfo: store.userInfo,
    loading: store.loading
});
  
const mapDispatchToProps = (dispatch) => ({
    getReadmeDispatch: (fullNameRepo) => {
      dispatch(getReadme(fullNameRepo));
    },
    getRepoDispatch: (fullNameRepo) => {
        dispatch(getRepo(fullNameRepo));
    },
    getUserDispatch: (name) => {
        dispatch(getUser(name));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectScreen);