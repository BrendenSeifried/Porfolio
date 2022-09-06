import { Route, Switch } from 'react-router-dom';
import { PageProvider } from './context/Pages';
import { BgBorder } from './Styles/GridTwo';
import Landing from './views/Landing';

export default function App() {
  return (
    <BgBorder>
      <PageProvider>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </PageProvider>
    </BgBorder>
  );
}
