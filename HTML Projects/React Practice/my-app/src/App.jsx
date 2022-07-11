import React, { useState } from 'react';
const App=()=>{
    var currentTime=new Date().toLocaleTimeString()
    const [ctime,utime]= useState(currentTime)
    setInterval(() => {
        utime(new Date().toLocaleTimeString())
    }, 1000);
 return(
    <>
        <h1 className='Time'>{ctime}</h1>
    </>
 )
}
export default App