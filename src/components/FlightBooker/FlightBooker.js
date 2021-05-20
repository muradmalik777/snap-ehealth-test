import {
    Box,
    Typography,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import "./FlightBooker.scss";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import CustomButton from "../CustomButton/CustomButton";
import SuccessAlert from "../SuccessAlert";

const FlightBooker = () => {
    const [bookingType, setBookingType] = useState(0);
    const [departDate, setDepartDate] = useState(new Date());
    const initReturnDate = new Date().setDate(new Date().getDate() + 1);
    const [returnDate, setReturnDate] = useState(new Date(initReturnDate));
    const [errors, setErrors] = useState({});
    const [alertData, setAlertData] = useState(null);

    const flightTypeMenu = [
        { label: "One-way Flight", value: 0 },
        { label: "Return Flight", value: 1 },
    ];

    const handleBookingTypeChange = (e) => {
        setBookingType(e.target.value);
    };

    const handleDepartDateChange = (date) => {
        if (date && date.toString() === "Invalid Date") {
            updateErrors("departDateError", true);
            setDepartDate(date);
        } else {
            setDepartDate(date);
            updateErrors("departDateError", false);
        }
    };

    const handleReturnDateChange = (date) => {
        if (date && date.toString() === "Invalid Date") {
            updateErrors("returnDateError", true);
            setReturnDate(date);
        } else {
            setReturnDate(date);
            updateErrors("returnDateError", false);
        }
    };

    const showMessage = () => {
        let title = "Congratulations";
        let message = `You have booked a ${
            flightTypeMenu[bookingType].label
        } with Departure Date: ${departDate.toDateString()}`;

        if (bookingType) {
            message += `and Return Date: ${returnDate.toDateString()}`;
        }

        setAlertData({ title, message });
    };

    const updateErrors = (key, value) => {
        let prevErrors = { ...errors };
        prevErrors[key] = value;
        setErrors(prevErrors);
    };

    const validateDates = () => {
        if (
            departDate &&
            departDate.toString() !== "Invalid Date" &&
            returnDate &&
            returnDate.toString !== "Invalid Date" &&
            bookingType
        ) {
            const departUTC = new Date(departDate).getTime();
            const returnUTC = new Date(returnDate).getTime();
            if (departUTC >= returnUTC) {
                updateErrors("invalidReturnDate", true);
            } else {
                updateErrors("invalidReturnDate", false);
            }
        } else {
            updateErrors("invalidReturnDate", false);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(validateDates, [departDate, returnDate, bookingType]);

    return (
        <Box
            className="flightBooker"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <SuccessAlert
                open={Boolean(alertData)}
                onClose={() => setAlertData(null)}
                data={alertData}
            />
            <Box className="titleBox">
                <Typography variant="h4">Flight Booker</Typography>
            </Box>
            <Box className="contentBox">
                <Box className="inputBox">
                    <FormControl variant="outlined" className="customSelect">
                        <InputLabel className="label" id="flight-type-label">
                            Booking Type
                        </InputLabel>
                        <Select
                            labelId="flight-type-label"
                            id="light-type-select"
                            value={bookingType}
                            onChange={handleBookingTypeChange}
                            label="Booking Type"
                        >
                            {flightTypeMenu.map((item, index) => (
                                <MenuItem key={index} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            variant="inline"
                            inputVariant="outlined"
                            format="dd-MM-yyyy"
                            className="customInput"
                            margin="normal"
                            id="departure-date"
                            label="Departure Date"
                            value={departDate}
                            onChange={handleDepartDateChange}
                        />
                        <KeyboardDatePicker
                            disabled={!bookingType}
                            margin="normal"
                            variant="inline"
                            inputVariant="outlined"
                            id="return-date"
                            label="Return Date"
                            format="dd-MM-yyyy"
                            className="customInput"
                            value={returnDate}
                            onChange={handleReturnDateChange}
                        />
                    </MuiPickersUtilsProvider>
                    {errors["invalidReturnDate"] && (
                        <Typography className="error" variant="p">
                            Return date is not valid, it should be greater than
                            Departure date
                        </Typography>
                    )}
                </Box>

                <Box className="actionBox">
                    <CustomButton
                        disabled={
                            !departDate ||
                            !returnDate ||
                            errors["departDateError"] ||
                            errors["returnDateError"] ||
                            errors["invalidReturnDate"]
                        }
                        className="submitButton full"
                        onClick={showMessage}
                    >
                        Book flight
                    </CustomButton>
                </Box>
            </Box>
        </Box>
    );
};

export default FlightBooker;
