import Matter from "matter-js";
import React from "react";
import { View } from "react-native";

const Thara = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  return (
    <View
      style={{
        backgroundColor: color,
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
};

export default (world, color, pos, size) => {
  //can use kozhi image instead of a rectangle.
  const initialThara = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: "THARA",
      isStatic: true,
    }
  );
  Matter.World.add(world, initialThara);

  return {
    body: initialThara,
    color,
    pos,
    renderer: <Thara />,
  };
};
