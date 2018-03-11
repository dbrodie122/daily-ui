import React, { Component } from 'react';
import styled from 'styled-components';

import LeftNav from '../components/styled-components/LeftNav';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`

class StyledComponentsHome extends Component {

  render() {
    return (
      <HomeContainer>
        <LeftNav />
        Styled page
      </HomeContainer>
    )
  }
}

export default StyledComponentsHome;
