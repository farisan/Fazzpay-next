import { ActionType } from "redux-promise-middleware";
import { login } from "../../utils/axios";
import { ACTION_STRING } from "./actionStrings";
import Cookies from 'js-cookie'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from 'next/router';

const { Pending, Rejected, Fulfilled } = ActionType;


const loginPending = () => ({
    type: ACTION_STRING.authLogin.concat("_", Pending),
});
const loginRejected = (error) => ({
    type: ACTION_STRING.authLogin.concat("_", Rejected),
    payload: { error },
});
const loginFulfilled = (data) => ({
    type: ACTION_STRING.authLogin.concat("_", Fulfilled),
    payload: { data },
});



const loginThunk = (body) => {

    return async (dispacth) => {
        try {

            dispacth(loginPending());
            const result = await login(body);
            dispacth(loginFulfilled(result.data));
            Cookies.set("id", result.data.data.id)
            Cookies.set("token", result.data.data.token)
            Cookies.set("pin", result.data.data.pin)
            return toast.success(`Login Success`);
        } catch (error) {
            dispacth(loginRejected(error));
            toast.error("Email / Account not registed");
        }
    };
};


const loginActions = { loginThunk };

export default loginActions;