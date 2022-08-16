import { Route, Switch } from 'react-router-dom';
import FMM from './components/FMM';
import Landing from './views/Landing';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/fmm">
          <FMM />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </>
  );
}
