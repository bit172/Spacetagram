import React from 'react';
import styled from 'styled-components';
import { FcLike } from 'react-icons/fc';

const LikeWrapper = styled.div`
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
  &.activating {
    animation: active 0.4s;
    svg {
      path {
        fill: #f44336;
      }
    }
  }
  &.active {
    svg {
      path {
        fill: #f44336;
      }
    }
  }
  @keyframes active {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3) rotate(30deg);
    }
    70% {
      transform: scale(1.2) rotate(20deg);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export interface LikeProps {
  active: boolean;
  setActive: (active: boolean) => void;
  handleActive: () => void;
  isAnimated: boolean;
}

export default function Like({ active, handleActive, isAnimated }: LikeProps) {
  const computeClassName = () => {
    if (isAnimated && active) return 'activating';
    else if (!isAnimated && active) return 'active';
    return '';
  };
  return (
    <LikeWrapper
      tabIndex={0}
      role="button"
      aria-label="like"
      className={computeClassName()}
      aria-pressed={active}
      onClick={handleActive}
      onKeyPress={(ev: React.KeyboardEvent<HTMLDivElement>) => {
        ev.key === 'Enter' && handleActive();
      }}
    >
      <FcLike size={20} aria-hidden />
    </LikeWrapper>
  );
}
