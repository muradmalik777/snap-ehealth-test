import React from "react";
import "./sidebar.scss";
import { Box, List, ListItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/sidebarLinks";

const Sidebar = () => {
    return (
        <Box className="sidebar">
            <List>
                {links.map((item, index) => (
                    <ListItem key={index} className={"menu-item"}>
                        <NavLink exact activeClassName="active" to={item.path}>
                            {item.name}
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
