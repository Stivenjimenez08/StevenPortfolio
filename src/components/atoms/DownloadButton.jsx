import React from 'react';
import Hv from '../../assets/Hv-SteveenJimenez.pdf'
import cv from "../../assets/Networks/cv.png";
import "../StyleComponent.css"
import { useTranslation } from 'react-i18next';


export const DownloadButton = () => {

  const { t } = useTranslation();

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
    <div class="image-container">
      <a onClick={handleDownload} color='secondary' className='btnDownload socialLink' href='#'>
      <img src={cv} className="socialMediaCv" alt="Descargar Cv" /></a>
      <div class="image-name">{t("download")}</div>
    </div>
  );
};

