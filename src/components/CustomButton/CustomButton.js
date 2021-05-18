import React from "react";
import "./CustomButton.scss";
import { Button, CircularProgress } from "@material-ui/core";

const CustomButton = (props) => {
    const { loading, className, children, onClick, disabled, type, ...others } =
        props;

    return (
        <Button
            className={"customButton " + className}
            component="button"
            disabled={loading || disabled}
            onClick={onClick}
            type={type ? type : "button"}
            {...others}
        >
            {loading ? (
                <CircularProgress className="loader" size={35} thickness={5} />
            ) : (
                children
            )}
        </Button>
    );
};

export default CustomButton;
