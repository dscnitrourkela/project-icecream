import React, { useEffect, useState } from 'react';

// Components
import { Stage, Layer, Image, Group } from 'react-konva';
import TransformableText from './TransformableText';

const CanvasStage = ({ stageRef, userName, guildName, frameImg, image, checked }) => {
  const rect = [
    {
      x: 50,
      y: 50,
      id: 'rect1',
    },
    {
      x: 100,
      y: 100,
      id: 'rect2',
    },
  ];
  const [rectangles, setRectangles] = useState(rect);
  const [selectedId, selectShape] = useState(null);
  const [bgColour, setBgColour] = useState(null);

  const checkDeselect = () => {
    selectShape(null);
  };

  useEffect(() => {
    setBgColour('lightgreen');
  }, []);

  return (
    <Stage ref={stageRef} width={350} height={350} x={0} style={{ margin: 'auto' }}>
      <Layer>
        <Image
          image={frameImg}
          width={350}
          height={350}
          style={{ zIndex: '100', position: 'absolute' }}
        />
        <Group clipX={39} clipY={39} clipWidth={272} clipHeight={272}>
          <Image
            image={image}
            width={281}
            height={280}
            x={34}
            y={35}
            draggable='true'
            onDragEnd={() => {}}
            onDragMove={() => {}}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
          />
          {checked && (
            <TransformableText
              // eslint-disable-next-line react/no-array-index-key
              name={userName}
              colour={bgColour}
              fontFamily='Roboto'
              fontStyle='bold'
              fontSize={22}
              shapeProps={rect[0]}
              isSelected={rect[0].id === selectedId}
              onSelect={() => {
                selectShape(rect[0].id);
              }}
              onChange={(newAttrs) => {
                const rects = rectangles.slice();
                rects[0] = newAttrs;
                setRectangles(rects);
              }}
            />
          )}
          {checked && (
            <TransformableText
              // eslint-disable-next-line react/no-array-index-key
              name={guildName}
              colour={bgColour}
              fontFamily='Roboto'
              fontStyle='normal'
              fontSize={20}
              shapeProps={rect[1]}
              isSelected={rect[1].id === selectedId}
              onSelect={() => {
                selectShape(rect[1].id);
              }}
              onChange={(newAttrs) => {
                const rects = rectangles.slice();
                rects[1] = newAttrs;
                setRectangles(rects);
              }}
            />
          )}
        </Group>
      </Layer>
    </Stage>
  );
};

export default CanvasStage;
