import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';



import Head from "next/head";

import {

    TextField,

    Typography,
    Grid,
    Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const messages = [
    { id: 1, text: "Hi there!", sender: "bot" },
    { id: 2, text: "Hello!", sender: "user" },
    { id: 3, text: "How can I assist you today af as da ds as dasd s I assist you today af as da ds as dasd s?", sender: "bot" },
    { id: 4, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 5, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 6, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 7, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 8, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 9, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 4, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 5, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 6, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 7, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 8, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 9, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
];
const Message = ({ message }) => {
    const isBot = message.sender === 'bot';

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: isBot ? 'flex-start' : 'flex-end',
                mb: 2,
            }}
        >
            <Paper
                variant="outlined"
                sx={{
                    p: 2,
                    backgroundColor: isBot ? 'primary.light' : 'secondary.light',
                    borderRadius: isBot
                        ? '20px 20px 20px 5px'
                        : '20px 20px 5px 20px',
                }}
            >
                <Typography variant="body1">{message.text}</Typography>
            </Paper>
        </Box>
    );
};
const TemporaryDrawer = () => {
    const [state, setState] = useState({
        left: false,
    });
    const [toggle, setToggle] = useState(false);
    const toggleDrawer = (open) => () => {
        setState({ left: open });
        setToggle(open)
        console.log("toggle", toggle)
    };

    return (
        <div>
            <React.Fragment key="left">
                <div
                    id="showSwitcher"
                    className={`styleSecondColor ${toggle ? "close" : "open"}`}
                    style={{ marginTop: "100px" }}
                    onClick={toggleDrawer(true)}

                >
                    <i className="fa fa-cog" />
                </div>

                <Drawer
                    anchor="left"
                    open={state.left}
                    onClose={toggleDrawer(false)}
                    sx={{ width: '100%' }}
                >
                    <button onClick={toggleDrawer(false)}>Close</button>
                    <div
                        style={{
                            height: '100vh',
                            overflowY: 'auto',
                            position: 'relative',
                        }}
                    >
                        <div style={{ width: '100%', padding: '20px' }}>
                            {messages.map((message) => (
                                <Message key={message.id} message={message} />
                            ))}
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="Type your message here"
                        style={{
                            width: '100%',
                            padding: '20px',
                            position: 'absolute',
                            bottom: '0',
                        }}
                    />
                </Drawer>
            </React.Fragment >
        </div >
    );
};



export default TemporaryDrawer;
