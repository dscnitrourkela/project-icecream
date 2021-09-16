import React from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
// eslint-disable-next-line import/no-unresolved 

function Canvas({ stageRef, userName, guildName, frameImg, image }) {
    return(
     <Stage ref={stageRef} width={350} height={350} x={0} style={{ margin: 'auto' }}>
          <Layer>
            <Image
              image={frameImg}
              width={350}
              height={350}
              style={{ zIndex: '100', position: 'absolute' }}
            />
            <Image image={image} width={281} height={280} x={34} y={35} draggable='true' />
            <Text
              text={userName}
              x={45}
              y={45}
              fontSize={22}
              draggable='true'
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
            />
          </Layer>
    </Stage>
   );
};

export default Canvas;