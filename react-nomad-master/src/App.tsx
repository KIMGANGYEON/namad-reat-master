import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const rotates = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  transform: rotate(360deg);
  border-radius: 100px;

}
100%{
  transform: rotate(0deg);
  border-radius: 0px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotates} 2s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 50px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">😊😊</Emoji>
      </Box>
      <Title>d</Title>
    </Wrapper>
  );
}

export default App;
