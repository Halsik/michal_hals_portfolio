import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AnimationRoutes from './components/AnimationRoutes';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <AnimationRoutes />
    </BrowserRouter>
    </div>
  );
}

export default App;
