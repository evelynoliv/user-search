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
                        name: { title, first, last },
                        dob: { age, date },
                        // registered: { date },
                        picture: { large },
                        email,
                        login: { uuid, username }
                    } = user

                    return (
                        <div key={uuid}>
                            <img src={large} alt={first} />

                            <h3>
                                {title}. {first} {last} {gender}
                            </h3>
                            <p>{date}</p>

                            <p>{age}</p>

                        </div>
                    )
                }
                )}


            </section>
        </div>
    )
}

export default FetchUsers;
