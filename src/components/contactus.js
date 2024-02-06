import React, { use, useState } from 'react';
import { Fragment, useEffect } from "react";
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
import chatBotLogo from '/public/assets/logos/chatbotLogo.png';
import Image from 'next/image';
import { MdEmail } from "react-icons/md";
import { BiSolidSend } from "react-icons/bi";
import {

    TextField,

    Typography,
    Grid,
    Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { getCookie, setCookie } from '../utilits';




const ContactUs = () => {
    const [state, setState] = useState({
        left: false,
    });   const [message, setMessage] = useState('');
    const [toggle, setToggle] = useState(false);
    const toggleDrawer = (open) => () => {
        setState({ left: open });
        setToggle(open)
        console.log("toggle", toggle)
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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        attachment: null
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            attachment: file
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        let newErrors = {};
        if (!formData.name.trim()) {
            newErrors = { ...newErrors, name: 'Name is required' };
        }
        if (!formData.email.trim()) {
            newErrors = { ...newErrors, email: 'Email is required' };
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors = { ...newErrors, email: 'Invalid email address' };
        }
        if (!formData.message.trim()) {
            newErrors = { ...newErrors, message: 'Message is required' };
        }
        if (!formData.attachment) {
            newErrors = { ...newErrors, attachment: 'Attachment is required' };
        } else {
            const allowedFileTypes = ['pdf', 'doc', 'docx', 'txt', 'csv', 'xls', 'xlsx'];
            const fileType = formData.attachment.name.split('.').pop().toLowerCase();
            if (!allowedFileTypes.includes(fileType)) {
                newErrors = { ...newErrors, attachment: 'Invalid file type. Allowed: pdf, doc, docx, txt, csv, xls, xlsx' };
            }
        }
        setErrors(newErrors);

        // If no errors, submit form
        if (Object.keys(newErrors).length === 0) {
            // Your form submission logic here
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
                    style={{marginTop:'3em'}}

                >
                <MdEmail />
                </div>

                <Drawer
                    anchor="left"
                    open={state.left}
                    onClose={toggleDrawer(false)}
                    sx={{ width: '100%', }}
                    PaperProps={{
                        elevation: 8,
                        sx: {

                            height: '100%',
                            color: "rgba(225,249,27,1)",
                            backgroundColor: 'rgba(10, 10, 10, 0.9)',
                            width: '50%',  // Default width for desktop

                            // Media query for mobile
                            '@media (max-width: 910px)': {
                                width: '100%',  // Set width to 100% for screens with width up to 767px
                            }
                        }
                    }}
                >

<div>
            <Grid container spacing={0} sx={{ paddingTop: 1, borderBottom: "1px solid rgb(215, 214, 214,0.5)" }}>
                <Grid item xs={10.5} sm={11.0} >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                            src={chatBotLogo}
                            alt="Description of your image"
                            width={130}
                            height={80}
                            style={{ marginRight: '-3%', marginLeft: '-3%' }} // Adjust margin as needed
                        />
                        <p style={{ marginTop: '1%', color: 'white', fontFamily: "serif" }}>Get in touch</p>
                    </div>
                </Grid>
                <Grid item xs={0.5}>
                    <button className='closeButton' onClick={() => {}}>X</button> {/* You need to modify toggleDrawer to toggle drawer state */}
                </Grid>
            </Grid>
            <div style={{ padding: "3em" }}>
                <form onSubmit={handleFormSubmit}>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
 
      <p className='contactUslable'>Your Name (Required)</p>
 
      <p className='errorMsg'>  {errors.name && <>{errors.name}</>}</p>

  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className='contactUsForm' />
</Grid>
                        <Grid item xs={12}>
                            <p className='contactUslable' style={{ marginBottom: "0.5em" }}>Your Email (Required)</p>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className='contactUsForm' />
                            {errors.email && <p className="errorMsg">{errors.email}</p>}
                        </Grid>
                        <Grid item xs={12}>
                            <p className='contactUslable' style={{ marginBottom: "0.5em" }}>Your Message (Required)</p>
                            <TextareaAutosize
                                className='ContactUSTextareaAutosize'
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                            {errors.message && <p className="errorMsg">{errors.message}</p>}
                        </Grid>
                        <Grid item xs={12}>
                            <p className='contactUslable' style={{ marginBottom: "0.5em" }}>Attachment</p>
                            <label htmlFor="file-upload" className="custom-file-upload">
                                Choose File
                            </label>
                            <input type="file" id="file-upload" name="file-upload" onChange={handleFileChange} />
                            {errors.attachment && <p className="errorMsg">{errors.attachment}</p>}
                        </Grid>
                    </Grid>
                    <div style={{textAlign:'right'}}>
                    <button type="submit" className='contactUsButton' style={{ marginTop: "1em" }}>Send <BiSolidSend style={{ marginLeft: '0.5em' }} /></button>
                    </div>
                </form>
            </div>
        </div>
                </Drawer>
            </React.Fragment >
        </div >
    );
};



export default ContactUs;
