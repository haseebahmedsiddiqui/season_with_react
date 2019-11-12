import React from 'react';
// import ReactDOM from 'react-dom';
import './SeasonDisplay.css';

const SeasonDisplay = (props) => {
    const Season = getSeason(props.lat, new Date().getMonth());
    const {text, iconsText} = seasonConfig[Season];
    // console.log(Season);
    return <div className={`season-display ${Season}`}>
          <i className={`${iconsText} icon-left massive icon`} />
          <h1> {text}</h1>
          <i className={`${iconsText} icon-right massive icon`} />
    </div>
    
    
}

const seasonConfig = {
    Summer : {
        text : 'Lets Hit the beach',
        iconsText : 'sun' 
    },
    Winter : {
        text : 'Burr, Its chilly',
        iconsText : 'snowflake'
    }
}

const getSeason = (lat , month)=>{
    if(month>2 && month<9){
        return lat > 0 ? 'Summer': 'Winter';
    }
    else{
        return lat > 0 ? 'Winter': 'Summer';
    }
}


export default SeasonDisplay;