import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { APOD } from '../../interfaces/apod.interface';
import { LikeStorage } from '../../interfaces/like-storage.interface';

import Like from '../like/like.component';
import ShareableLink from '../shareable-link/shareable-link.component';
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
    gap: 10px;
    justify-content: flex-end;
  }
`;
export interface PostProps {
  apod: APOD;
}

const createMediaElement = (apod: APOD) => {
  let media;
  if (apod.media_type === 'image')
    media = <img src={apod.url} alt={apod.title} />;
  else if (apod.media_type === 'video' && apod.url.includes('youtube'))
    media = <VideoWrapper videoSrc={apod.url} videoTitle={apod.title} />;
  else media = <a href={apod.url}>{apod.title}</a>;
  return media;
};

const getLikeStorage = (): LikeStorage => {
  const likeStorageItem = window.localStorage.getItem('likes');
  return likeStorageItem ? JSON.parse(likeStorageItem) : {};
};

export default function Post({ apod }: PostProps) {
  const [like, setLike] = useState(false);
  const [isLikeAnimated, setIsLikeAnimated] = useState(false);

  useEffect(() => {
    const likeStorage = getLikeStorage();
    if (likeStorage[apod.date]) setLike(true);
  }, [apod.date]);

  const handleLike = () => {
    setIsLikeAnimated(true);
    const likeStorage = getLikeStorage();
    if (like) delete likeStorage[apod.date];
    else likeStorage[apod.date] = true;
    window.localStorage.setItem('likes', JSON.stringify(likeStorage));
    setLike(!like);
  };

  return (
    <PostContainer>
      {createMediaElement(apod)}
      <section className="explanation">
        <h2>{apod.title}</h2>
        <p>{apod.date}</p>
        <p>{apod.explanation}</p>
        <div className="button-row">
          <ShareableLink link={apod.url} />
          <Like
            active={like}
            setActive={setLike}
            handleActive={handleLike}
            isAnimated={isLikeAnimated}
          />
        </div>
      </section>
    </PostContainer>
  );
}
