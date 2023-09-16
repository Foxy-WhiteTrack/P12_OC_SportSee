import React from 'react';
import './Community.css';

fetch('http://localhost:3000/user/12').then((response) => {
    console.log(response);
})

export default function Community() {
    return (
        <>
            <div className='community'>
                <div className='container-datas'>
                    <h1>Coucou</h1>
                </div>
            </div>

        </>
    );
}