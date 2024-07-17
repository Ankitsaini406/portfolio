import style from '@/styles/Navbar.module.css';

const Loading = () => {
    return (
        <div className={`${style.lodingbox}`}>
            <div className={style.lodingdiv}></div>
            <div className={style.lodingdiv}></div>
            <div className={style.lodingdiv}></div>
            <div className={style.lodingdiv}></div>
        </div>
    )
}

export default Loading;