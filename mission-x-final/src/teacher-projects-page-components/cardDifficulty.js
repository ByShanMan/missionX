import React from 'react'
import { Button } from '@material-ui/core'

import '../teacher-projects-page-componentsCSS/cardDifficulty.css';

function CardDifficulty() {
    return (

        
        <div className="buttons">

            <Button style={{minWidth: '120px', backgroundColor: "dodgerBlue", color: "white", padding: '1px'}} size="small" variant="contained">BEGINNER</Button>
            <Button style={{minWidth: '120px', padding: '1px'}}size="small" variant="contained">INTERMEDIATE</Button>
            <Button style={{minWidth: '120px', padding: '1px'}}size="small" variant="contained">ADVANCED</Button>
            <div className="showCards">

        </div>
        </div>


    )
}


export default CardDifficulty