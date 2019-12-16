import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ menutitle, imageUrl }) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}
        className='menu-item'>
        <div className='content'>
            <h1 className='title'>{menutitle}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;
