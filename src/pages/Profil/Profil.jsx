import React from 'react';
import { useState } from 'react';

import './Profil.css';

export default function Profil() {

    const [userData, setUserData] = useState({});

    return (
        <>
            <div className='profil'>
                <h1 className='profile__hello'>Bonjour <span>User</span></h1>
                <p className='profile__congrats'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        </>
    );
}
