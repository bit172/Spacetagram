import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pod, setPOD] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setPOD(data));
  }, []);

  if (!pod) return <div>Loading...</div>;

  return (
    <div>
      <pre>{JSON.stringify(pod, null, 2)}</pre>
    </div>
  );
}

export default App;
