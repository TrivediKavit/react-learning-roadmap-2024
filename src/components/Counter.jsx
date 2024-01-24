import { useState } from "react"

export default function Counter({ starting = 0, title = "Counter" }) {
    const [count, setCount] = useState(starting)

    return (
        <>
            <div>{title}</div>
            <p>
                Current Value of `count`: <br />
                <code>{count}</code>
            </p>
            <button onClick={() => setCount((count) => count + 1)}>Increment Count</button>
        </>
    )
}