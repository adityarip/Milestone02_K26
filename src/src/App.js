import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { AllOpenRoutes } from './routes/routes.js'

function App() {
  return (
    <div className="App">
      <Router>
      {AllOpenRoutes.map(({path, component: Component})=>(
              <Route
              exact
              key={path}
              path={path}
              render={() => <Component />}
            />
            ))}
      </Router>
    </div>
  );
}

export default App;
