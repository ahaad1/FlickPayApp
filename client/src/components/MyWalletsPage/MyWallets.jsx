import style from './MyWallets.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import WalletIcon from '@mui/icons-material/Wallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

export function MyWallets() {
    return (
        <>
            <div className={style.wallets_content}>
                <div className={style.top}>
                    <div className={style.top_title}>
                        <h2>
                            Мои кошельки
                        </h2>
                    </div>
                    <div className={style.top_description}>
                        <h4>
                            Все ваши кошельки в одном месте
                        </h4>
                    </div>
                </div>
                <div className={style.wallets_action}>
                    <button className={style.wallet_btn}>
                        <FontAwesomeIcon icon={faWallet} className={style.wallet_btn_icon} />
                        Добавить кошелек
                    </button>
                    <button className={style.wallet_btn}>
                        <WalletIcon className={style.wallet_btn_icon} />
                        Открыть кошелек
                    </button>
                </div>
                <div className={style.wallets_container}>
                    <div className={style.wallet_rounded}>
                        <div className={style.wallet_card}>
                            <div className={style.wallet_content}>
                                <div className={style.wallet_logo}>
                                    <AccountBalanceIcon />
                                </div>
                                <div className={style.wallet_money}>
                                    10.000 <CurrencyBitcoinIcon/>
                                </div>
                                <div className={style.wallet_owner_info}>
                                    <div className={style.wallet_owner}>
                                        Ahad Askarov
                                    </div>
                                    <div className={style.wallet_address}>
                                        9860 1701 0396 0689
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.wallet_interaction}>
                            <button>
                                <AutoAwesomeRoundedIcon className={style.wallet_interaction_icon}/>
                            </button>
                            <div className={style.wallet_interaction_wrapper}>
                                <button>
                                    <SendRoundedIcon className={style.wallet_interaction_icon}/>
                                </button>
                                <button>
                                    <DeleteOutlineRoundedIcon className={style.wallet_interaction_icon_red}/>
                                </button>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}