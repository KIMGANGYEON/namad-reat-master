const Father = styled.div`
  display: flex;
  gap: 20px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Btn = styled.button`
  color: white;
  background-color: red;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: red;
`;

function App() {
  return (
    <Father style={{ display: "flex" }}>
      <Box bgColor="teal" />
      <Circle bgColor="red" />
      <Btn>login</Btn>
      <Btn as="a" href="/">
        login
      </Btn>
      <Input></Input>
      <Input></Input>
      <Input></Input>
    </Father>
  );
}
