import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Like from './like.component';

const mockOnChange = jest.fn();
const mockSetActive = jest.fn();

describe('Like', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Like
        active={false}
        handleActive={mockOnChange}
        isAnimated={false}
        setActive={mockSetActive}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should activate when pressed', () => {
    render(
      <Like
        active={false}
        handleActive={mockOnChange}
        isAnimated={false}
        setActive={mockSetActive}
      />
    );
    let like = screen.getByTestId('like-id');
    fireEvent.click(like);
    expect(mockOnChange).toBeCalled();
  });
});
