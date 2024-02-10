import { Typography } from '@mui/material'
import DevelopDark from '../../../assets/develop.gif'
import DevelopLight from '../../../assets/develop2.gif'
import { useTranslation } from 'react-i18next'
import "../../StyleComponent.css"

export const AboutMe = ({ isDarkTheme }) => {
    const { t } = useTranslation();
    const developGif = isDarkTheme ? DevelopDark : DevelopLight;

  return (
    <div className="contentAboutMe">
        <img src={developGif} className='imgDevelop'/>
        <div className='ContentAbout'>
            <Typography id="description">{t("description")}</Typography>
            <Typography id="description">{t("description2")}</Typography>
        </div>
    </div>
  )
}
