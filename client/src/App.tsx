import React, { useEffect, useState } from 'react';
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav';
import { APOD } from './interfaces/apod.interface';

import DateForm from './components/date-form/date-form.component';
import PostList from './components/post-list/post-list.component';

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
      <SkipNavLink />
      <main className="container">
        <section>
          <h1>
            Spacetagram
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </h1>
          <p>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
        </section>
        <DateForm setAPODs={setAPODs} />
        <SkipNavContent />
        <PostList apods={apods} />
      </main>
    </React.Fragment>
  );
}

export default App;
