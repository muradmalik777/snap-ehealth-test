import { Box } from "@material-ui/core";
import "./Timer.scss";
import Timer from "../../components/Timer";

const TimerPage = () => {
    return (
        <Box className="timerPage">
            <Timer />
        </Box>
    );
};

export default TimerPage;
