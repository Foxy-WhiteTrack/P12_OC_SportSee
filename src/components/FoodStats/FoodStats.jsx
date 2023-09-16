import React, { useState, useEffect } from 'react';
import { getUserDataById } from '../../api/callApi';
import './FoodStats.css';

export default function FoodStats({ userId }) {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getUserDataById(userId);
                setUserData(user);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        }
        fetchData();
    }, [userId]);

    return (
        <>
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
        </>
    );
}
