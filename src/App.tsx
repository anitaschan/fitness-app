import './App.css';
import { Profile } from './pages/profile/profile';

function App() {
  window.console.log('I SHOULD BE IN APP RN')
  window.console.log('HELLO', typeof (Profile))
  return (
    <div className="appContainer">
      <Profile />
    </div>
  );
}

export default App;
