import './App.css';

function App() {
  return (
    <div>

     <div className="Maindiv img">

       <div>
       <h2>Poster</h2>
       <img className="poster" src="./images/1000cr poster.jpg"></img>
       </div> 

      <div>
        <h2>Audio</h2>
        <audio src="./audio/kalki theme.mp3" controls></audio>
        <audio src="./audio/kalki title.mp3" controls></audio>
        <audio src="./audio/rarakalki.mp3" controls></audio>
        <audio src="./audio/bujji.mp3" controls></audio>
      </div>

      
      <div>
      <h2>About Karna</h2>
      <iframe width="500" height="250" src="https://www.youtube.com/embed/5qZ5sh9tbb8?si=JUGHWRC8ifzOLdhx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

       </div>

       <div className="Maindiv img">

       <div>
       <h2>Poster</h2>
       <img className="poster" src="./images/Tillu2.jpg"></img>
       </div> 

      <div>
        <h2>Audio</h2>
        <audio src="./audio/Oh My Lilly.mp3" controls></audio>
        <audio src="./audio/Ticket Eh Konakunda.mp3" controls></audio>
        <audio src="./audio/Radhika.mp3" controls></audio>
      </div>

      
      <div>
      <h2>DJ Tillu2</h2>
      <iframe width="500" height="250" src="https://www.youtube.com/embed/YNVU8fjJj4U?si=Q56m6GvbWxcXLELb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

       </div>

    </div>
  );
}

export default App;
