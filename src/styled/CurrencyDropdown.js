import styled from 'styled-components';

const DropdownCentered = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
`;

const DropdownScroll = styled.div`
  height: 250px;
  overflow: scroll;
  overflow-x: hidden;
  text-align: center;
`;

export {
  DropdownCentered,
  DropdownScroll
};
