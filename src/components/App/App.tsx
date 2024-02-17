import { useState } from 'react'
import styles from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import user from '@/assets/user.png'
import About from '@/assets/about-20-20.svg'

export const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const test = (num: number) => {
        console.log(num)
    }

    test(123)

    const wrapperError = () => {
        error()
    }

    const error = () => {
        throw new Error()
    }

    // if (__PLATFORM__ == 'desktop') {
    //     return <div>DESKTOP</div>
    // }

    // if (__PLATFORM__ == 'mobile') {
    //     return <div>MOBILE</div>
    // }

    return (
        <div>
            <h1>Test Page</h1>
            <nav>
                <Link to={'./about'}>About</Link>
                <br />
                <Link to={'./panel'}>Admin Panel</Link>
            </nav>
            <h2>
                {count}
            </h2>
            <button className={styles.button} type='button' onClick={increment}>Увеличить</button>
            <button className={styles.button} type='button' onClick={decrement}>Уменьшить</button>
            <button type='button' className={styles.buttonError} onClick={() => wrapperError()}>Error</button>
            <h2 data-testid='test-variables'>Platform: {__PLATFORM__} Mode: {__MODE__}</h2>
            <div>
                <h2> Test Image Block </h2>
                <div>
                    <img src={user} alt="user" width={50} height={50} />
                </div>
                <div>
                    <About fill={'red'} height={50} width={50}/>
                </div>
                <div>
                    <About style={{color: 'blue'}} height={50} width={50}/>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
