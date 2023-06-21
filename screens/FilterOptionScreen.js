import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import CalenderPicker from "../components/CalenderPicker";
import TimePicker from "../components/TimePicker";

export default function FilterOptionScreen({ navigation }) {
  return (
    <Background>
      <Header>Pitch Finder</Header>
      <CalenderPicker />
      <TimePicker />
    </Background>
  );
}
