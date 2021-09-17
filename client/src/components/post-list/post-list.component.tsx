import styled from 'styled-components';
import { APOD } from '../../interfaces/apod.interface';

import Post from '../post/post.component';
import Spinner from '../spinner/spinner.component';

const PostListSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
`;
export interface PostListProps {
  apods: APOD[];
}

export default function PostList({ apods }: PostListProps) {
  return (
    <PostListSection>
      {apods.length ? (
        apods.map(apod => <Post key={apod.date} apod={apod} />)
      ) : (
        <Spinner size={50} />
      )}
    </PostListSection>
  );
}
