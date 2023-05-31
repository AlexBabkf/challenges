import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ light, isOn, handleIsOn }) {
  // const [isOn, setIsOn] = useState(false);

  // function handleToggle() {
  //   setIsOn((isOn) => !isOn);
  // }

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleIsOn(light.name);
      }}
    >
      <Icon isOn={light.isOn}>💡</Icon>
      <Text>
        <Name>{light.name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
