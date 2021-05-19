import { Box } from "@material-ui/core";
import "./FlightBooker.scss";
import FlightBooker from "../../components/FlightBooker";

const FlightBookerPage = () => {
    return (
        <Box className="flightBookerPage">
            <FlightBooker />
        </Box>
    );
};

export default FlightBookerPage;
