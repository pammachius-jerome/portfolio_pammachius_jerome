import './App.css';
import Header from '../components/header/header'

function App() {
  return (

    <div className="AppBody">
      <Header></Header>
      <main className="AppAccueil">
        <h1>Jérôme Pammachius</h1>
        <h2>
          Développeur Web et Web Mobile
        </h2>
        <p>
          Front-end, Back-end, Full-stack
        </p>
      </main>
    </div>

  );
}

export default App;
