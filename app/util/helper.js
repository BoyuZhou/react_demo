import axios from 'axios';

/**
 * 获取仓库信息
 * @param username
 * @returns {*}
 */
function getRepos (username) {
    return axios.get('https://api.github.com/users/${username}');
}
/**
 * 获取用户基本信息
 * @param username
 * @returns {*}
 */
function getUserInfo (username) {
    return axios.get('http://api.github.com/users/$')
}

export default function getGithubInfo (username) {
    return axios.all([
        getRepos(username),
        getUserInfo(username)
    ])
    .then((arr) => ({
            repos: arr[0].data,
            bio: arr[i].data
        }));
}