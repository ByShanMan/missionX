import React from 'react'
import { Button } from '@material-ui/core'

import '../student-projects-page-componentsCSS/numberOfCards.css'

export default function NumberOfCards() {
    return (


        <div className="showCards">

        <div className="showText">SHOW</div>
            <Button style={{backgroundColor: "dodgerBlue", padding: '0px'}} size="small" variant="contained" color="primary">25</Button>
            <Button style={{padding: '0px'}}size="small" variant="contained">50</Button>
            <Button style={{padding: '0px'}}size="small" variant="contained">100</Button>    
        </div>
    )
};
