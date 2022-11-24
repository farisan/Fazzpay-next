import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
    isError: false,
    isLoading: false,
    isFulfilled: false,
    error: null,
};

const authReducer = (prevState = initialState, { type, payload }) => {
    const { Pending, Rejected, Fulfilled } = ActionType;
    const { authLogin } = ACTION_STRING;

    switch (type) {
        case authLogin.concat("_", Pending):
            return {
                ...prevState,
                isLoading: true,
                isError: false,
                isFulfilled: false,
                error: null,
            };
        case authLogin.concat("_", Rejected):
            return {
                ...prevState,
                isLoading: false,
                isError: true,
                isFulfilled: false,
                error: payload.error.response.data.msg,
            };
        case authLogin.concat("_", Fulfilled):
            return {
                ...prevState,
                isError: false,
                isFulfilled: true,
                isLoading: false,
                error: null,
            };
        default:
            return prevState;
    }
};

export default authReducer;