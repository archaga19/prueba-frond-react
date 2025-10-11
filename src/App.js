import logo from './logo.svg';
import './App.css';

function App() {
  const mostrarAlerta = () => {
    alert('¡SI FUNCIONA!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          ¡Test de proyecto! 
        </h1>
        <p>
         desplegada en Vercel!!! 
        </p>
        
        {/* BOTÓN NUEVO */}
        <button 
          className="boton-alerta"
          onClick={mostrarAlerta}
          style={{
            padding: '12px 24px',
            fontSize: '18px',
            backgroundColor: '#61dafb',
            color: '#282c34',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '20px',
            fontWeight: 'bold'
          }}
        >
          funciona???
        </button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;