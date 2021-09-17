import { render } from '@testing-library/react';
import VideoWrapper from './video-wrapper.component';

const mockVideoUrl = 'https://www.youtube.com/embed/tvB0mdkrG3Q?rel=0';

describe('VideoWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <VideoWrapper
        videoSrc={'https://www.youtube.com/embed/tvB0mdkrG3Q?rel=0'}
        videoTitle="Video"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
