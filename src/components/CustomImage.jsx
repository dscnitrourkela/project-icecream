import React from "react";

// Components
import { Image, Transformer } from "react-konva";
import useImage from "use-image";

// State Handlers
import { useFrames } from "../store/contexts/frames.context";
import { CANVAS_ACTIONS } from "../store/actions/frames.action";

const CustomImage = ({ isSelected, onSelect }) => {
  /**
   * Create references to the shape which needs to be transformed
   * and to the transformer component itself.
   */
  const shapeRef = React.useRef();
  const transformerRef = React.useRef();
  const [state, dispatch] = useFrames();
  const [image] = useImage(state.imageDetails.image);

  const {
    renderDimensions: { width, height },
    position: { x, y },
  } = state.imageDetails;

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
  const onTransformEnd = () => {
    if (shapeRef.current) {
      const node = shapeRef.current;
      dispatch({
        type: CANVAS_ACTIONS.UPDATE_IMAGE_DIMENSIONS,
        payload: {
          scale: node.scale(),
        },
      });
    }
  };

  /**
   * This funciton handles the positional changes of the shape
   * We have positions (x and y) properties in the state which we
   * will update through this handler, similar to the onTransformEnd
   * function.
   */
  const onDragEnd = () => {
    if (shapeRef.current) {
      const node = shapeRef.current;
      dispatch({
        type: CANVAS_ACTIONS.UPDATE_IMAGE_POSITIONS,
        payload: {
          x: node.x(),
          y: node.y(),
        },
      });
    }
  };

  return (
    <>
      <Image
        image={image}
        width={width}
        height={height}
        x={x}
        y={y}
        draggable
        /**
        onSelect is a function that toggles the isSelected
        variable. This function is called when image is
        clicked or tapped.
        */
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        /** Transformation Handlers Explained above */
        onTransformEnd={onTransformEnd}
        onDragEnd={onDragEnd}
      />

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

export default CustomImage;
