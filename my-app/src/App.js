import css from './App.module.css';
import Sidebar from './components/SideBar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarSimplNavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className={css.App}>
      <NavBarSimplNavBarForm />
      <Sidebar url="#"/>
    </div>
  );
}

export default App;