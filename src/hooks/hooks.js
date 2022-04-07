import React, { useState, useEffect } from 'react';

function Hooks() {


    const [count2, setCount] = useState(0);

    useEffect(() => {
        console.log('count改变阿')
    }, [count2]);

    return (
        <div>
            { count2 } <br />
            <button onClick={ ()=>{setCount(count2+1)} }> 点击 </button>
        </div>
    )

}

export default Hooks;