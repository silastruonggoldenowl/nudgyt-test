import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes as Switch,
  Route,
} from "react-router-dom";
import HomeScreen from './pages/homeScreen/index';
import SearchScreen from './pages/searchScreen/index';
import ProjectScreen from './pages/projectScreen/index';
function App() {
  return (
      <Switch>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/project/:fullname/:repo" element={<ProjectScreen />} />
      </Switch>
  );
}

export default App;
