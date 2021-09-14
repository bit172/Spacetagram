import styled from 'styled-components';

const VideoWrapperDiv = styled.div`
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 */
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
    width: 100%;
    height: 100%;
  }
`;

export interface VideoWrapperProps {
  videoTitle: string;
  videoSrc: string;
}

export default function VideoWrapper({
  videoSrc,
  videoTitle,
}: VideoWrapperProps) {
  return (
    <VideoWrapperDiv>
      <iframe src={videoSrc} title={videoTitle} allowFullScreen></iframe>
    </VideoWrapperDiv>
  );
}
