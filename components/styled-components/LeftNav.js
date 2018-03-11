import React from 'react';
import styled from 'styled-components';


const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end
`;

const LeftNav = (props) => {
  return (
    <FlexContainer>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </FlexContainer>
  )
}

export default LeftNav;