import { Route, Switch } from 'react-router-dom';
import Landing from './views/Landing';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </>
  );
}
