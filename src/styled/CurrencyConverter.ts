import styled from 'styled-components';

const ExchangeRate = styled.div`
  height: 38px;
  border: 1px solid #ced4da;
  text-align: center;
  padding: 5px;
  margin-bottom: 16px;
  border-radius: 5px;
`;

const CenteredCol = {
  textAlign: 'center',
  alignSelf: 'center'
} as const;

export {
  ExchangeRate,
  CenteredCol
};
