import React from 'react';
import Hv from '../../assets/Hv-SteveenJimenez.pdf'

export const DownloadButton = () => {

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
    <button onClick={handleDownload}>
      Descargar Hoja de Vida
    </button>
  );
};

