import * as React from 'react';
import {Card, CardHeader, CardMedia, CardContent, Typography} from '@mui/material';

export const CardProject = ({ title, image, text }) => {

  return (
    <Card className='card'>
      <CardHeader className='titleCard'
        title= {title} 
      />
      <CardMedia 
        className='mediaCard'
        component="img"
        image= {image}
      />
      <CardContent>
        <Typography> {text} </Typography>
      </CardContent>
    </Card>
  );
}