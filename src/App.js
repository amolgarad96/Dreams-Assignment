import logo from './logo.svg';
import './App.css';
import LifeCycle from './component/LifeCycle';
import RefEx from './component/RefEx';
import Dropdown from './component/Dropdown';
import Assignment1 from './component/Assignment1';
import DarkMode from './component/DarkMode';
import ThemeProvider from './ThemeProvider';
import ReducerHook from './component/ReducerHook';
import LifeCycleUseEffect from './component/LifeCycleUseEffect';
import WithAuth from './WithAuth';
import Dashboard from './component/HOC/Dashboard';
import Todo from './component/Todo';
import Counter from './component/Counter';
import InputComp from './component/InputComp';
import { Route, Routes } from 'react-router-dom';
import ListData from './component/ListData';
const ProtectedRoute = WithAuth(Dashboard);

function App() {
  return (
    <>
      {/* <h1 className="text-center">Hello,This is Amol Dev</h1> */}
      {/* <LifeCycle /> */}
      {/* <RefEx /> */}
      {/* <Dropdown /> */}
      {/* <Assignment1 /> */}
      {/* <ThemeProvider>
        <DarkMode />
      </ThemeProvider> */}
      {/* <ReducerHook /> */}
      {/* <LifeCycleUseEffect /> */}
      {/* <ProtectedRoute /> */}
      {/* <Todo /> */}
      {/* <Counter /> */}
      <Routes>
        <Route path='' element={<InputComp />} />
        <Route path='/list' element={<ListData />} />
      </Routes>
    </>
  );
}

export default App;
