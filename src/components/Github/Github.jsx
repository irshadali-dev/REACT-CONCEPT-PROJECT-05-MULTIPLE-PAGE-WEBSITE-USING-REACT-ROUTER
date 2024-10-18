import React, { useEffect, useState } from 'react'



function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/irshadali7689")
            .then(responce => responce.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [])
    return (
        <div className='bg-gray-700 text-yellow-100 text-3xl p-4 rounded-lg'>Github Id : {data.login}
            <img src={data.avatar_url} alt="Github Profile Pic" /></div>
    )
}


export default Github