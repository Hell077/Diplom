import styles from './aside.module.css';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function Aside({ setActiveComponent }) {
    const [transform, setTransform] = useState("translateX(0%)");
    const login = useSelector((state) => state.login.login);
    const navigate = useNavigate();

    function newTransform() {
        setTransform(prevTransform =>
            prevTransform === "translateX(-80%)" ? "translateX(0)" : "translateX(-80%)"
        );
    }

    const handleRegisterRedirect = () => {
        navigate('/');
    };

    return (
        <aside style={{ transform }} className={styles.aside}>
            {login != '' ? (
                <div className={styles.login}>
                    <span>Имя пользователя</span>
                    <h1>{login}</h1>
                </div>
            ) : (
                <div className={styles.loginRedirect}>
                    <h3>Вы не авторизованы</h3>
                    <button onClick={handleRegisterRedirect}>Авторизация</button>
                </div>
            )}
            <button className={styles.show} onClick={newTransform}></button>
            <button className={styles.Cart} onClick={() => setActiveComponent('cart')}>Корзина</button>
            <button className={styles.MyKeys} onClick={() => setActiveComponent('myKey')}>Мои ключи</button>
            {login === "admin" && (
                <button className={styles.Admin} onClick={() => setActiveComponent('Admin')}>
                    Админка
                </button>
            )}
        </aside>
    );
}

export default Aside;
