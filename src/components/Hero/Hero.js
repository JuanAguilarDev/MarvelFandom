import React, { useState, useEffect } from 'react'

import './Hero.css';

export const Hero = ({ hero }) => {
    return (

        <div style={{ 'backgroundColor': "#286B98" }}>
            {
                hero &&

                <div className='hero--container'>
                    <div className='hero--container__info'>
                        <div className='hero--info col-xs-12 col-md-4'>
                            <h2 className='hero--title'>{hero.data.results[0].name}</h2>
                            <button className='price-tag comics--font'>Watch comics!</button>
                        </div>
                        <img className='col-xs-12 col-md-7' src={`${hero.data.results[0].thumbnail.path}.jpg`} alt="" />
                    </div>
                </div>
            }

        </div>

    )
}
