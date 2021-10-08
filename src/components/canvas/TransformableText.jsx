import React, { useRef, useEffect } from 'react';

// Libraries
import {Rect, Transformer, Text, Group} from 'react-konva';

const TransformableText = ({ 
  shapeProps, 
  isSelected, 
  onSelect, 
  onChange, 
  name, 
  colour, 
  fontFamily, 
  fontStyle,
  fontColor,
  alignment,
  fontSize }) => {
  
    const shapeRef = useRef();
    const trRef = useRef();
  
    useEffect(() => {
      if (isSelected && trRef.current && shapeRef.current) {
        trRef.current.nodes([shapeRef.current]);
        trRef.current.getLayer().batchDraw();
      }
    }, [isSelected]);
  
    return (
      <>
        <Group
          onClick={onSelect}
          id={shapeProps.id}
          onTap={onSelect}
          ref={shapeRef}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...shapeProps}
          draggable
          onDragEnd={(e) => {
            onChange({
              ...shapeProps,
              x: e.target.x(),
              y: e.target.y()
            });
          }}
          onTransformEnd={() => {
            if (shapeRef.current) {
            const node = shapeRef.current;
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),

            });
          }}}
        >
          <Rect
            width={200}
            height={40}
            fill={colour || "lightblue"}
            cornerRadius={[7, 7, 7, 7]}
          />
          <Text
            width={200}
            height={40}
            align={alignment || "center"}
            verticalAlign="middle"
            text={name}
            fill={fontColor || "black"}
            fontSize={fontSize}
            fontFamily={fontFamily || "Roboto"}
            fontStyle={fontStyle}
          />
        </Group>
        {isSelected && (
          <Transformer
            ref={trRef}
            enabledAnchors={[
                'top-left',
                'top-right',
                'bottom-left',
                'bottom-right',
              ]}
              boundBoxFunc={(oldBox, newBox) =>
                newBox.width < 5 || newBox.height < 5 ? oldBox : newBox
              }
          />
        )}
      </>
    );
  };


export default TransformableText;