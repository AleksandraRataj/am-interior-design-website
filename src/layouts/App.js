import React from "react"
import {BrowserRouter} from "react-router-dom";

import Navigation from "./Navigation";
import Page from "./Page";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <main>
                    <Navigation/>
                    <section>
                        {<Page/>}
                    </section>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
