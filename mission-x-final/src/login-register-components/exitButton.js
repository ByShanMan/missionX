import React from 'react'

import '../login-register-componentsCSS/exitButton.css'

export default function exitButton({handleDialogClose}) {
    
    return (
        <div>
             
            <span className='close' title='Close' onClick={()=> handleDialogClose()}>x</span>
            
        </div>
    )
}
