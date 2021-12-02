import React, { useRef } from "react";

// Libraries
import { Layer, Stage, Image, Text } from "react-konva";

// Assets
import frame1 from "../assets/frame1";
import profile from "../assets/frame1";

const Canvas = () => {
  /**
   * A list of objects containing the various details that we
   * would require for all the different elements.
   *
   * It is better to separate them now as we will be shifting
   * them to their global states later
   */
  const stageRef = useRef();
  const stageDetails = {
    width: 350,
    height: 350,
    x: 0,
    y: 0,
  };

  const imageDetails = {
    originalDimensions: {
      width: 0,
      height: 0,
    },
    renderDimensions: {
      width: 300,
      height: 300,
    },
    position: {
      x: 0,
      y: 0,
    },
  };

  const textDetails = {
    name: {
      value: "",
      id: "user-name",
      dimensions: {
        width: 100,
        height: 50,
      },
      position: {
        x: 50,
        y: 50,
      },
    },
    guild: {
      value: "",
      id: "user-guild",
      dimensions: {
        x: 100,
        y: 50,
      },
      position: {
        x: 100,
        y: 100,
      },
    },
  };

  return (
    <Stage
      ref={stageRef}
      width={stageDetails.width}
      height={stageDetails.height}
      style={{ position: "relative" }}
    >
      <Layer>
        <Image
          image={profile}
          width={imageDetails.renderDimensions.width}
          height={imageDetails.renderDimensions.height}
          x={imageDetails.position.x}
          y={imageDetails.position.y}
        />

        <Text
          text={textDetails.name.value}
          width={textDetails.name.dimensions.width}
          height={textDetails.name.dimensions.height}
          x={textDetails.name.position.x}
          y={textDetails.name.position.y}
        />
        <Text
          text={textDetails.guild.value}
          width={textDetails.guild.dimensions.width}
          height={textDetails.guild.dimensions.height}
          x={textDetails.guild.position.x}
          y={textDetails.guild.position.y}
        />

        <Image
          image={frame1}
          width={stageDetails.width}
          height={stageDetails.height}
          x={0}
          y={0}
          style={{ position: "absolute", top: 0, left: 0, zIndex: 100 }}
        />
      </Layer>
    </Stage>
  );
};

export default Canvas;
