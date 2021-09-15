import { useEffect, useState, AriaRole } from 'react';
import styled from 'styled-components';

// Source: https://www.joshwcomeau.com/snippets/react-components/visually-hidden/

const VisuallyHiddenSpan = styled.span`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1;
  width: 1;
  margin: -1;
  padding: 0;
  border: 0;
`;

export interface VisuallyHiddenProps {
  children: any;
  role?: AriaRole;
}

export default function VisuallyHidden({
  children,
  role,
  ...delegated
}: VisuallyHiddenProps) {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };
      const handleKeyUp = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keydown', handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return (
    <VisuallyHiddenSpan {...delegated} role={role}>
      {children}
    </VisuallyHiddenSpan>
  );
}
