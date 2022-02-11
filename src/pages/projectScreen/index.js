import React, {Component} from "react";
import { connect } from "react-redux";
import { getReadme } from "../../store/actions";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {
    Avatar,
    Card,
    CardContent,
    CardHeader
} from '@mui/material';
import './index.scss'
const dataFake = [
    {
        "id": 8385616,
        "node_id": "MDEwOlJlcG9zaXRvcnk4Mzg1NjE2",
        "name": "toml",
        "full_name": "toml-lang/toml",
        "private": false,
        "owner": {
            "login": "toml-lang",
            "id": 7966854,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjc5NjY4NTQ=",
            "avatar_url": "https://avatars.githubusercontent.com/u/7966854?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/toml-lang",
            "html_url": "https://github.com/toml-lang",
            "followers_url": "https://api.github.com/users/toml-lang/followers",
            "following_url": "https://api.github.com/users/toml-lang/following{/other_user}",
            "gists_url": "https://api.github.com/users/toml-lang/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/toml-lang/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/toml-lang/subscriptions",
            "organizations_url": "https://api.github.com/users/toml-lang/orgs",
            "repos_url": "https://api.github.com/users/toml-lang/repos",
            "events_url": "https://api.github.com/users/toml-lang/events{/privacy}",
            "received_events_url": "https://api.github.com/users/toml-lang/received_events",
            "type": "Organization",
            "site_admin": false
        },
        "html_url": "https://github.com/toml-lang/toml",
        "description": "Tom's Obvious, Minimal Language",
        "fork": false,
        "url": "https://api.github.com/repos/toml-lang/toml",
        "forks_url": "https://api.github.com/repos/toml-lang/toml/forks",
        "keys_url": "https://api.github.com/repos/toml-lang/toml/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/toml-lang/toml/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/toml-lang/toml/teams",
        "hooks_url": "https://api.github.com/repos/toml-lang/toml/hooks",
        "issue_events_url": "https://api.github.com/repos/toml-lang/toml/issues/events{/number}",
        "events_url": "https://api.github.com/repos/toml-lang/toml/events",
        "assignees_url": "https://api.github.com/repos/toml-lang/toml/assignees{/user}",
        "branches_url": "https://api.github.com/repos/toml-lang/toml/branches{/branch}",
        "tags_url": "https://api.github.com/repos/toml-lang/toml/tags",
        "blobs_url": "https://api.github.com/repos/toml-lang/toml/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/toml-lang/toml/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/toml-lang/toml/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/toml-lang/toml/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/toml-lang/toml/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/toml-lang/toml/languages",
        "stargazers_url": "https://api.github.com/repos/toml-lang/toml/stargazers",
        "contributors_url": "https://api.github.com/repos/toml-lang/toml/contributors",
        "subscribers_url": "https://api.github.com/repos/toml-lang/toml/subscribers",
        "subscription_url": "https://api.github.com/repos/toml-lang/toml/subscription",
        "commits_url": "https://api.github.com/repos/toml-lang/toml/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/toml-lang/toml/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/toml-lang/toml/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/toml-lang/toml/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/toml-lang/toml/contents/{+path}",
        "compare_url": "https://api.github.com/repos/toml-lang/toml/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/toml-lang/toml/merges",
        "archive_url": "https://api.github.com/repos/toml-lang/toml/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/toml-lang/toml/downloads",
        "issues_url": "https://api.github.com/repos/toml-lang/toml/issues{/number}",
        "pulls_url": "https://api.github.com/repos/toml-lang/toml/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/toml-lang/toml/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/toml-lang/toml/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/toml-lang/toml/labels{/name}",
        "releases_url": "https://api.github.com/repos/toml-lang/toml/releases{/id}",
        "deployments_url": "https://api.github.com/repos/toml-lang/toml/deployments",
        "created_at": "2013-02-24T03:03:57Z",
        "updated_at": "2022-02-10T06:36:49Z",
        "pushed_at": "2022-02-08T08:20:30Z",
        "git_url": "git://github.com/toml-lang/toml.git",
        "ssh_url": "git@github.com:toml-lang/toml.git",
        "clone_url": "https://github.com/toml-lang/toml.git",
        "svn_url": "https://github.com/toml-lang/toml",
        "homepage": "https://toml.io",
        "size": 2302,
        "stargazers_count": 16591,
        "watchers_count": 16591,
        "language": "Python",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 797,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 55,
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "allow_forking": true,
        "is_template": false,
        "topics": [],
        "visibility": "public",
        "forks": 797,
        "open_issues": 55,
        "watchers": 16591,
        "default_branch": "master",
        "score": 1.0
    },
    {
        "id": 2493904,
        "node_id": "MDEwOlJlcG9zaXRvcnkyNDkzOTA0",
        "name": "tomcat",
        "full_name": "apache/tomcat",
        "private": false,
        "owner": {
            "login": "apache",
            "id": 47359,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjQ3MzU5",
            "avatar_url": "https://avatars.githubusercontent.com/u/47359?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/apache",
            "html_url": "https://github.com/apache",
            "followers_url": "https://api.github.com/users/apache/followers",
            "following_url": "https://api.github.com/users/apache/following{/other_user}",
            "gists_url": "https://api.github.com/users/apache/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/apache/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/apache/subscriptions",
            "organizations_url": "https://api.github.com/users/apache/orgs",
            "repos_url": "https://api.github.com/users/apache/repos",
            "events_url": "https://api.github.com/users/apache/events{/privacy}",
            "received_events_url": "https://api.github.com/users/apache/received_events",
            "type": "Organization",
            "site_admin": false
        },
        "html_url": "https://github.com/apache/tomcat",
        "description": "Apache Tomcat",
        "fork": false,
        "url": "https://api.github.com/repos/apache/tomcat",
        "forks_url": "https://api.github.com/repos/apache/tomcat/forks",
        "keys_url": "https://api.github.com/repos/apache/tomcat/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/apache/tomcat/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/apache/tomcat/teams",
        "hooks_url": "https://api.github.com/repos/apache/tomcat/hooks",
        "issue_events_url": "https://api.github.com/repos/apache/tomcat/issues/events{/number}",
        "events_url": "https://api.github.com/repos/apache/tomcat/events",
        "assignees_url": "https://api.github.com/repos/apache/tomcat/assignees{/user}",
        "branches_url": "https://api.github.com/repos/apache/tomcat/branches{/branch}",
        "tags_url": "https://api.github.com/repos/apache/tomcat/tags",
        "blobs_url": "https://api.github.com/repos/apache/tomcat/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/apache/tomcat/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/apache/tomcat/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/apache/tomcat/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/apache/tomcat/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/apache/tomcat/languages",
        "stargazers_url": "https://api.github.com/repos/apache/tomcat/stargazers",
        "contributors_url": "https://api.github.com/repos/apache/tomcat/contributors",
        "subscribers_url": "https://api.github.com/repos/apache/tomcat/subscribers",
        "subscription_url": "https://api.github.com/repos/apache/tomcat/subscription",
        "commits_url": "https://api.github.com/repos/apache/tomcat/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/apache/tomcat/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/apache/tomcat/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/apache/tomcat/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/apache/tomcat/contents/{+path}",
        "compare_url": "https://api.github.com/repos/apache/tomcat/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/apache/tomcat/merges",
        "archive_url": "https://api.github.com/repos/apache/tomcat/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/apache/tomcat/downloads",
        "issues_url": "https://api.github.com/repos/apache/tomcat/issues{/number}",
        "pulls_url": "https://api.github.com/repos/apache/tomcat/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/apache/tomcat/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/apache/tomcat/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/apache/tomcat/labels{/name}",
        "releases_url": "https://api.github.com/repos/apache/tomcat/releases{/id}",
        "deployments_url": "https://api.github.com/repos/apache/tomcat/deployments",
        "created_at": "2011-10-01T07:00:19Z",
        "updated_at": "2022-02-10T06:26:13Z",
        "pushed_at": "2022-02-09T10:16:42Z",
        "git_url": "git://github.com/apache/tomcat.git",
        "ssh_url": "git@github.com:apache/tomcat.git",
        "clone_url": "https://github.com/apache/tomcat.git",
        "svn_url": "https://github.com/apache/tomcat",
        "homepage": "https://tomcat.apache.org",
        "size": 138038,
        "stargazers_count": 5855,
        "watchers_count": 5855,
        "language": "Java",
        "has_issues": false,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": false,
        "has_pages": false,
        "forks_count": 3994,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 12,
        "license": {
            "key": "apache-2.0",
            "name": "Apache License 2.0",
            "spdx_id": "Apache-2.0",
            "url": "https://api.github.com/licenses/apache-2.0",
            "node_id": "MDc6TGljZW5zZTI="
        },
        "allow_forking": true,
        "is_template": false,
        "topics": [
            "http",
            "java",
            "javaee",
            "network-server",
            "tomcat"
        ],
        "visibility": "public",
        "forks": 3994,
        "open_issues": 12,
        "watchers": 5855,
        "default_branch": "main",
        "score": 1.0
    },
]

const ownerFake = {
    "login": "toml-lang",
    "id": 7966854,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjc5NjY4NTQ=",
    "avatar_url": "https://avatars.githubusercontent.com/u/7966854?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/toml-lang",
    "html_url": "https://github.com/toml-lang",
    "followers_url": "https://api.github.com/users/toml-lang/followers",
    "following_url": "https://api.github.com/users/toml-lang/following{/other_user}",
    "gists_url": "https://api.github.com/users/toml-lang/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/toml-lang/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/toml-lang/subscriptions",
    "organizations_url": "https://api.github.com/users/toml-lang/orgs",
    "repos_url": "https://api.github.com/users/toml-lang/repos",
    "events_url": "https://api.github.com/users/toml-lang/events{/privacy}",
    "received_events_url": "https://api.github.com/users/toml-lang/received_events",
    "type": "Organization",
    "site_admin": false,
    "name": "TOML",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Tom's Obvious, Minimal Language (and friends)",
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2014-06-23T16:26:20Z",
    "updated_at": "2020-05-28T15:58:07Z"
  }
class ProjectScreen extends Component {

    componentWillMount = () => {
        // const {params} = this.props.match
        let path = window.location.pathname
        this.props.getReadmeDispatch(path.replace('/project/',''));
    }

    render(){
        const { readmeData } = this.props
        return <div className='project-screen container'>
            <h1>ProjectScreen</h1>
            <div className="row">
                <div className="readme-col">
                    <ReactMarkdown remarkPlugins={[gfm]}>{readmeData}</ReactMarkdown>
                </div>
                <div className="right-col">
                    <Card className="about">
                        <CardHeader title={<h3>About</h3>}/>
                        <CardContent>
                            <div>{dataFake[0].description}</div>
                            <div>Visibility: {dataFake[0].visibility}</div>
                            <div>Home Page: {dataFake[0].homepage}</div>
                            <div>Github: {dataFake[0].git_url}</div>
                            <div>Stars: {dataFake[0].stargazers_count}</div>
                            <div>Watching: {dataFake[0].watchers_count}</div>
                            <div>Forks: {dataFake[0].forks_count}</div>
                            <div>Opened issues: {dataFake[0].open_issues}</div>
                            <div>Size: {dataFake[0].size}</div>
                            <div>topics: {dataFake[0].topics.map(i=>i)}</div>
                        </CardContent>
                    </Card>
                    <Card className="owner">
                        <CardHeader avatar={<Avatar 
                                alt={ownerFake.login}
                                src={ownerFake.avatar_url}
                                sx={{ width: 50, height: 50 }}
                            />} title={<h3>Owner</h3>}/>
                        <CardContent>
                            <div>{ownerFake.login}</div>
                            <div>{ownerFake.bio}</div>
                            <div>Github: {ownerFake.html_url}</div>
                            <div>Company: {ownerFake.company || `none`}</div>
                            <div>Followers: {ownerFake.followers}</div>
                            <div>Following: {ownerFake.following}</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    }
    
}

const mapStateToProps = (store) => ({
    readmeData: store.readmeData
});
  
const mapDispatchToProps = (dispatch) => ({
    getReadmeDispatch: (fullNameRepo) => {
      dispatch(getReadme(fullNameRepo));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectScreen);