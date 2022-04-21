import './App.css';
import React, { Component } from "react";
import Toggle from "./components/Toggle"
import Tab from "./components/Tab"
import Slider from "./components/Slider"
import Input from "./components/Input"
import Dropdown from './components/Dropdown';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Toggle />
        <Tab />
        <Slider />
        <Input />
        <Dropdown />
      </React.Fragment>
    );
  }
}