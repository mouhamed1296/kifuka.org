import Grid from '@mui/material/Grid';
import { withTranslation } from 'react-i18next';
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import {
  HeaderSection,
  LogoContainer,
} from './styles';

const Header = ({ t }) => {
  return (
    <HeaderSection>
      <Container>
        <Grid container justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
        </Grid>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
