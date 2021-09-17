import { render, screen } from '@testing-library/react';
import { APOD } from '../../interfaces/apod.interface';
import Post from './post.component';

const mockAPOD: APOD = {
  date: '2021-09-01',
  explanation:
    'Why would galaxies emit jets that look like ghosts?  And furthermore, why do they appear to be dancing?  The curled and fluffy jets from the supermassive black holes at the centers of two host galaxies (top center and lower left) are unlike anything seen before.  They were found by astronomers using the Australian Square Kilometer Array Pathfinder (ASKAP) radio telescope when creating maps tracing the evolution of galaxies.  Images preceding this Evolutionary Map of the Universe survey only showed amorphous blobs.  Eventually, comparisons of relative amounts of energy emitted revealed the glowing elongated structures were created by electrons streaming around magnetic field lines',
  hdurl:
    'https://apod.nasa.gov/apod/image/2109/DancingGhosts_EnglishNorris_2524.jpg',
  media_type: 'image',
  service_version: 'v1',
  title: 'Dancing Ghosts: Curved Jets from Active Galaxies',
  url: 'https://apod.nasa.gov/apod/image/2109/DancingGhosts_EnglishNorris_960.jpg',
};

describe('Post', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Post apod={mockAPOD} />);
    expect(baseElement).toBeTruthy();
  });
  it('should have the right date', () => {
    render(<Post apod={mockAPOD} />);
    const element = screen.getByText(mockAPOD.date);
    expect(element).toBeInTheDocument();
  });
  it('should check for likes', () => {
    const storageSpy = jest.spyOn(Storage.prototype, 'getItem');
    render(<Post apod={mockAPOD} />);
    expect(storageSpy).toHaveBeenCalledWith('likes');
  });
});
