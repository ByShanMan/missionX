import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles= makeStyles({
    root: {
        width: '390px',
        height: "600px",
        marginLeft: "50%",
        marginRight: "10%",
        borderRadius: "35px",
    },
    avCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '8%',
    },
    avPic: {
        width: '200px',
        height: '200px',
        marginTop: '1.5em'
    },
    avCardButtons: {
        display: 'flex',
        minWidth: '200px',
        marginTop: '3em',

        borderWidth: '3px',
        borderRadius: "15px",
        borderColor: 'rgb(67,192,246)',

        fontSize: '16px',
        fontWeight: '800',
        color: 'rgb(67,192,246)'
    }
});

export default function AvatarCard({selectedUser}) {
    const styles = useStyles();

    return (
        <Card variant='outlined' className={styles.root}>
            <CardContent 
            className={styles.avCard}
            >
                <Avatar 
                className={styles.avPic}>
                    <img src={selectedUser.imgURL} alt="mainAvatar"/>
                </Avatar>
                <div 
                className="avCardButtons">
                    <Button 
                    variant ='outlined'
                    size = "large"
                    color = "primary"
                    className={styles.avCardButtons}
                    >
                    EDIT PROFILE
                    </Button>
                    <Button 
                    variant ='outlined'
                    size = "large"
                    color = "primary"
                    className={styles.avCardButtons}
                    >
                    CHANGE PHOTO
                    </Button>                 
                    <Button
                    variant ='outlined'
                    size = "large"
                    color = "primary" 
                    className={styles.avCardButtons}
                    
                    >
                    SETTINGS
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
