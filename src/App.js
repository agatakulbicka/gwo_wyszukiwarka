import React from "react";
import './App.scss';
import "./styles/styles.scss"
import {SearchContainer} from "./Search/index";

function App({store}) {
    return <SearchContainer store={store}/>
}

export default App;
