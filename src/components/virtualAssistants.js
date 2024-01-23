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
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { IoSend } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
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
    { id: 5, text: "How can I assist you today af as da ds as dasd s ?", sender: "user" },
    { id: 6, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 7, text: "How can I assist you today af as da ds as dasd s ?", sender: "user" },
    { id: 8, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 9, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 4, text: "How can I assist you today af as da ds as dasd s ?", sender: "user" },
    { id: 5, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 6, text: "How can I assist you today af as da ds as dasd s ?", sender: "user" },
    { id: 7, text: "How can I assist you today af as da ds as dasd s ?", sender: "user" },
    { id: 8, text: "How can I assist you today af as da ds as dasd s ?", sender: "bot" },
    { id: 9, text: "How can I assist you today af as da ds as dasd s ?", sender: "user" },
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
                    backgroundColor: isBot ? '#252833' : 'transparent',
                    border: isBot ? 'none' : '0.1em solid #252833',
                    color: 'white',
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
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleKeyPress = (event) => {
        // Check if the pressed key is Enter
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default behavior of Enter in a textarea
            // Handle sending the message (you can replace this with your logic)
            console.log('Sending message:', message);
        }
    };

    const handleTextAreaResize = (event) => {
        // Set a maximum height for the textarea
        const maxHeight = 100; // Adjust this value as needed
        if (event.target.scrollHeight <= maxHeight) {
            event.target.style.height = 'auto';
            event.target.style.height = `${event.target.scrollHeight}px`;
        } else {
            event.target.style.overflowY = 'auto';
        }
    };
    return (
        <div>
            <Head>
                <link rel="stylesheet" href={`css/skins/goldenrod.css`} />
            </Head>
            <React.Fragment key="left">
                <div
                    id="showSwitcher"
                    className={`styleSecondColor ${toggle ? "close" : "open"}`}
                    onClick={toggleDrawer(true)}

                >
                    <BsChatLeftTextFill />
                </div>

                <Drawer
                    anchor="left"
                    open={state.left}
                    onClose={toggleDrawer(false)}
                    sx={{ width: '100%', }}
                    PaperProps={{
                        elevation: 8,
                        sx: {


                            color: "rgba(225,249,27,1)",
                            backgroundColor: 'rgba(10, 10, 10, 0.9)'
                        }
                    }}
                >


                    <Grid container spacing={2} sx={{ p: 2 }}>
                        <Grid item xs={11.0}><h3>Virtual Assistance</h3></Grid>
                        <Grid item xs={0.5}>
                            <button className='closeButton' onClick={toggleDrawer(false)}>X</button>
                        </Grid>
                    </Grid>

                    <div className="scroll-container" style={{ paddingLeft: "1em", paddingRight: "1em", minWidth: "41em", minHeight: "82vh" }}>
                        {/* {messages.map((message) => (
                            <Message key={message.id} message={message} />
                        ))} */}
                    </div>

                    {/* <Grid container style={{ bottom: '0px', marginBottom: '-2.5em', position: 'relative' }}>
                        <Grid item xs={11} >
                            <TextareaAutosize
                                placeholder='Type your message...'
                                style={{ width: '100%', minHeight: '2em', maxHeight: '5em', resize: 'none' }}
                                value={message}
                                onChange={handleInputChange}
                                onInput={handleTextAreaResize}
                            />
                        </Grid>

                    </Grid>

                    <Grid container style={{ position: 'relative' }}>
                        <Grid item xs={11} ></Grid>
                        <Grid item xs={1}>
                            <Button
                                variant="contained"


                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid> */}

                    <div style={{ display: 'flex', alignItems: 'center', height: '7em', paddingLeft: '1em', paddingRight: '1em', backgroundColor: "rgba(5, 5, 5, 0.9)" }}>
                        <TextareaAutosize
                            placeholder='Type your message...'
                            className='TextareaAutosize'
                            value={message}
                            onChange={handleInputChange}
                            onInput={handleTextAreaResize}
                        />
                        <button className='chat-send-btn'><FaArrowUp />
                        </button>
                    </div>

                </Drawer>
            </React.Fragment >
        </div >
    );
};



export default TemporaryDrawer;
