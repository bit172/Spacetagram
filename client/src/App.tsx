import React, { useEffect, useState } from 'react';
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav';

import { APOD } from './interfaces/apod.interface';

import Post from './components/post/post.component';
import Spinner from './components/spinner/spinner.component';

import '@reach/skip-nav/styles.css';

function App() {
  const [apods, setAPODs] = useState<APOD[]>([]);

  useEffect(() => {
    fetch('/api/', { method: 'GET' })
      .then(res => res.json())
      .then(data => setAPODs(data));
  }, []);

  return (
    <React.Fragment>
      <main className="container">
        <SkipNavLink />
        <h1>
          Spacetagram
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h1>
        <p>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
        <SkipNavContent />
        <section>
          {apods.length ? (
            apods.map(apod => <Post key={apod.date} apod={apod} />)
          ) : (
            <Spinner size={50} />
          )}
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
