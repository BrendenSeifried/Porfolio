import { Route, Switch } from 'react-router-dom';
import { PageProvider } from './context/Pages';
import Landing from './views/Landing';

export default function App() {
  return (
    <>
      <PageProvider>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </PageProvider>
    </>
  );
}
