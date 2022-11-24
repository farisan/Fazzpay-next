import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

// import css
import css from "../../styles/Register.module.css"

// import components
import Dashboard from '../../components/dashboard/Dashboard'

// import redux
import { useDispatch, useSelector } from "react-redux";
import registerActions from "../../redux/actions/register";

// import toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Register() {
    // variabel
    const dispacth = useDispatch();
    const router = useRouter()

    const errorMessage = useSelector((state) => state.register.error);
    const errorfield = useSelector((state) => state.register.isfield);


    // State
    const [body, setBody] = useState({});
    const [type, setType] = useState("password")
    const [icon, setIcon] = useState("fa-solid fa-eye-slash")



    // changeHandler => ambil data inputan
    const changeHandler = (e) =>
        setBody({ ...body, [e.target.name]: e.target.value });



    // postRegister => register data user
    const postRegister = () => {
        if (!body.email || !body.password || !body.lastName || !body.firstName)
            return toast.error("Data cannot be empty")
        return dispacth(
            registerActions.registerThunk(
                body,
                () => {
                    toast.success(`register success ${body.firstName} please login`);
                    router.push("/login")
                },
                toast.error(errorMessage)
            )
        );
    };



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




    return (
        <>
            <p className={css.title_phone}>FazzPay</p>
            <div className={css.main_content}>
                {/* Content Left */}
                <Dashboard />

                {/* Content Right */}
                <div className={css.content_right}>
                    <div className={css.content_form}>
                        <div className={css.phone_view}>
                            <h2 className={css.title_bar_1_phone}>Sign Up</h2>
                            <p className={css.title_bar_2_phone}>Create your account to access FazzPay.</p>
                        </div>
                        <h2 className={css.title_bar_1}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
                        <p className={css.title_bar_2}>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                        <div className={css.firstname}>
                            <i className={`fa-solid fa-user ${(errorfield === null) ? "text-secondary" : (errorfield) ? "text-primary" : "text-primary"}`}></i>
                            <input
                                type="text"
                                name="firstName"
                                id=""
                                onChange={changeHandler}
                                placeholder='Enter your firstname' />
                        </div>
                        <div className={css.lastname}>
                            <i className={`fa-solid fa-user ${(errorfield === null) ? "text-secondary" : (errorfield) ? "text-primary" : "text-primary"}`}></i>
                            <input
                                type="text"
                                name="lastName"
                                id=""
                                onChange={changeHandler}
                                placeholder='Enter your lastname' />
                        </div>
                        <div className={css.email}>
                            <i className={`fa-regular fa-envelope ${(errorfield === null) ? "text-secondary" : (errorfield) ? "text-danger" : "text-primary"}`}></i>
                            <input
                                type="email"
                                name="email"
                                id=""
                                onChange={changeHandler}
                                placeholder='Enter your e-mail' />
                        </div>
                        <div className={css.password}>
                            <i className={`fa-solid fa-lock ${(errorfield === null) ? "text-secondary" : (errorfield) ? "text-primary" : "text-primary"}`}></i>
                            <input
                                type={type}
                                name="password"
                                id=""
                                onChange={changeHandler}
                                placeholder='Enter your password' />
                            <i className={icon} onClick={handleToggle}></i>
                        </div>
                        <button className={css.login} onClick={postRegister}>Sign Up</button>
                        <div className={css.signup}>
                            <p>Already have an account? Let`s <Link href="/login">Login</Link></p>
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

export default Register