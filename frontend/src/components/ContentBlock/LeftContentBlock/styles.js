import styled from '@mui/styled-engine';

export const LeftContentSection = styled('section')`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled('p')`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled('div')`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;