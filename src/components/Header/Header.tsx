import { Envelope, FilePdf, GithubLogo, LinkedinLogo, MapPin } from 'phosphor-react'
import { useTranslation } from "react-i18next";

import photo from '../../assets/images/photo.jpg'
import enCV from '../../assets/files/SergioJunior_CV_English.pdf'
import ptBRCV from '../../assets/files/SergioJunior_CV.pdf'

import { List } from '../../styles/lists';
import { Container } from './styles';
import { Switch } from './switch';

interface HeaderProps {
    isDarkMode: boolean,
    changeColorScheme: () => void
}

export function Header({ isDarkMode, changeColorScheme }: HeaderProps){
    const { t, i18n } = useTranslation()
    const isEnglish = (i18n.language === 'en')
  
    function handleChangeLanguage(lang: string) {
        i18n.changeLanguage(lang)
    }

    return (
        <Container>
            <div className='pageSelectors'>
                <List>
                    <li className={!isEnglish ? 'active' : ''} onClick={() => handleChangeLanguage('ptBR')}>Português</li>
                    <li className={isEnglish ? 'active' : ''}  onClick={() => handleChangeLanguage('en')}>English</li>
                </List>

                <Switch>
                    <div className={`yang ${isDarkMode && 'active'}`}></div>
                    <input type="checkbox" checked={isDarkMode} onChange={changeColorScheme} />
                    <span className="slider"></span>
                    <div className={`yin ${!isDarkMode && 'active'}`}></div>
                </Switch>
            </div>

            <img src={photo} alt="Profile picture" />
            <h2> Sergio Junior </h2>
            <h2> {t('header.title')} </h2>

            <div className='social'>
                <a href={isEnglish ? enCV : ptBRCV} title='Curriculum'> <FilePdf size={'2.5rem'} /> </a>
                <a href={t('header.linkedin')} title='LinkedIn'> <LinkedinLogo size={'2.5rem'} /></a>
                <a href="https://github.com/juniorsergio/" title='GitHub'> <GithubLogo size={'2.5rem'} /> </a>
            </div>

            <div className='localization'>
                <MapPin size={20} />
                {t('header.localization')}
            </div>

            <div className='email'>                   
                <Envelope size={20} />
                <a href='mailto:sergio.junior55@hotmail.com'>
                    sergio.junior55@hotmail.com
                </a>
            </div>
        </Container>
    )
}
