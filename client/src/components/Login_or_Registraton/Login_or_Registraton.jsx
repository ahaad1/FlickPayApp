import style from './Login_or_Registraton.module.css'
import walletIcon from '../../../assets/wallet.png';

export function Login_or_Registraton() {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.form_header}>
                    <img src={walletIcon} alt="Wallet Logo" />
                    <h1>FlickPay</h1>
                </div>
                <h2>Login or registration</h2>
                <form action="" className={style.reg_form}>
                    <div className={style.form_input_wrapper}>
                        <div className={style.input_wrapper}>
                            <label htmlFor="email" className={style.input_label}>Email</label>
                            <input type="email" id="email" placeholder='Enter your email' className={style.form_input}/>
                        </div>
                        <div className={style.input_wrapper}>
                            <label htmlFor="password" className={style.input_label}>Password</label>
                            <input type="password" id='password' placeholder='Enter your super strong password here' className={style.form_input}/>
                        </div>
                    </div>
                    <div className={style.form_action_buttons_wrapper}>
                        <button type="submit" className={style.form_btn}>Back</button>
                        <button type="submit" className={style.form_btn}>Continue</button>
                    </div>
                    <button type='submit' className={style.recovery_btn}>Password Recovery</button>
                </form>
            </div>
        </div>
    )
}