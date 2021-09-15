import styled from 'styled-components';
import VisuallyHidden from '../visually-hidden/visually-hidden.component';

const SpinnerOverlay = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const SpinnerWrapper = styled.div<{ readonly size: number }>`
  display: inline-block;
  border: 3px solid #c3c3c3;
  border-radius: 50%;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-top-color: var(--black);
  animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export interface SpinnerProps {
  size: number;
}

export default function Spinner({ size }: SpinnerProps) {
  return (
    <SpinnerOverlay aria-busy="true" aria-live="polite">
      <SpinnerWrapper aria-hidden="true" size={size} />
      <VisuallyHidden role="status">Loading...</VisuallyHidden>
    </SpinnerOverlay>
  );
}
