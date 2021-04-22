import './App.css';
import Welcome from './components/Welcome';
import Register from './components/Register';
import RegisterItem from './components/RegisterItem';
import { useState } from 'react';

function App() {

  const WELCOME = 'welcome', REGISTER = 'register', REGISTERITEM = 'registerItem';

  const [currentScreen, setCurrentScreen] = useState(WELCOME);
  const [registerItem, setRegisterItem] = useState(null);

  let content = null;

  switch(currentScreen) {
    case WELCOME:
      content = <Welcome showRegister={() => setCurrentScreen(REGISTER)}/>
      break;
    case REGISTER:
      content = <Register setRegisterItem={setRegisterItem} showRegisterItem={() => setCurrentScreen(REGISTERITEM)}/>
      break; 
    case REGISTERITEM:
      content = <RegisterItem showRegister={() => setCurrentScreen(REGISTER)}/>
      break;
    default:
      content = <Welcome />
  }

  return (
    <div className="App">
      <header className="App-header">
        {registerItem}
      </header>
      <main>
        
        {content}

      </main>
    </div>
  );
}

export default App;
