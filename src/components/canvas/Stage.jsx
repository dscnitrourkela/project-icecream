import React from 'react';

// Components
import { Stage, Layer, Image, Text } from 'react-konva';

const CanvasStage = ({ stageRef, userName, guildName, frameImg, image }) => (
  <Stage ref={stageRef} width={350} height={350} x={0} style={{ margin: 'auto' }}>
    <Layer>
      <Image
        image={frameImg}
        width={350}
        height={350}
        style={{ zIndex: '100', position: 'absolute' }}
      />

      <Image
        image={image}
        width={281}
        height={280}
        x={34}
        y={35}
        draggable='true'
        onDragEnd={() => {}}
        onDragMove={() => {}}
      />

      <Text
        text={userName}
        x={45}
        y={45}
        fontSize={22}
        draggable='true'
        onDragEnd={() => {}}
        width={200}
        fill='black'
      />

      <Text
        text={guildName}
        x={4}
        y={68}
        fontSize={22}
        draggable='true'
        width={200}
        wrap='char'
        align='center'
        onDragEnd={() => {}}
      />
    </Layer>
  </Stage>
);

export default CanvasStage;
