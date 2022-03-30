import { Button, Spinner } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is React Bootstrap</h1>
      <Button variant='danger'>Click</Button>
      <Spinner style={{ position: 'relative', top: '50px', right: '45px' }} animation="border" variant="dark" />

    </div>
  );
}

export default App;
