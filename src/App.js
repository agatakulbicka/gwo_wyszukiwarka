import React from "react";
import "./styles/styles.scss"
import {SearchContainer} from "./Search/index";

function App({store}) {
    return <SearchContainer store={store}/>
}

export default App;
