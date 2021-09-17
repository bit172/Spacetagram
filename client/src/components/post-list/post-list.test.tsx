import { render } from '@testing-library/react';
import { APOD } from '../../interfaces/apod.interface';
import PostList from './post-list.component';

const mockAPODs: APOD[] = [
  {
    date: '2021-09-01',
    explanation:
      'Why would galaxies emit jets that look like ghosts?  And furthermore, why do they appear to be dancing?  The curled and fluffy jets from the supermassive black holes at the centers of two host galaxies (top center and lower left) are unlike anything seen before.  They were found by astronomers using the Australian Square Kilometer Array Pathfinder (ASKAP) radio telescope when creating maps tracing the evolution of galaxies.  Images preceding this Evolutionary Map of the Universe survey only showed amorphous blobs.  Eventually, comparisons of relative amounts of energy emitted revealed the glowing elongated structures were created by electrons streaming around magnetic field lines',
    hdurl:
      'https://apod.nasa.gov/apod/image/2109/DancingGhosts_EnglishNorris_2524.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Dancing Ghosts: Curved Jets from Active Galaxies',
    url: 'https://apod.nasa.gov/apod/image/2109/DancingGhosts_EnglishNorris_960.jpg',
  },
  {
    copyright: 'Josep Drudis',
    date: '2021-09-02',
    explanation:
      "Find the Big Dipper and follow the handle away from the dipper's bowl until you get to the last bright star. Then, just slide your telescope a little south and west and you'll come upon this stunning pair of interacting galaxies, the 51st entry in Charles Messier's famous catalog. Perhaps the original spiral nebula, the large galaxy with well defined spiral structure is also cataloged as NGC 5194. Its spiral arms and dust lanes clearly sweep in front of its companion galaxy (top), NGC 5195. The pair are about 31 million light-years distant and officially lie within the angular boundaries of the small constellation Canes Venatici. Though M51 looks faint and fuzzy to the eye, deep images like this one reveal its striking colors and galactic tidal debris.",
    hdurl:
      'https://apod.nasa.gov/apod/image/2109/M51-SL14-RGB-196-Final-cC.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'M51: The Whirlpool Galaxy',
    url: 'https://apod.nasa.gov/apod/image/2109/M51-SL14-RGB-196-Final-cC_1024.png',
  },
];
describe('PostList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostList apods={mockAPODs} />);
    expect(baseElement).toBeTruthy();
  });
});
