import { Fragment } from "react";

export default function TodoList() {
    return (
        <>
            <h1>Hedy Lamarr's Todos</h1>
            <img 
                src="https://i.imgur.com/yXOvdOSs.jpg" 
                alt="Hedy Lamarr" 
                class="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </>

        
    )
}

// You can also use <Fragment>, but <> is a short-hand implementation
// Example:
// import { Fragment } from "react";
// ...
// ...
//  return <Fragment>
// ...
//  </Fragment>