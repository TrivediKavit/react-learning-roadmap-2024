import { useState } from "react"

export default function Avatar({ imageUrl, size = 100 }) {

    const [img, changeImg] = useState(imageUrl)

    return (
        <>
            <button onClick={() => changeImg(() => 'https://i.imgur.com/YfeOqp2.jpg')}>
                Click Here
            </button>
            <img
                className="avatar"
                src={img}
                alt="Lin Lanying"
                width={size}
                height={size}
            />
        </>
    )
}
  