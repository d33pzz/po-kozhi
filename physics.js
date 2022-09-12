import Matter from "matter-js";
import { getPipeSizePosPair } from "./utils/random";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;

  var points = 0;

  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Kozhi.body, {
        x: 0,
        y: -8,
      });
    });

  Matter.Engine.update(engine, time.delta);

  for (let index = 1; index <= 2; index++) {
    if (
      entities[`MukalileThadassam${index}`].body.bounds.max.x <= 50 &&
      !entities[`MukalileThadassam${index}`].point
    ) {
        entities[`MukalileThadassam${index}`].point = true;
        dispatch({ type: "new_point" });
    }

    if (entities[`MukalileThadassam${index}`].body.bounds.max.x <= 0) {
      const pipeSizePos = getPipeSizePosPair(windowWidth * 0.9);

      Matter.Body.setPosition(
        entities[`MukalileThadassam${index}`].body,
        pipeSizePos.pipeTop.pos
      );
      Matter.Body.setPosition(
        entities[`ThazhatheThadassam${index}`].body,
        pipeSizePos.pipeBottom.pos
      );
      entities[`MukalileThadassam${index}`].point = false;
    }

    Matter.Body.translate(entities[`MukalileThadassam${index}`].body, {
      x: -3,
      y: 0,
    });
    Matter.Body.translate(entities[`ThazhatheThadassam${index}`].body, {
      x: -3,
      y: 0,
    });
  }

  Matter.Events.on(engine, "collisionStart", (event) => {
    dispatch({ type: "game_over" });
  });

  return entities;
};

export default Physics;
