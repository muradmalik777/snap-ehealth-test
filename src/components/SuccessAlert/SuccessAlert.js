import React from "react";
import "./SuccessAlert.scss";
import { Snackbar, Slide, Typography } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

const SuccessAlert = ({ data, open, onClose }) => {
    return (
        <Snackbar
            TransitionComponent={Slide}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            autoHideDuration={5000}
            className="successAlert"
            onClose={onClose}
            open={open}
        >
            <Alert onClose={onClose} severity="success">
                <AlertTitle>{(data && data.title) || ""}</AlertTitle>
                <Typography variant="h6">
                    {(data && data.message) || ""}
                </Typography>
            </Alert>
        </Snackbar>
    );
};

export default SuccessAlert;
