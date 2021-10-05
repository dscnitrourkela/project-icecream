/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import React, { useEffect, useState } from 'react';

// Components
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
  width,
  height,
}) => {
  const groupDimensions = {
    height: 272,
    width: 273,
  };
  const groupHeight = groupDimensions.height;
  const groupWidth = groupDimensions.width;
  const aspectRatio = width / height;
  console.log(aspectRatio);
  const imageRenderWidth = aspectRatio * groupHeight;
  const imageRenderHeight = height;
  const imagePositionX = 38.5;
  const imagePositionY = 38;

  if (aspectRatio > 1.7) {
    var imageWidth = groupWidth;
    var imageHeight = imageRenderHeight / (aspectRatio * 4);
  } else if (aspectRatio >= 1.3 && aspectRatio <= 1.7) {
    imageWidth = groupWidth;
    imageHeight = imageRenderHeight / (aspectRatio * 2.5);
  } else if (aspectRatio >= 1 && aspectRatio < 1.3) {
    imageWidth = groupWidth;
    imageHeight = imageRenderHeight / (aspectRatio * 2);
  } else {
    imageWidth = imageRenderWidth;
    imageHeight = groupHeight;
  }

  const renderImg = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: 'renderImg1',
    },
  ];

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

  const [tranImg, setTranImg] = useState(renderImg);
  const [selectedId1, selectShape1] = useState(null);
  const [rectangles, setRectangles] = useState(rect);
  const [selectedId, selectShape] = useState(null);
  const [bgColour, setBgColour] = useState(null);

  const checkDeselect = () => {
    selectShape1(null);
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
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
        />
        <Group
          clipX={imagePositionX}
          clipY={imagePositionY}
          clipWidth={groupWidth}
          clipHeight={groupHeight}
        >
          <TransformableImage
            image={image}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
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
          {checkedGuild && (
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
