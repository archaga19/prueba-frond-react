import logo from './logo.svg';
import './App.css';

function App() {
  const mostrarAlerta = () => {
    alert('¡SI FUNCIONA!');
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Logo más pequeño */}
        <img src={logo} className="App-logo" style={{ width: '150px', height: '150px' }} alt="logo" />
        
        <h1>
          ¡Test de proyecto! 
        </h1>
        <p>
         desplegada en Vercel!!! 
        </p>
        
        {/* Cuadro con versión 4.0 */}
        <div 
          style={{
            border: '2px solid #010b0dff',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px 0',
            backgroundColor: 'rgba(209, 226, 231, 0.1)',
            color: '#61dafb',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
        >
          version 3.0
        </div>

        {/* BOTÓN debajo del cuadro */}
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