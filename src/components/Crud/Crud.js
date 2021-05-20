import { Box, Typography, TextField, MenuItem } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./Crud.scss";
import CustomButton from "../CustomButton";

const Crud = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");
    const initList = [
        "Malik, Murad",
        "Malik, Umair",
        "Ahmed, Duraiz",
        "Usman, Ali",
    ];
    const [list, setList] = useState(initList);
    const [filteredList, setFilteredList] = useState(initList);

    const changeFirstName = (e) => {
        const value = e.target.value;
        setFirstName(value);
    };

    const changeLastName = (e) => {
        const value = e.target.value;
        setLastName(value);
    };

    const changeSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const changeSelected = (data) => {
        setSelected(data);
    };

    useEffect(() => {
        if (selected) {
            const names = selected.split(",");
            setLastName(names[0]);
            setFirstName(names[1]);
        } else {
            setLastName("");
            setFirstName("");
        }
    }, [selected]);

    useEffect(() => {
        if (search) {
            const data = filteredList.filter((item) =>
                item.toLowerCase().includes(search)
            );
            setFilteredList(data);
        } else {
            setFilteredList([...list]);
        }
    }, [search]);

    const create = () => {
        const newName = `${lastName}, ${firstName}`;
        const data = [...list];
        const index = data.findIndex(
            (item) => item.toLowerCase() === newName.toLowerCase()
        );
        if (index === -1) {
            data.push(newName);
            setList(data);
            setFilteredList(data);
        }
    };

    const update = () => {
        const data = [...list];
        const index = data.findIndex(
            (item) => item.toLowerCase() === selected.toLowerCase()
        );
        if (index !== -1) {
            data[index] = `${lastName}, ${firstName}`;
            setList(data);
            setFilteredList(data);
            setSelected("");
        }
    };

    const deleteItem = () => {
        const data = [...list];
        const index = data.findIndex(
            (item) => item.toLowerCase() === selected.toLowerCase()
        );
        if (index !== -1) {
            data.splice(index, 1);
            setList(data);
            setFilteredList(data);
            setSelected("");
        }
    };

    return (
        <Box
            className="crud"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Box className="titleBox">
                <Typography variant="h4">CRUD</Typography>
            </Box>
            <Box className="contentBox">
                <TextField
                    variant="outlined"
                    label="Filter Prefix"
                    value={search}
                    name="celcius"
                    className="customInput"
                    onChange={changeSearch}
                />

                <Box className="listBox">
                    <Box className="list">
                        {filteredList.map((item, index) => (
                            <MenuItem
                                key={index}
                                onClick={() => changeSelected(item)}
                                className={selected === item ? "selected" : ""}
                            >
                                {item}
                            </MenuItem>
                        ))}
                    </Box>
                    <Box className="inputs">
                        <TextField
                            variant="outlined"
                            label="First Name"
                            value={firstName}
                            name="celcius"
                            className="customInput"
                            onChange={changeFirstName}
                        />
                        <TextField
                            variant="outlined"
                            label="Last Name"
                            value={lastName}
                            name="celcius"
                            className="customInput"
                            onChange={changeLastName}
                        />
                    </Box>
                </Box>

                <Box className="actionBox">
                    <CustomButton className="submitButton" onClick={create}>
                        Create
                    </CustomButton>
                    <CustomButton
                        disabled={!Boolean(selected)}
                        className="updateButton"
                        onClick={update}
                    >
                        Update
                    </CustomButton>
                    <CustomButton className="deleteButton" onClick={deleteItem}>
                        Delete
                    </CustomButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Crud;
