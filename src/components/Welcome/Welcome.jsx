import styled from "styled-components";

const Welcome = () => {

const WelcomePageContainer = styled.div`
  color:red;
  font-size: 24px;
`

const BlueContainer = styled.div`
  color:blue;
`

    return (
        <WelcomePageContainer>
            this is welcome page
            <br/>
            <BlueContainer>
                this is new line
            </BlueContainer>
        </WelcomePageContainer>
    )
}

export default Welcome