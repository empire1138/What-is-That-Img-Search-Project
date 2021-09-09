import React from 'react'
import { useEffect, useState } from 'react';
import './progressBar.css';

function ProgressBar() {

    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);

    const containerStyles = {
        height: 20,
        width: '50%',
        backgroundColor: "#e0e0de",
        borderRadius: 50, 
        marginTop: 25,
        justifyContent: 'center',
        
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor:  '#6494ed',
        borderRadius: 'inherit',
        textAlign: 'right'
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
    
      return (
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>{`${completed}%`}</span>
          </div>
        </div>
      );
    };

export default ProgressBar
