import css from './App.module.css';
import Sidebar from './components/SideBar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarSimplNavBarForm from './components/NavBarForm';
import Content from './components/Content';
import ContentAPI from './components/ContentAPI';
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.App}>
      <NavBarSimplNavBarForm />
      <Sidebar url="#"/>
      <ContentAPI />
    </div>
  );
}

export default App;