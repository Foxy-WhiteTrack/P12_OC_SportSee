import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { getUserDataById } from '../../services/callApi.js';

export default function Home() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const user1 = await getUserDataById(12);
                const user2 = await getUserDataById(18);

                setUserData([user1, user2]);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="dual-profil">
                {userData.map((user) => (
                    <Link className='profil-solo' to={`/profil/${user.id}`} key={user.id}>
                        <>
                            <h2>{user.userInfos.firstName}</h2>
                            <h3>{user.userInfos.lastName}</h3>
                        </>
                    </Link>
                ))}
            </div>
        </>
    );
}
