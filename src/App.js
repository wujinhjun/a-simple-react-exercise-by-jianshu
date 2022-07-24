import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import store from "./store";
import { Provider } from "react-redux";
import Home from './pages/home';
import Details from './pages/details/loadable';
import Login from "./pages/login";
import Write from "./pages/write";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Home />}>
                        </Route>
                        <Route path="/login" exact element={<Login />}>
                        </Route>
                        <Route path="/detail/:id" exact element={<Details />}>
                        </Route>
                        <Route path="/write" exact element={<Write />}>
                        </Route>
                    </Routes>
                </BrowserRouter >
            </Provider>
        );
    }
}

export default App;
