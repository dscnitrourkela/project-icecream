import React from "react";

// Libraries
import { Rect, Text, Group, Transformer } from "react-konva";

const FixedText = ({ dimensions, position, name, isSelected, onSelect, onTransformEnd, onDragEnd }) => {
  const shapeRef = React.useRef(null);
  const transformerRef = React.useRef();

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

  /**
   * This effect runs whenever the isSelected variable is toggled
   * The isSelected variable is set from the parent element which indicates
   * that the current element is selected and is to be transformed.
   */
  React.useEffect(() => {
    if (isSelected) {
      /**
       * Here we are instructing the transformer component via its ref to
       * enable the specified component i.e. the image is to be transformed
       * and then create the transformer box around it.
       */
      transformerRef.current?.nodes([shapeRef.current]);
      transformerRef.current?.getLayer().batchDraw();
    }
  }, [isSelected]);

  /**
   * The most important handler functions for transformations
   * We need to handle 2 things -
   *    Change in Dimensions on transform and
   *    Change in Positions on drag
   */

  /**
   * This function handles the dimension changes of the shape
   * If you recall, we have set a property named scale set to 1 on
   * initialisation.
   * Using this handler, we need to update the scale property of this
   * shape which can be obtained from the shapeRef
   */
   const handleTransformEnd = () => {
    if (shapeRef.current) {
      const node = shapeRef.current;
      onTransformEnd(node.scale());
    }
  };

  /**
   * This funciton handles the positional changes of the shape
   * We have positions (x and y) properties in the state which we
   * will update through this handler, similar to the onTransformEnd
   * function.
   */
   const handleDragEnd = () => {
    if (shapeRef.current) {
      const node = shapeRef.current;
      onDragEnd({
        x: node.x(),
        y: node.y(),
      })
    }
  };

  return (
    <>
      <Group
        ref={shapeRef}
        {...groupProps}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onTransformEnd={handleTransformEnd}
        onDragEnd={handleDragEnd}
      >
        {/* The width of both the elements are kept same */}
        {/* Not passing any positions defaults them to x=0 and y=0 */}
        <Rect
          width={dimensions.width}
          height={dimensions.height}
          cornerRadius={[7, 7, 7, 7]}
          fill="lightblue"
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

      {isSelected && (
        <Transformer
          ref={transformerRef}
          boundBoxFunc={(oldBox, newBox) => {
            /**
              this function handles the sizing of the box
              Essentially what we are doing here is adding a check
              to avoid reduction of size to 0
              if the newBox dimensions are less than 5 units,
              we return the oldBox dimensions
             */
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default FixedText;
