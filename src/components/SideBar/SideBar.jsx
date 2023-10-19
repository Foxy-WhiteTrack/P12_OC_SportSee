import React from 'react';
import './SideBar.css';
import CyclingIcon from '../Icons/CyclingIcon';
import YogaIcon from '../Icons/YogaIcon';
import SwimIcon from '../Icons/SwimIcon';
import DumbbellsIcon from '../Icons/DumbbellsIcon';

export default function SideBar() {
    return (
        <>
            <div className='sidebar-ctn'>
                <aside className="sidebar">
                    <div className='icons'>
                        <a href="#">
                            <div className='icon'>
                                <YogaIcon />
                            </div>
                        </a>
                        <a href="#">
                            <div className='icon'>
                                <SwimIcon />
                            </div>
                        </a>
                        <a href="#">
                            <div className='icon'>
                                <CyclingIcon />
                            </div>
                        </a>
                        <a href="#">
                            <div className='icon'>
                                <DumbbellsIcon />
                            </div>
                        </a>
                    </div>
                    <div className='reversed'>
                        <p className='txt-reversed'>Copiryght, SportSee 2020</p>
                    </div>
                </aside>
            </div>

        </>
    );
}
