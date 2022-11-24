import React, { useState } from 'react'


import css from "../../styles/Reset.module.css"

// import component
import Dashboard from '../../components/dashboard/Dashboard'

function Reset() {

    const [type, setType] = useState("password");
    const [icon, setIcon] = useState("fa-solid fa-eye-slash");
    const [type_, setType_] = useState("password");
    const [icon_, setIcon_] = useState("fa-solid fa-eye-slash");



    // handleToggle1 => Show Password
    const handleToggle1 = () => {
        if (type === 'password') {
            setIcon("fa-regular fa-eye");
            setType('text');
        } else {
            setIcon("fa-solid fa-eye-slash");
            setType('password')
        }
    }

    // handleToggle2 => Show Password
    const handleToggle2 = () => {
        if (type_ === 'password') {
            setIcon_("fa-regular fa-eye");
            setType_('text');
        } else {
            setIcon_("fa-solid fa-eye-slash");
            setType_('password')
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
                    <form className={css.content_form}>
                        <h2 className={css.title_bar_1}>Did You Forgot Your Password? Don`t Worry, You Can Reset Your Password In a Minutes.</h2>
                        <p className={css.title_bar_2}>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
                        <div className={css.phone_view}>
                            <h2 className={css.title_bar_1_phone}>Reset Password</h2>
                            <p className={css.title_bar_2_phone}>Enter your FazzPay e-mail so we can send you a password reset link.</p>
                        </div>
                        <div className={css.password}>
                            <i className="fa-solid fa-lock"></i>
                            <input type={type} name="" id="" placeholder='Enter your password' />
                            <i className={icon} onClick={handleToggle1}></i>
                        </div>
                        <div className={css.password}>
                            <i className="fa-solid fa-lock"></i>
                            <input type={type_} name="" id="" placeholder='Enter your password' />
                            <i className={icon_} onClick={handleToggle2}></i>
                        </div>
                        <button className={css.confirm}>Reset Password</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Reset