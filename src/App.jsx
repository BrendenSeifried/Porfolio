import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/landing">
          <Landing />
        </Route>
      </Switch>
    </>
  );
}
