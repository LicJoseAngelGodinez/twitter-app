import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContextApi from './context/contextApi';
import Feeds from './components/feeds/feeds';
import NotFound from './components/notFound/notFound';


function App() {
  
  return (
    <BrowserRouter>
      <ContextApi>
        <Switch>
          <Route exact path="/" render={() => {
                return ( <Feeds top={false} /> )
          }}/>
          <Route exact path="/top5" render={() => {
                return ( <Feeds top={true} /> )
          }}/>
          <Route component={NotFound}/>
        </Switch>
      </ContextApi>
    </BrowserRouter>
  );
}

export default App;
