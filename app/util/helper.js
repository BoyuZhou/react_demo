import axios from 'axios';

/**
 * ��ȡ�ֿ���Ϣ
 * @param username
 * @returns {*}
 */
function getRepos (username) {
    return axios.get('https://api.github.com/users/${username}');
}
/**
 * ��ȡ�û�������Ϣ
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