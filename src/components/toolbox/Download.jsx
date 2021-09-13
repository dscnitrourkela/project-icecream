import React from 'react';
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
    bg-black
    text-white
    pr-12
    pl-12
    pt-6
    pb-6
    `}
`;

const downloadURI = ({ uri, name }) => {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Download({ stageRef }) {
  const handleDownload = () => {
    const dataURL = stageRef.current.toDataURL();
    downloadURI('https://www.google.com/images/srpr/logo3w.png', 'Frameboi.png');
  };

  return (
    <Container>
      <DownloadContainer>
        <Button onClick={handleDownload}>Download</Button>
      </DownloadContainer>
    </Container>
  );
}
