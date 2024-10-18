import React from 'react'
import { useParams } from 'react-router-dom'



function User() {
    const { userid } = useParams()
    return (
        <div className='bg-gray-700 text-yellow-100 text-3xl p-4 rounded-lg'>User :{userid} </div>
    )
}


export default User