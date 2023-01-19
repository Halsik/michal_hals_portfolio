import './App.css';
import { HashRouter } from 'react-router-dom';
import AnimationRoutes from './components/AnimationRoutes';

function App() {



  return (
    <div className="App">
      <HashRouter>
      <AnimationRoutes />
    </HashRouter>
    </div>
  );
}

export default App;
