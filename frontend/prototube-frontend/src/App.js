import React, { useState, useEffect } from 'react';

function App() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/videos')
      .then((response) => response.json())
      .then((data) => setVideos(data.videos))
      .catch((error) => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#282c34', padding: '10px', color: 'white' }}>
        <img src="/logo.png" alt="Prototube Logo" style={{ height: '50px', marginRight: '10px' }} />
        <h1 style={{ margin: 0 }}>Prototube</h1>
      </header>
      <main style={{ marginTop: '20px', textAlign: 'center' }}>
        <div style={{ margin: '20px auto', width: '80%', padding: '10px', backgroundColor: '#eaf3fc', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>Zone de lecture de vidéo</h2>
          <div style={{ height: '300px', backgroundColor: '#d8e6f3', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            {currentVideo ? (
              <video width="100%" height="100%" controls>
                <source src={`http://127.0.0.1:5000/videos/${currentVideo}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p>Aucune vidéo en cours de lecture</p>
            )}
          </div>
        </div>
        <div style={{ margin: '20px auto', width: '80%', padding: '10px', backgroundColor: '#f2f7fb', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>Liste des vidéos disponibles</h2>
          {videos.length > 0 ? (
            <ul>
              {videos.map((video, index) => (
                <li key={index} style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setCurrentVideo(video)}>
                  {video}
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucune vidéo disponible</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;


