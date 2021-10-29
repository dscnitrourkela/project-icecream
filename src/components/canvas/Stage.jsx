import React, { useState } from 'react';

/// Components
import { Stage, Layer, Image, Group } from 'react-konva';
import TransformableText from './TransformableText';
import TransformableImage from './TransformableImage';

const CanvasStage = ({
  stageRef,
  userName,
  guildName,
  frameImg,
  image,
  checked,
  checkedGuild,
  bgColor,
  bgColorGuild,
  fontFamily,
  fontColor,
  fontColorGuild,
  fontFamilyGuild,
  alignment,
  width,
  height,
}) => {
  const groupDimensions = {
    height: 272,
    width: 273,
  };
  const groupHeight = groupDimensions.height;
  const aspectRatio = width / height;
  const imageRenderWidth = aspectRatio * groupDimensions.height;
  const imageRenderHeight = groupDimensions.height;
  const imagePositionX = 38.5;
  const imagePositionY = 38;
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

  const renderImg = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: 'renderImg1',
    },
  ];

  const [tranImg, setTranImg] = useState(renderImg);
  const [selectedId1, selectShape1] = useState(null);
  const [rectangles, setRectangles] = useState(rect);
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = () => {
    selectShape1(null);
    selectShape(null);
  };

  return (
    <Stage ref={stageRef} width={350} height={350} x={0} style={{ margin: 'auto' }}>
      <Layer>
        <Group
          clipX={imagePositionX}
          clipY={imagePositionY}
          clipWidth={groupDimensions.width}
          clipHeight={groupHeight}
        >
          <TransformableImage
            image={image}
            imageWidth={imageRenderWidth}
            imageHeight={imageRenderHeight}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
            isSelected={renderImg[0].id === selectedId1}
            onSelect={() => {
              selectShape1(renderImg[0].id);
            }}
            onChange={(newAttrs) => {
              const imgs = tranImg.slice();
              imgs[0] = newAttrs;
              setTranImg(imgs);
            }}
          />
          {checked && (
            <TransformableText
              // eslint-disable-next-line react/no-array-index-key
              name={userName}
              colour={bgColor}
              fontFamily={fontFamily}
              alignment={alignment}
              fontColor={fontColor}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
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
          {checkedGuild && (
            <TransformableText
              // eslint-disable-next-line react/no-array-index-key
              name={guildName}
              colour={bgColorGuild}
              fontFamily={fontFamilyGuild}
              alignment={alignment}
              fontColor={fontColorGuild}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
              fontStyle='normal'
              fontSize={22}
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

        <Image
          image={frameImg}
          width={350}
          height={350}
          style={{ zIndex: '100', position: 'absolute' }}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          listening={false}
        />
      </Layer>
    </Stage>
  );
};

export default CanvasStage;
