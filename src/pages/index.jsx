import React, {useState, useRef} from 'react';
// import HomePanel from './Home';
import CustomText from '../components/toolbox/TextBox';
// import Display from '../components/carousel/Carousel';
import Upload from '../components/toolbox/Upload';
import Download from '../components/toolbox/Download';

export default function Home() {
  const [username, setYourName] = useState();
  const [guildname, setGuildname] = useState();
  const stageRef = useRef(null);

  return (
    <div style={{ padding: '20px'}}>
      {/* <Display 
       username={username}
       guildname={guildname}
       stageRef={stageRef}
      /> */}
      {/* <HomePanel /> */}
      <Upload />
      <CustomText 
      username={username}
      guildname={guildname}
      setYourName={setYourName}
      setGuildname={setGuildname}
      />
      <Download 
       stageRef={stageRef}
      />
    </div>
  );
};
