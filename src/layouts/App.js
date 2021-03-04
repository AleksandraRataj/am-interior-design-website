import React from "react"
import {BrowserRouter, HashRouter} from "react-router-dom";

import Navigation from "./Navigation";
import Page from "./Page";

function App() {
    return (
        <BrowserRouter>
            <HashRouter>
            <div className="App">
                <main>
                    <Navigation/>
                    <section>
                        {<Page/>}
                    </section>
                </main>
            </div>
            </HashRouter>
        </BrowserRouter>
    );
}

export default App;
