import React, { Component } from 'react';
import {UserProfile, UserRepos, Notes } from '../../components';
import { mixin } from 'core-decorators';
import ReactFireMixin from 'reactfire';
import {Firebase} from 'firebase';
import {getGithubInfo} from '../../util/helper';

@mixin(ReactFireMixin);

class Profile extends Component {
    state = {
        notes: ['1', '2', '3'],
        bio: {
            name: 'boyuzhou'
        },
        repos: ['a', 'b', 'c']
    };

    componentDidMount(){
        //创建一个firebase数据库引用
        this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
        //调用child来往引用地址后面追加请求，获取数据
        var childRef = this.ref.child(this.props.params.username);
        //将获取的数据转化成数组赋值给this。state。notes
        this.bindAsArray(childRef, 'notes');
        getGithubInfo(this.props.params.username)
        .then( (data) => {
                console.log(data);
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            });
    }
    componentWillUnMount(){
        this.unbind('notes');
    }

    render() {
        console.log(this.props);
        return (
            <div className = 'row'>
            <div className = 'col-md-4'>
                <UserProfile username={ this.props.params.username } bio={ this.state.bio } />
            </div>
                <div className = 'col-md-4'>
                    <UserRepos username={ this.props.params.username }  repos={ this.state.repos } />
                </div>
                <div className = 'col-md-4'>
                    <Notes username={ this.props.params.username }  notes = {
                    this.state.notes
                    } />
                </div>
            </div>
        )
    }
}

export default Profile;