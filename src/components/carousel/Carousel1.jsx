import React from 'react';
import { Stage, Layer, Text } from 'react-konva';

export default function Display({ username, guildname, stageRef }) {
  return (
    <>
      <Stage
        width={window.innerWidth / 1.2}
        height={window.innerHeight / 2}
        style={{ border: '10px solid grey', overflowY: 'hidden', overflowX: 'hidden' }}
        ref={stageRef}
      >
        <Layer>
          <Text
            text={username}
            x={50}
            y={80}
            fontSize={30}
            draggable='true'
            width={200}
            fill='black'
          />
          <Text text={guildname} x={50} y={80} fontSize={30} draggable='true' width={200} />
        </Layer>
      </Stage>
    </>
  );
}
