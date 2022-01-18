import React from "react";
import { observable, reaction, computed, autorun } from "mobx";

const calculator = observable({
  a: 1,
  b: 2,
});

reaction(
  () => calculator.a,
  (value, reaction) => {
    console.log(`a 값이 ${value}로 바뀌었네요!`);
  }
);

reaction(
  () => calculator.b,
  (value) => {
    console.log(`b값이 ${value} 로 바뀌었네요 !`);
  }
);

calculator.a = 10;
calculator.b = 20;

export default calculator;
