import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import Box from "../components/BoxWithStyledComponents.js";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function HomePage() {
  return (
    <Div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <Box />
      <Box isBlack />
    </Div>
  );
}
