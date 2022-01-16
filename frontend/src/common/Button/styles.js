import styled from '@mui/styled-engine';

export const StyledButton = styled('button')`
  background: ${(p) => p.color || '#0C78A6'};
  color: ${(p) => (p.color ? '#0C78A6' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #A49D35;
    background-color: #A49D35;
  }
`;
