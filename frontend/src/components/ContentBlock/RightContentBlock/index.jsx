import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { withTranslation } from 'react-i18next';
import { SvgIcon } from '../../../common/SvgIcon';
import { Button }  from '../../../common/Button';
import { Fade } from 'react-awesome-reveal';
import {
  RightBlockContainer,
  ContentWrapper,
  ButtonWrapper,
} from './styles';

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Grid container align="middle" id={id}>
          <Grid  item lg={6} md={6} sm={6} xs={12}>
            <ContentWrapper>
              <Typography variant='h1'>{t(title)}</Typography>
              <Typography variant="h5">{t(content)}</Typography>
              <ButtonWrapper>
                {typeof button === 'object' &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo('about')}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Grid>
        </Grid>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
