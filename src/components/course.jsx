import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Course = ({course}) => {
    // Accepts contentful object
    const {sys, fields: {...data}} = course
    return (
        <Card>
            <CardMedia
                src={data.image ? data.image : null}
                title={data.title}
            />
                <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {data.title}
                </Typography>
                <Typography component="p">
                    Author: {data.author}
                </Typography>
                </CardContent>
        </Card>
    )
}

export default Course