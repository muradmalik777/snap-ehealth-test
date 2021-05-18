import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Grid } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

const App = () => {
    useEffect(() => {
        document.title = "Snap E-Health Coding Challenge";
    });

    return (
        <Router>
            <Grid container className="app">
                <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={12} sm={9} md={9} lg={9}>
                    <Switch></Switch>
                </Grid>
            </Grid>
        </Router>
    );
};

export default App;
