import { render } from '@testing-library/react';
import DateForm from './date-form.component';

const mockSetAPODs = jest.fn();

describe('DateForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateForm setAPODs={mockSetAPODs} />);
    expect(baseElement).toBeTruthy();
  });
});
