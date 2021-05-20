import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Box } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import TemperatureConverterPage from "./pages/TemperatureConverter";
import FlightBookerPage from "./pages/FlightBooker";
import TimerPage from "./pages/Timer";
import CrudPage from "./pages/Crud";

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
                            <CounterPage />
                        </Route>
                        <Route exact path={"/temperature-converter"}>
                            <TemperatureConverterPage />
                        </Route>
                        <Route exact path={"/flight-booker"}>
                            <FlightBookerPage />
                        </Route>
                        <Route exact path={"/timer"}>
                            <TimerPage />
                        </Route>
                        <Route exact path={"/crud"}>
                            <CrudPage />
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
