import React from 'react';
import { Button } from '@material-ui/core';
import { orange } from '@material-ui/core/colors'

import '../componentsCSS/backUp.css'

function BackUp() {
    return (
        <div className="backUpButton">
                         
            <Button className="button" style={{backgroundColor: "orange", color: "white", fontWeight: "bold", minWidth: '130px'}}size="small" variant="contained">BACK TO TOP</Button>
        
        </div>
        
    )
}


export default BackUp