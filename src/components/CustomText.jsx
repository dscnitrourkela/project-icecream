import React from "react";

// Libraries
import { Rect, Text, Group } from "react-konva";

const FixedText = ({ dimensions, position, name }) => {
  const shapeRef = React.useRef(null);

  /**
   * As with other konva components, group also takes in
   * width, height and positions x and y.
   *
   * In addition to this we are adding an offsetX and offsetY
   * prop which shifts its coordinate system to the center instead
   * of the top-left corner.
   *
   * This would help us to position both the rectangle and the
   * text element in the center of the group.
   */
  const groupProps = {
    width: dimensions.width,
    height: dimensions.height,
    offsetX: dimensions.width / 2,
    offsetY: dimensions.height / 2,
    x: position.x,
    y: position.y,
  };

  return (
    <Group ref={shapeRef} {...groupProps}>
      {/* The width of both the elements are kept same */}
      {/* Not passing any positions defaults them to x=0 and y=0 */}
      <Rect
        width={dimensions.width}
        height={dimensions.height}
        cornerRadius={[7, 7, 7, 7]}
      />
      <Text
        width={dimensions.width}
        height={dimensions.height}
        align='center'
        verticalAlign='middle'
        text={name}
        fontSize={20}
      />
    </Group>
  );
};

export default FixedText;
