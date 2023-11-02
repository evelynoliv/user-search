import React, {useEffect, useState } from 'react'
import { BASE_URL } from './constants/urls'

const FetchUsers = () => {
    const [user, setUsers] = useState([])

    useEffect(() => {
      const fetchUserData = async() => {
        const resp = await fetch(BASE_URL)
        const users = await resp.json()
        setUsers(users)
        console.log(users)

      }
      fetchUserData()
      })
    
      

  return (
    <div>FETCH USERS</div>
  )
}

export default FetchUsers;
