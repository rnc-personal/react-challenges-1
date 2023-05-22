import css from './App.module.css';
import Sidebar from './components/SideBar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarSimplNavBarForm from './components/NavBarForm';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      <NavBarSimplNavBarForm />
      <Sidebar url="#"/>
      <Content />
    </div>
  );
}

export default App;