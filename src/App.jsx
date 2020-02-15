import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";

import Logs from "./Components/Logs/Logs";
import AddBtn from "./Components/Layouts/AddBtn";
import M from "materialize-css/dist/js/materialize";
import SearchBar from "./Components/Layouts/SearchBar";
import AddLogModal from "./Components/Logs/AddLogModal";
import EditLogModal from "./Components/Logs/EditLogModal";
import AddTechModal from "./Components/Techs/AddTechModal";
import TechListModal from "./Components/Techs/TechListModal";

import { Provider } from 'react-redux';
import store from './store';
window.M = global.M = M;

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <>
        <SearchBar />
        <div className="container">
          <Logs />
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
        </div>
      </>
    </Provider>
  );
};

export default App;
