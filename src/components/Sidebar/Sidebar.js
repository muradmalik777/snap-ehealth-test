import React, { Fragment } from "react";
import "./sidebar.scss";
import { Drawer, List, ListItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/sidebarLinks";

const Sidebar = () => {
    return (
        <Fragment>
            <Drawer
                anchor={"left"}
                open={true}
                variant={"permanent"}
                classes={{ paper: "sidebar", docked: "parent" }}
            >
                <List>
                    {links.map((item, index) => (
                        <ListItem key={index} className={"menu-item"}>
                            <NavLink
                                exact
                                activeClassName="active"
                                to={item.path}
                            >
                                {item.name}
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Fragment>
    );
};

export default Sidebar;
