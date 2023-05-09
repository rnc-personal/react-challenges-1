import css from './App.module.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      <Sidebar url="https://www.google.com"/>
    </div>
  );
}

export default App;