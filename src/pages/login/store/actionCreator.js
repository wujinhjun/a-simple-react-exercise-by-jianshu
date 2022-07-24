import axios from "axios";
import { actionTypes } from ".";

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password)
            .then((res) => {
                // console.log(res);
                const result = res.data.data;
                if (result) {
                    dispatch(changeLogin());
                } else {

                }
            })
            .catch(() => {
                alert("出错了");
            })
    }
}

export const logout = () => ({
    type: actionTypes.CHANGE_LOGOUT,
    value: false
})

const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    value: true
})