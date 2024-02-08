import { useState } from 'react'

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
            <h1>Test Page {count}</h1>
            <button type='button' onClick={increment}>Увеличить</button>
            <button type='button' onClick={decrement}>Уменьшить</button>
        </div>
    )
}
