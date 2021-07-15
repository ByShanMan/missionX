import React from 'react'
import { Grid } from '@material-ui/core'
import '../componentsCSS/footer.css'

function Footer() {
    return (
        <div className="footer">  
            <Grid container spacing={0}>

                <Grid item xs={2}>
                    <div className="title" style={{height: '340px', backgroundColor: '#b2e4fa', padding: '50px'}}>
                        <h3 className="first">COMPANY</h3>
                        <ul className="col1" style={{listStyleType: 'none'}}>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Partners</li>
                        </ul>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <div className="title" style={{height: '340px', backgroundColor: '#b2e4fa', padding: '50px'}}>
                        <h3 className="second">COURSES</h3>
                        <ul className="col2" style={{listStyleType: 'none'}}>
                        <li>Register</li>
                        <li>Login</li>
                        <li>Projects</li>
                        <li>Teachers</li>
                        <li>Parents</li>
                        <li>Resources</li>
                        </ul>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <div className="title" style={{height: '340px', backgroundColor: '#b2e4fa', padding: '50px'}}>
                        <h3 className="third">SUPPORT</h3>
                        <ul className="col3" style={{listStyleType: 'none'}}>
                        <li>FAQs</li>
                        <li>Helpdesk</li>
                        <li>Contact Us</li>
                        </ul>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className="title" style={{ height: '340px', backgroundColor: '#b2e4fa', padding: '50px'}}>
                        <h3 className="fourth">LEGAL</h3>
                        <ul className="col4" style={{listStyleType: 'none'}}>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        </ul>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className="lastTitle" style={{width: '376px', height: '390px', backgroundColor: '#b2e4fa', paddingBlockStart: '50px', paddingRight: '50px',}}>
                        <h3 className="fifth">LevelUp Works</h3>
                        <p className="col5">LevelUp Works is an Auckland-based enterprise dedicated to developing game-based
                        learning software to help teachers in response to the New Zealand Digital Technologies & Hangarau Matihiko.
                        alan@levelupworks.com<br></br>
                        (021) 668 185</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
