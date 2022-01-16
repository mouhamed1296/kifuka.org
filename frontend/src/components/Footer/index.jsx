import Grid from '@mui/material/Grid';
import { withTranslation } from 'react-i18next';
import { SvgIcon } from '../../common/SvgIcon';
import Container from '../../common/Container';
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  FooterContainer,
  Language,
} from './styles';


const Footer = ({ t }) => {

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Grid container justify="space-between">
            <Grid item lg={5} md={5} sm={6} xs={6}>
              <Language>{t('Contact')}</Language>
              <Large to="/">{t('Tell us everything')}</Large>
              <Para>
                {t('Do you have any question? Feel free to reach out.')}
              </Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t('Let\'s Chat')}</Chat>
              </a>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6}>
              <Title>{t('Policy')}</Title>
              <Large to="/" left="true">
                {t('Application Security')}
              </Large>
              <Large left="true" to="/">
                {t('Software Principles')}
              </Large>
            </Grid>
          </Grid>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Grid
            align="middle"
            style={{ paddingTop: '3rem' }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/Kifuka"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/KifukaDAO"
                src="twitter.svg"
              />
            </FooterContainer>
          </Grid>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
