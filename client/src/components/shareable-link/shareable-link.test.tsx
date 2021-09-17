import { fireEvent, render, screen } from '@testing-library/react';
import ShareableLink from './shareable-link.component';

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

const link = 'http://example.com';
describe('ShareableLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShareableLink link={link} />);
    expect(baseElement).toBeTruthy();
  });
  it('should copy the link to the clipboard', () => {
    render(<ShareableLink link={link} />);
    const shareableLink = screen.getByTestId('shareable-link-id');
    fireEvent.click(shareableLink);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(link);
  });
});
