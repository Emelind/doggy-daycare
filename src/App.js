import './App.css';
import Welcome from './components/Welcome';
import Register from './components/Register';
import RegisterItem from './components/RegisterItem';
import { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [registerItem, setRegisterItem] = useState(null);

  return (
    <div className="App">
      <main>

        <Router>
          <Switch>

            <Route exact path='/'>
              <Welcome />
            </Route>

            <Route path='/register'>
              <Register setRegisterItem={setRegisterItem} />
            </Route>

            <Route path='/registeritem'>
              <RegisterItem registerItem={registerItem} />
            </Route>

          </Switch>
        </Router>
        
        

      </main>
    </div>
  );
}

export default App;
