import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Profil.css';
import { getUserDataById } from '../../api/callApi.js';

export default function Profil() {
    const { id } = useParams();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {

                const user = await getUserDataById(id);
                setUserData(user);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        }

        fetchData();
    }, [id]);

    return (
        <>
            <div className='profil'>
                <h1 className='profile__hello'>Bonjour <span>{userData.userInfos ? userData.userInfos.firstName : ''}</span></h1>
                <p className='profile__congrats'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        </>
    );
}
