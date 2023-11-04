import React from 'react';
import './Card.css';

export default function Card({ icon, value, label }) {
    return (
        <div className="card">
            <div className="icon">{icon}</div>
            <div className="datas-icons">
                <p className="nbr">{value}</p>
                <p className="name">{label}</p>
            </div>
        </div>
    );
}
