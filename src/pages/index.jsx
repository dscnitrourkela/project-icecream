import React, { useState, useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import useImage from 'use-image'; 
// import HomePanel from './Home';
import Frame from './frame';
import frameData from '../../config/frameData';

const FRAMES = {
  ONE: frameData.frames.ONE,
  TWO: frameData.frames.ONE,
  THREE: frameData.frames.TWO,
  FOUR: frameData.frames.THREE,
  FIVE: frameData.frames.FOUR,
  SIX: frameData.frames.FIVE,
};

export default function Home() {
  const [selectedFrame, setSelectedFrame] = useState(FRAMES.ONE);
  const [uploadedImage, setUploadedImage] = useState();
  const [userName, setUserName] = useState('Your Name');
  const [guildName, setGuildName] = useState('Guild Name');
  const stageRef = useRef(null);

  const [frameImg] = useImage(selectedFrame, 'Anonymous');
  const [image] = useImage(uploadedImage, 'Anonymous');

  return (
    <div style={{ padding: '20px' }}>
      {/* <HomePanel /> */}
      <Frame 
       stageRef={stageRef}
       userName={userName}
       setUserName={setUserName}
       guildName={guildName}
       setGuildName={setGuildName}
       setSelectedFrame={setSelectedFrame}
       setUploadedImage={setUploadedImage}
       uploadedImage={uploadedImage}
       frameImg={frameImg}
       image={image}
       FRAMES={FRAMES}
       />
    </div>
  );
}
