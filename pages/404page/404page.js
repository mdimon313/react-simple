import React from 'react';


const NoMatch = ({history})=> {
    return (
        <div>
            <h2 style={{fontSize:'5rem', textAlign: 'center'}}>404 Page</h2>
            <p style={{textAlign: 'center', fontSize: '16px'}}>Redirecting to <span style={{color:'dodgerblue', cursor: 'pointer', userSelect:'none'}} onClick={()=> history.push('/')}>Login Page</span></p>
        </div>
    )
}

export default NoMatch;