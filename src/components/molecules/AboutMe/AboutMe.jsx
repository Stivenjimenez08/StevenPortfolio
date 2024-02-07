import { Button, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import photo from '../../../assets/fotohv.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { DownloadButton } from '../../atoms/DownloadButton';

export const AboutMe = () => {

  const { t } = useTranslation()

  return (
    <div className='contentHome'>
      <img src={photo} alt="Photo About Me" className='photo'/>
      <Typography>Steveen Jimenez Zuluaga</Typography>
      <Typography>{t('profession')}</Typography>
      <div className='contentDescription'>
        <Typography>{t('description')}</Typography>
        <Typography>{t('description2')}</Typography>
      </div>
      <div className='contentNetworks'>
        <Button><LinkedInIcon color={'secondary'}/></Button>
        <Button><GitHubIcon color={'secondary'}/></Button>
      </div>
      <DownloadButton/>
    </div>
  )
}
