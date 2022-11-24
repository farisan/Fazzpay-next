import React, { useState } from 'react'
import Link from 'next/link'

// import css
import css from "../../styles/Login.module.css"

// import components
import Dashboard from '../../components/dashboard/Dashboard'


// import redux
import { useDispatch, useSelector } from "react-redux";
import loginActions from '../../redux/actions/auth'


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cookies from 'js-cookie'
import { useRouter } from 'next/router';

function Login() {

    const dispacth = useDispatch();
    const router = useRouter()

    // const errorMessage = useSelector((state) => state.auth.error);
    // const error = useSelector((state) => state.auth.isError);

    const [body, setBody] = useState({});
    const [type, setType] = useState("password")
    const [icon, setIcon] = useState("fa-solid fa-eye-slash")


    // handleToggle => Show Password
    const handleToggle = () => {
        if (type === 'password') {
            setIcon("fa-regular fa-eye");
            setType('text');
        } else {
            setIcon("fa-solid fa-eye-slash");
            setType('password')
        }
    }


    const changeHandler = (e) =>
        setBody({ ...body, [e.target.name]: e.target.value });


    const postLogin = () => {

        if (!body.email || !body.password) return toast.error("Data cannot be empty")
        dispacth(loginActions.loginThunk(body));
        if (Cookies.get("pin") === null) {
            router.push("/pin")
        } else {
            router.push("/resetpassword")
        }
    };


    return (
        <>

            <p className={css.title_phone}>FazzPay</p>
            <div className={css.main_content}>
                {/* Content Left */}
                <Dashboard />

                {/* Content Right */}
                <div className={css.content_right}>
                    <div className={css.content_form}>
                        <h2 className={css.title_bar_1}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
                        <p className={css.title_bar_2}>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                        <div className={css.phone_view}>
                            <h2 className={css.title_bar_1_phone}>Login</h2>
                            <p className={css.title_bar_2_phone}>Login to your existing account to access all the features in FazzPay.</p>
                        </div>
                        <div className={css.email}>
                            <i className="fa-regular fa-envelope"></i>
                            <input
                                type="email"
                                name="email"
                                id=""
                                onChange={changeHandler}
                                placeholder='Enter your e-mail' />
                        </div>
                        <div className={css.password}>
                            <i className="fa-solid fa-lock"></i>
                            <input
                                type={type}
                                name="password"
                                id=""
                                onChange={changeHandler}
                                placeholder='Enter your password' />
                            <i className={icon} onClick={handleToggle}></i>
                        </div>
                        <div className={css.forgot}>
                            <Link href="/resetpassword"><p>Forgot Password?</p></Link>
                        </div>
                        <button className={css.login} onClick={postLogin}>Login</button>
                        <div className={css.signup}>
                            <p>Don`t have an account? Let`s <Link href="/register">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                theme="light"
            />
        </>
    )
}

export default Login