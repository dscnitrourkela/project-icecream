import React, { useRef, useState } from "react";

// Libraries
import { Layer, Stage, Text, Image } from "react-konva";
import useImage from "use-image";

// Components
import CustomImage from "./CustomImage";
import { FramesContext, useFrames } from "../store/contexts/frames.context";

const Canvas = () => {
  const [frame1] = useImage("https://res.cloudinary.com/riteshp2000/image/upload/v1641915566/frame3_u9zm5x.png");
  const [state] = useFrames();

  /**
   * Okay so we have removed the imageDetails variables and
   * shifted it to a state. Not only this but also we have added
   * 2 new properties of scale defaulted to 1 which would determine
   * the size of our shape/element and id.
   *
   * In addition to that we have also created a new state called
   * selectedElement. This element stores an id or unique field which
   * showcases which element is currently selected.
   */
  const [selectedElement, setSelectedElement] = useState(null);

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

  const textDetails = state.textDetails;

  return (
    <FramesContext.Consumer>
      {value => (
        <Stage
          ref={stageRef}
          width={stageDetails.width}
          height={stageDetails.height}
          style={{ position: "relative" }}
        >
          <FramesContext.Provider value={value}>
            <Layer>
              {state.imageDetails.image && (
                <CustomImage
                  isSelected={selectedElement === state.imageDetails.id}
                  onSelect={() => setSelectedElement(state.imageDetails.id)}
                />
              )}

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
          </FramesContext.Provider>
        </Stage>
      )}
    </FramesContext.Consumer>
  );
};

export default Canvas;
