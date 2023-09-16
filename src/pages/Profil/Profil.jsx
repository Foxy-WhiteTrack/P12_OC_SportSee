import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Profil.css';
import { getUserDataById } from '../../api/callApi.js';

import Goals from '../../components/Goals/Goals';
import FoodStats from '../../components/FoodStats/FoodStats';


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
            <div className='welcome'>
                <h1 className='hello'>Bonjour <span>{userData.userInfos ? userData.userInfos.firstName : ''}</span></h1>
                <p className='congrats'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='weight'>

            </div>
            <div className='datas-perf'>
                <div className='objectifs'>

                </div>
                <div className='radar'>

                </div>
                <div className='score'>
                    <Goals userId={id} />
                </div>
            </div>

            <div className='nutriments'>
                <FoodStats userId={id} />
            </div>
        </>
    );
}
