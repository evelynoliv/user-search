import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import './FetchUsers.css'

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
            <h1>List Users</h1>

            <input></input>
            
            <section className="main-section">
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
                                {title}. {first} {last}
                            </h3>
                            <p>{gender}</p>
                            <p>{date}</p>

                            <p>{age} Years</p>

                        </div>
                    )
                }
                )}


            </section>
        </div>
    )
}

export default FetchUsers;
