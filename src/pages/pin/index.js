import React from 'react'
import Link from 'next/link'

// import css
import css from "../../styles/Pin.module.css"

// import components
import Dashboard from '../../components/dashboard/Dashboard'

function Pin() {


    return (
        <>

            <p className={css.title_phone}>FazzPay</p>
            <div className={css.main_content}>
                {/* Content Left */}
                <Dashboard />

                {/* Content Right */}
                <div className={css.content_right}>
                    <form className={css.content_form}>
                        <div className={css.phone_view}>
                            <h2 className={css.title_bar_1_phone}>Create Security PIN</h2>
                            <p className={css.title_bar_2_phone}>Create a PIN that`s contain 6 digits number for security purpose in FazzPay.</p>
                        </div>
                        <h2 className={css.title_bar_1}>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h2>
                        <p className={css.title_bar_2}>Create 6 digits pin to secure all your money and your data in FazzPay app. Keep it secret and don`t tell anyone about your FazzPay account password and the PIN.</p>

                        <div className={css.pin}>
                            <div className={css.box_pin}>
                                <input className='inputs' type="text" name="" id="" maxlength="1" />
                            </div>
                            <div className={css.box_pin}>
                                <input className='inputs' type="text" name="" id="" maxlength="1" />
                            </div>
                            <div className={css.box_pin}>
                                <input className='inputs' type="text" name="" id="" maxlength="1" />
                            </div>
                            <div className={css.box_pin}>
                                <input className='inputs' type="text" name="" id="" maxlength="1" />
                            </div>
                            <div className={css.box_pin}>
                                <input className='inputs' type="text" name="" id="" maxlength="1" />
                            </div>
                        </div>


                        {/* Action */}
                        <button className={css.confirm}>Confirm</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Pin