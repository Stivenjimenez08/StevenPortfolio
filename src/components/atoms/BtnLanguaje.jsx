import { useTranslation } from 'react-i18next';
import i18n from '../../config/i18next.config'

export const BtnLanguaje = () => {

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <button onClick={toggleLanguage} className='bg-slate-100 px-3 py-2 rounded hover:bg-slate-300'>
        {i18n.language === 'en' ? 'Es' : 'En'}
      </button>

      <div>
        <h1>{t('welcome')}</h1>
        <p>{t('about')}</p>
      </div>
    </div>
  );
}