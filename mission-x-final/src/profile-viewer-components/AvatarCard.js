import React from 'react';

import { Avatar } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
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
        '&:hover': {
            background: 'none',
            borderWidth: '3px',
            borderColor: 'rgb(67,192,246)',
        },
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

export default function AvatarCard(props) {
    const styles = useStyles();

    return (
        <Card variant='outlined' className={styles.root}>
            <CardContent 
            className={styles.avCard}
            >
                <Avatar 
                className={styles.avPic}>
                    <img src={props.avatarPicture} alt="mainAvatar"/>
                </Avatar>
                <div 
                className="avCardButtons">
                    <Button 
                    variant ='outlined'
                    size = "large"
                    color = "primary"
                    className={styles.avCardButtons}
                    >
                    edit profile
                    </Button>
                    <Button 
                    variant ='outlined'
                    size = "large"
                    color = "primary"
                    className={styles.avCardButtons}
                    >
                    change photo
                    </Button>
                    <Button 
                    variant ='outlined'
                    size = "large"
                    color = "primary"
                    className={styles.avCardButtons}
                    >
                    settings
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
