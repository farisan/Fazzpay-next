import { ActionType } from "redux-promise-middleware";
import { login } from "../../utils/axios";
import { ACTION_STRING } from "./actionStrings";

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

const loginThunk = (body, router, cbError) => {
    return async (dispacth) => {
        try {
            dispacth(loginPending());
            const result = await login(body);
            dispacth(loginFulfilled(result.data));
            if (typeof router === "function") router();
        } catch (error) {
            dispacth(loginRejected(error));
            if (typeof navigate === "function") cbError();
        }
    };
};


const loginActions = { loginThunk };

export default loginActions;