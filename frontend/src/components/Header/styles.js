import styled from '@mui/styled-engine';
import { Link } from 'react-router-dom';


export const HeaderSection = styled('header')`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled('div')`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled('div')`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled('div')`
  cursor: pointer;
  width: ${(p) => (p.width ? '100%' : '110px')};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled('div')`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #0C78A6;
  }
`;

export const NotHidden = styled('div')`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled('h5')`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #0C78A6;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled('span')`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;


export const Span = styled('span')`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #A49D35;
    text-underline-position: under;
    text-decoration: #A49D35 wavy underline;
  }
`;
