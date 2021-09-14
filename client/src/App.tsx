import React, { useEffect, useState } from 'react';
import Post from './components/post/post.component';
import { APOD } from './interfaces/apod.interface';

function App() {
  const [apods, setAPODs] = useState<APOD[]>([]);

  useEffect(() => {
    fetch('/api/', { method: 'GET' })
      .then(res => res.json())
      .then(data => setAPODs(data));
  }, []);

  if (!apods) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <main className="container">
        <section>
          {apods.map(apod => (
            <Post apod={apod} />
          ))}
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
