import React from 'react';
import styled from 'styled-components';


const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TopNav = (props) => {
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

export default TopNav;