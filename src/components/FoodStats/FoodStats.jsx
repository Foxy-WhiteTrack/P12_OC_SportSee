import React, { useState, useEffect } from 'react';
import { allMockRequest } from '../../services/mockOrApi';

import { useParams } from 'react-router-dom';

import './FoodStats.css';

import Protein from '../Icons/Protein';
import Lipides from '../Icons/Lipides';
import Glucides from '../Icons/Glucides';
import Calories from '../Icons/Calories';

import Card from '../Card/Card';

export default function FoodStats({ }) {

    const { id } = useParams();

    // 
    const [userData, setUserData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const userDataInstance = await allMockRequest(id);
                setUserData(userDataInstance);

            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        }
        fetchData();
    }, [id]);

    return (
        <div className="ctn-icons">
            <Card icon={<Calories />} value={userData.keyData ? userData.keyData.calorieCount + 'kCal' : ''} label="Calories" />
            <Card icon={<Protein />} value={userData.keyData ? userData.keyData.proteinCount + 'g' : ''} label="Protéines" />
            <Card icon={<Glucides />} value={userData.keyData ? userData.keyData.carbohydrateCount + 'g' : ''} label="Glucides" />
            <Card icon={<Lipides />} value={userData.keyData ? userData.keyData.lipidCount + 'g' : ''} label="Lipides" />
        </div>
    );
}
