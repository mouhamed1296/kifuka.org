import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { withTranslation } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import { Button }  from '../../common/Button';
import { MiddleBlockSection, ContentWrapper } from './styles';


const MiddleBlock = ({ title, content, button, t }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Grid container  justify="center" align="middle">
          <ContentWrapper>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography variant='h1'>{t(title)}</Typography>
              <Typography variant='h5'>{t(content)}</Typography>
              {button && (
                <Button  name="submit" onClick={() => scrollTo('mission')}>
                  {t(button)}
                </Button>
              )}
            </Grid>
          </ContentWrapper>
        </Grid>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
