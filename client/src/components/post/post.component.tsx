import styled from 'styled-components';
import { APOD } from '../../interfaces/apod.interface';
import Like from '../like/like.component';
import VideoWrapper from '../video-wrapper/video-wrapper.component';

const PostContainer = styled.article`
  background: var(--off-white);
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 12px 14px 2px #bcbcbc;
  img {
    display: block;
    width: 100%;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
  }
  .explanation {
    padding: 20px;
    border-width: 1px 1px 1px 1px;
  }
  .button-row {
    display: flex;
    justify-content: flex-end;
  }
`;
export interface PostProps {
  apod: APOD;
}

export default function Post({ apod }: PostProps) {
  return (
    <PostContainer>
      {apod.media_type === 'image' ? (
        <img src={apod.url} alt={apod.title} />
      ) : (
        <VideoWrapper videoSrc={apod.url} videoTitle={apod.title} />
      )}
      <section className="explanation">
        <h2>{apod.title}</h2>
        <p>{apod.date}</p>
        <p>{apod.explanation}</p>
        <div className="button-row">
          <Like />
        </div>
      </section>
    </PostContainer>
  );
}
