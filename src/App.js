import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from './components/Header';

function App() {
  function handleClick() {
    fetch('http://localhost:3333')
    .then((response) => response.json()
    .then((data) => console.log(data.status))
    );
  }
  

  return (
    <>
      <CssBaseline />
      <button onClick={handleClick}>Vem aqui ciclo</button>
      <Header />
    </>
  );
}

export default App;
