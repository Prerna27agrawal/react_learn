// month is 0 based indexed that is 11 is for december

import React from 'react';
import './SeasonDisplay.css';
const seasonConfig ={
     summer: {
          text:"let's hit the beach",
          iconName: 'sun'
     },
     winter:{
          text:'Burr it is cold',
          iconName :'snowflake'
     }
};

const getSeason = (lat,month)=>{
      if(month > 2 && month <9){
           //lat >0 then in northern hemisphere
          return lat > 0 ?'summer':'winter';
      }
      else{
           return lat>0 ? 'winter':'summer';
      }
}

const SeasonDisplay = props =>{
     const season = getSeason(props.lat,new Date().getMonth());
    //refractor the below code from code on line 5 around
     // const text = season === 'winter'? 'Burr,it is chilly':'Lets hit the beach';
     // const icon = season === 'winter'?'snowflake':'sun';

    const{text,iconName}=seasonConfig[season] //{text,iconNAme}
     return (
       <div className = {`season-display ${season}`}>
          <i className={`icon-left massive ${iconName} icon`}/>
          <h1>{text}</h1>
          <i className={`icon-right massive ${iconName} icon`}/>
       </div>
     );
};
 export default SeasonDisplay;