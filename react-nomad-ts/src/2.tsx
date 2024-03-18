import styled, { keyframes } from "styled-components";
import Circle from "./Circle";
import { useState } from "react";

function App() {
  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;
  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;

  interface DummyProps {
    text: string;
    otherThingHere?: boolean;
  }

  function Dummy({ text, otherThingHere = false }: DummyProps) {
    return <h1>{text}</h1>;
  }

  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {};

  return (
    <Container>
      <Dummy otherThingHere text="hello" />
      <form>
        <button onClick={onClick}>click me</button>
      </form>
    </Container>
  );
}
