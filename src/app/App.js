import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import MachinesPage from '../machines/MachinesPage';
import MachineDetailPage from '../machine/MachineDetailPage';
import MachineAddPage from '../machine-add/MachineAddPage';
import MachineEditPage from '../machine-edit/MachineEditPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/machines" exact={true}
                render={routerProps => (
                  <MachinesPage {...routerProps} />
                )}
              />

              <Route path="/machines/add" exact={true}
                render={routerProps => (
                  <MachineAddPage {...routerProps}/>
                )}
              />

              <Route path="/machines/:id"
                render={routerProps => (
                  <MachineDetailPage {...routerProps}/>
                )}
              />

              <Route path="/machines/:id/edit" exact={true}
                render={routerProps => (
                  <MachineEditPage {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
