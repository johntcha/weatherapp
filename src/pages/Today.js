import React from 'react';

const Today = (props) => {
    return (
        <div className="">
        <input type="text" onChange={(e) => props.setCityName(e.target.value)} />
       	<button type="button" onClick={()=>props.getData()}>iss</button>
        </div>
    );
};


export default Today;
