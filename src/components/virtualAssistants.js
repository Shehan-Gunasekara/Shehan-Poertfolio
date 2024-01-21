import Head from "next/head";
import { Fragment, useState } from "react";
import * as React from "react";
import {
    Box,
    TextField,
    Button,
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
];

const Message = ({ message }) => {
    const isBot = message.sender === "bot";

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: isBot ? "flex-start" : "flex-end",
                mb: 2,
            }}
        >
            <Paper
                variant="outlined"
                sx={{
                    p: 2,
                    backgroundColor: isBot ? "primary.light" : "secondary.light",
                    borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
                }}
            >
                <Typography variant="body1">{message.text}</Typography>
            </Paper>
        </Box>
    );
};

const VirtualAssistance = () => {
    const [input, setInput] = React.useState("");
    const [color, setColor] = useState("yellow");
    const [toggle, setToggle] = useState(false);

    const handleSend = () => {
        if (input.trim() !== "") {
            console.log(input);
            setInput("");
        }
    };

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };
    return (
        <Fragment>

            <div
                id="switcher"
                className={toggle ? "open" : "close"}
                style={{ display: "block", marginTop: "100px" }}
            >
                <Box
                    sx={{
                        height: "80vh",
                        display: "flex",
                        flexDirection: "column",
                        bgcolor: "grey.200",
                    }}
                >
                    <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
                        {messages.map((message) => (
                            <Message key={message.id} message={message} />
                        ))}
                    </Box>
                    <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    placeholder="Type a message"
                                    variant="outlined"
                                    value={input}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    fullWidth
                                    size="large"
                                    color="primary"
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    onClick={handleSend}
                                >
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <div id="hideSwitcher" onClick={() => setToggle(false)}>
                    ×
                </div>
            </div>
            <div
                id="showSwitcher"
                className={`styleSecondColor ${toggle ? "close" : "open"}`}
                style={{ marginTop: "100px" }}
                onClick={() => setToggle(true)}
            >
                <i className="fa fa-cog" />
            </div>
        </Fragment>
    );
};
export default VirtualAssistance;
