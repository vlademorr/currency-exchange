import styled from 'styled-components';

const ExchangeRate = styled.div`
  height: 38px;
  width: 105px;
  border: 1px solid #ced4da;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
`;

const CenteredCol = {
  textAlign: 'center',
  alignSelf: 'center',
  height: '140px'
} as const;

export {
  ExchangeRate,
  CenteredCol
};
