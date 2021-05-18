import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Box } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Counter from "./pages/Counter";
import TemperatureConverter from "./pages/TemperatureConverter";

const App = () => {
    useEffect(() => {
        document.title = "Snap E-Health Coding Challenge";
    });

    return (
        <Router>
            <Box className="app">
                <Box className="menu">
                    <Sidebar />
                </Box>
                <Box className="content">
                    <Switch>
                        <Route exact path={"/counter"}>
                            <Counter />
                        </Route>
                        <Route exact path={"/temperature-converter"}>
                            <TemperatureConverter />
                        </Route>
                        <Route exact path={"/"}>
                            <Redirect to="/counter" />
                        </Route>
                    </Switch>
                </Box>
            </Box>
        </Router>
    );
};

export default App;
