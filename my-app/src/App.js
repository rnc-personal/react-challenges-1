import css from './App.module.css';
import Sidebar from './components/SideBar';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple message="LOGIN" />
      <Sidebar url="#"/>
    </div>
  );
}

export default App;