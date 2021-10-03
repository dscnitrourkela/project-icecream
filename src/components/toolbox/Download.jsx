import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`
    font-roboto
    grid
    grid-rows-1
    grid-cols-1
  `}
`;

const DownloadContainer = styled.div`
  ${tw`
    m-auto
    p-5
    `}
`;

const Button = styled.button`
  ${tw`
    uppercase
    rounded-full
    bg-color-bright
    px-14
    py-6
    text-black
    border-none
    outline-none
    hover:bg-frame-gray
    `}
`;

const Download = ({ stageRef }) => {
  const downloadURI = (uri, name) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    const dataURL = stageRef.current.toDataURL({ pixelRatio: 4 });
    downloadURI(dataURL, 'Frameboi.png');
  };

  return (
    <Container>
      <DownloadContainer>
        <Button onClick={handleDownload}>Download</Button>
      </DownloadContainer>
    </Container>
  );
};

export default Download;
