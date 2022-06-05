import axios from "axios";

//https://github.com/oldboyxx/jira_clone/blob/master/client/src/shared/utils/api.js
const login = ((username: string, password: string) => {
    return axios.post('http://127.0.0.1:3001/login', {
        username,
        password
    });
})

export default login;
