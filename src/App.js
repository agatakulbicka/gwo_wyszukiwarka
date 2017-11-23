import React from "react";
import {Provider} from "react-redux";
import "./styles/styles.scss"
import {SearchContainer} from "./Search/index";

function App({store}) {
    return <Provider store={store}>
        <SearchContainer />
    </Provider>
}

export default App;
