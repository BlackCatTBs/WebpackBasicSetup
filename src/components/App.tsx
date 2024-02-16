import { useState } from 'react'
import styles from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    return (
        <div>
            <Link to={'./about'}>About</Link>
            <br />
            <Link to={'./panel'}>Admin Panel</Link>
            <h1>Test Page {count}</h1>
            <button className={styles.button} type='button' onClick={increment}>Увеличить</button>
            <button className={styles.button} type='button' onClick={decrement}>Уменьшить</button>
            <Outlet />
        </div>
    )
}
