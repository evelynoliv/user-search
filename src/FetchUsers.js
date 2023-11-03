import React, { useEffect, useState } from 'react'
import { BASE_URL } from './constants/urls'

const FetchUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUserData = async () => {
            const resp = await fetch(BASE_URL)
            const users = await resp.json()
            setUsers(users.results)
            console.log(users.results)
        }

        fetchUserData()
    }, [])



    return (
        <div>
            <h1>Users</h1>
            <section>
                {users.map((user) => {
                    
                    const { gender,
                        name: {
                            title,
                            first,
                            last 
                        },
                        dob: {
                            age
                        },
                        registered: {
                            date
                        },
                    } = user
                    return (
                        <div key={user.login.uuid}>
                            <h3>{user.login.uuid} {title}. {first} {last} {gender} {age} {date}
                            </h3>
                        </div>
                    )
                }
                )}


            </section>
        </div>
    )
}

export default FetchUsers;
