import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { withTranslation } from 'react-i18next';
import { SvgIcon } from '../../../common/SvgIcon';
import { Fade } from 'react-awesome-reveal';
import {
  LeftContentSection,
  ContentWrapper,
  ServiceWrapper,
} from './styles';

const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
}) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Grid  container justify="space-between" align="middle" id={id}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <ContentWrapper>
              <Typography variant="h1" >{t(title)}</Typography>
              <Typography variant="h5">{t(content)}</Typography>
              <ServiceWrapper>
                <Grid container justify="space-between">
                  {typeof section === 'object' &&
                    section.map((item, id) => {
                      return (
                        <Grid item key={id} lg={6} md={6} sm={6} xs={6}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <Typography variant="h6">{t(item.title)}</Typography>
                          <Typography variant="h5">{t(item.content)}</Typography>
                        </Grid>
                      );
                    })}
                </Grid>
              </ServiceWrapper>
            </ContentWrapper>
          </Grid>
        </Grid>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
