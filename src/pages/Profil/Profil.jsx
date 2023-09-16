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

                </div>
            </div>

            <div className='nutriments'>
                <div className='kcal'>
                    <div className='icon-kcal'>

                    </div>
                    <p className='nbr-kcal'>{userData.keyData ? userData.keyData.calorieCount : ''}</p>
                    <p>Calories</p>
                </div>
                <div className='protein'>
                    <div className='icon-protein'>

                    </div>
                    <p className='nbr-protein'>{userData.keyData ? userData.keyData.proteinCount : ''}</p>
                    <p>Proteines</p>
                </div>
                <div className='glucides'>
                    <div className='icon-glucides'>

                    </div>
                    <p className='nbr-glucides'>{userData.keyData ? userData.keyData.carbohydrateCount : ''}</p>
                    <p>Glucides</p>
                </div>
                <div className='lipides'>
                    <div className='icon-lipides'>

                    </div>
                    <p className='nbr-lipides'>{userData.keyData ? userData.keyData.lipidCount : ''}</p>
                    <p>Lipides</p>
                </div>
            </div>
        </>
    );
}
