import React from 'react';

// Libraries
import styled from 'styled-components';

// Utils
import { useFrames } from "../store/contexts/frames.context";

const ButtonContainer = styled.div`
	width: 70%;
	background: #ffffff;

	display: flex;
	align-items: center;
	justify-content: center;

	height: 60px;
	border-radius: 30px;
	margin: 1rem auto 0 auto;

	&:hover {
		cursor: pointer;
	}
`

const Download = () => {
	const [state] = useFrames();

	const downloadURI = (uri, name) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = (ref) => {
    const dataURL = ref.current.toDataURL({ pixelRatio: 4 });
    downloadURI(dataURL, 'Frameboi.png');
  };

	return (
		<ButtonContainer onClick={() => handleDownload(state.stageDetails.ref)}>
			Download
		</ButtonContainer>
	)
}

export default Download;