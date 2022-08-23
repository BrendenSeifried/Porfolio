import { Route, Switch } from 'react-router-dom';
import FMM from './components/FMM';
import { PageProvider } from './context/Pages';
import Landing from './views/Landing';

export default function App() {
  return (
    <>
      <PageProvider>
        <Switch>
          <Route path="/fmm">
            <FMM />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </PageProvider>
    </>
  );
}
