import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { CardStyle } from "../components/style/Style";

const Box = () => {
  const something = useRef();

  const colors = ["red", "blue", "pink", 'yellow', 'greenyellow'];

  useEffect(() => {
    setInterval(() => {
      something.current.style.background =
        colors[Math.round(Math.random() * colors.length)];
      something.current.style.border = '6px ' + "solid " +
        colors[Math.round(Math.random() * colors.length)];
    }, 1000);
  }, [colors]);

  return <CardStyle ref={something}></CardStyle>;
};
export default Box;
