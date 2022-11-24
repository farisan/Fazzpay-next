import React from 'react'

import css from "../../styles/Resetpassword.module.css"

// import components
import Dashboard from '../../components/dashboard/Dashboard'
import Link from 'next/link'


function Resetpassword() {
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
                        <div className={css.email}>
                            <i className="fa-regular fa-envelope"></i>
                            <input type="email" name="" id="" placeholder='Enter your e-mail' />
                        </div>
                        <button className={css.confirm}>Confirm</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Resetpassword