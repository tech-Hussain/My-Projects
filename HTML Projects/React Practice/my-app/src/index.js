import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const date=new Date().getHours()

var status,color;
if (date>=1&&date<=11) {
    status="Morning"
    color="#ed9600"
}
else if (date>=12&&date<=19) {
    status="Afternoon"
    color="#edc600"
}
else{
    status="Night"
    color="#0a4170"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <span className='static'>Hello sir,</span><span style={{marginLeft:"1rem",color:color}}>Good {status}</span>
    </>
);
