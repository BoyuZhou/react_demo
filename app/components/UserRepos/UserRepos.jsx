import React, { Component, PropTypes } from 'react';

export default class UserRepos extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        repos: PropTypes.array.isRequired
    };
    render () {
        return (
            <div>
            <p>Git仓库</p>
                <p>REPOS：</p>
            </div>
        )
    }
}