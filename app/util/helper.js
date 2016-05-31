import axios from 'axios';

/**
 * ��ȡ�ֿ���Ϣ
 * @param username
 * @returns {*}
 */
function getRepos (username) {
    return axios.get('https://api.github.com/users/'+username+'/repos');
}
/**
 * ��ȡ�û�������Ϣ
 * @param username
 * @returns {*}
 */
function getUserInfo (username) {
    return axios.get('http://api.github.com/users/'+username)
}

export default function getGithubInfo (username) {
    return axios.all([
        getRepos(username),
        getUserInfo(username)
    ])
    .then((arr) => ({
            repos: arr[0].data,
            bio: arr[1].data
        }));
}