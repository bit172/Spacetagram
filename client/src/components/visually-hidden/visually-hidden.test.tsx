import { render, screen } from '@testing-library/react';
import VisuallyHidden from './visually-hidden.component';

describe('VisuallyHidden', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VisuallyHidden>Hello</VisuallyHidden>);
    expect(baseElement).toBeTruthy();
  });

  it('should have the appropriate text', () => {
    const text = 'Hello';
    render(<VisuallyHidden>{text}</VisuallyHidden>);
    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
  });
});
