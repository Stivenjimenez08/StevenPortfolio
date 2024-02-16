import {Card, CardHeader, CardMedia, CardContent, Typography, Button} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import "../StyleComponent.css"

export const CardProject = ({ title, image, text, github, web }) => {

  return (
    <Card className='card'>
      <CardHeader className='titleCard' title= {title} />
      <CardMedia 
        className='mediaCard'
        component="img"
        image= {image}
      />
      <CardContent>
        <div className='textCard'>
          <Typography > {text} </Typography>
        </div>
        <div className="buttonContainer" style={{ alignSelf: 'flex-end' }}>
          {github && (
            <Button variant="contained" color="secondary" href={github} target="_blank" startIcon={<GitHubIcon/>} sx={{ml:1, mt:1}}>
              GitHub
            </Button>
          )}
          {web && (
            <Button variant="contained" color="secondary" href={web} target="_blank" startIcon={<ScreenSearchDesktopIcon/>} sx={{ml:1, mt:1}}>
              Web
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}