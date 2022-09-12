import Matter from "matter-js";
import Kozhi from "../components/Kozhi";
import Thara from "../components/Thara";
import { Dimensions } from "react-native";
import Thadassam from "../components/Thadassam";
import { getPipeSizePosPair } from "../utils/random";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });

  let world = engine.world;

  world.gravity.y = 0.4;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9);
  return {
    physics: { engine, world },

    Kozhi: Kozhi(world, "green", { x: 50, y: 200 }, { height: 40, width: 40 }),

    MukalileThadassam1: Thadassam(
      world,
      "MukalileThadassam1",
      "red",
      pipeSizePosA.pipeTop.pos,
      pipeSizePosA.pipeTop.size
    ),

    ThazhatheThadassam1: Thadassam(
      world,
      "ThazhatheThadassam1",
      "blue",
      pipeSizePosA.pipeBottom.pos,
      pipeSizePosA.pipeBottom.size
    ),

    MukalileThadassam2: Thadassam(
      world,
      "MukalileThadassam2",
      "red",
      pipeSizePosB.pipeTop.pos,
      pipeSizePosB.pipeTop.size
    ),

    ThazhatheThadassam2: Thadassam(
      world,
      "ThazhatheThadassam2",
      "blue",
      pipeSizePosB.pipeBottom.pos,
      pipeSizePosB.pipeBottom.size
    ),

    Thara: Thara(
      world,
      "green",
      { x: windowWidth / 2, y: windowHeight },
      { height: 50, width: windowWidth }
    ),
  };
};
