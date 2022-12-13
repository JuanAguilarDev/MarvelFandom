import React, { useState, useEffect } from 'react'
import { apiCall } from '../../helpers/apiCall';

import './Hero.css';

export const Hero = () => {
    const [hero, setHero] = useState(null);

    useEffect(() => {
        apiCall({urlParam: 'characters/1016181'}).then(data => {
            setHero(data.data);
        });
    }, []);

    return (
    
    <div style={{'backgroundColor': "#37AEB6"}}>
        {
            hero  && 
            
            <div className='container hero--container'>
                <div className='row'>
                    <img className='col-xs-12 col-md-8' src={`${hero.data.results[0].thumbnail.path}.jpg`} alt=""/>
                    <div className='hero--info col-xs-12 col-md-4'>
                        <h2 className='hero--title'>{hero.data.results[0].name}</h2>
                    </div>
                </div>
            </div>
        }
        
    </div>
    
  )
}
