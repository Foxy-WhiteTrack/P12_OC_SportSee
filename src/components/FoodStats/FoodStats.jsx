import React, { useState, useEffect } from 'react';
import { getUserDataById } from '../../services/callApi';
import './FoodStats.css';

import Protein from '../Icons/Protein';
import Lipides from '../Icons/Lipides';
import Glucides from '../Icons/Glucides';
import Calories from '../Icons/Calories';

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
        <div className='ctn-icons'>
            <div className='icons-food'>
                <div className='iconf'>
                    <Calories />
                </div>
                <div className='datas-icons'>
                    <p className='nbr'>{userData.keyData ? userData.keyData.calorieCount + 'kCal' : ''}</p>
                    <p className='name'>Calories</p>
                </div>
            </div>
            <div className='icons-food'>
                <div className='iconf'>
                    <Protein />
                </div>
                <div className='datas-icons'>
                    <p className='nbr'>{userData.keyData ? userData.keyData.proteinCount + 'g' : ''}</p>
                    <p className='name'>Proteines</p>
                </div>
            </div>
            <div className='icons-food'>
                <div className='iconf'>
                    <Glucides />
                </div>
                <div className='datas-icons'>
                    <p className='nbr'>{userData.keyData ? userData.keyData.carbohydrateCount + 'g' : ''}</p>
                    <p className='name'>Glucides</p>
                </div>
            </div>
            <div className='icons-food'>
                <div className='iconf'>
                    <Lipides />
                </div>
                <div className='datas-icons'>
                    <p className='nbr'>{userData.keyData ? userData.keyData.lipidCount + 'g' : ''}</p>
                    <p className='name'>Lipides</p>
                </div>
            </div>
        </ div>
    );
}
