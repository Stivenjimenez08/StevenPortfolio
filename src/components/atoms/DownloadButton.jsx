import React from 'react';
import Hv from '../../assets/Hv-SteveenJimenez.pdf'
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';


export const DownloadButton = () => {

  const { t} = useTranslation();

  const handleDownload = () => {
    
    const cvUrl = Hv;

    const link = document.createElement('a');
    link.href = cvUrl;

    link.setAttribute('download', 'HvSteveenJimenez.pdf');
    link.setAttribute('target', '_blank');

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} color='secondary' className='btnDownload'>
     {t('download')}
    </Button>
  );
};

