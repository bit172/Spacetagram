import styled from 'styled-components';
import { AiOutlineLink } from 'react-icons/ai';
import { toast } from 'react-toastify';

const ShareableLinkWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 4px 1px #9b9b9b;
  transition: color 0.2s;
  svg {
    display: block;
    margin: auto;
    path {
      transition: 0.2s fill ease;
      fill: #999999;
    }
  }
  &:hover {
    svg {
      path {
        fill: #7a7a7a;
      }
    }
  }
`;

export interface ShareableLinkProps {
  link: string;
}

export default function ShareableLink({ link }: ShareableLinkProps) {
  const handleLinkCopy = () => {
    navigator.clipboard.writeText(link);
    toast.info('Link copied to clipboard!');
  };

  return (
    <ShareableLinkWrapper
      tabIndex={0}
      role="button"
      aria-label="copy shareable link"
      onClick={handleLinkCopy}
      onKeyPress={(ev: React.KeyboardEvent<HTMLDivElement>) => {
        ev.key === 'Enter' && handleLinkCopy();
      }}
      data-testid="shareable-link-id"
    >
      <AiOutlineLink size={25} aria-hidden />
    </ShareableLinkWrapper>
  );
}
