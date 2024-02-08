import React, { use, useState,useRef } from "react";
import { Fragment, useEffect } from "react";

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { IoSend } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import Head from "next/head";
import chatBotLogo from "/public/assets/logos/chatbotLogo.png";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { BiSolidSend } from "react-icons/bi";
import { TextField, Typography, Grid, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { getCookie, setCookie } from "../utilits";
import axios from 'axios';
import { useRouter } from 'next/router';
import { RiMailSendFill } from "react-icons/ri";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { IoIosSend } from "react-icons/io";
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';


const ContactUs = () => {
  const [state, setState] = useState({
    left: false,
  });
  const [message, setMessage] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = useRef();



  const router = useRouter();
  const toggleDrawer = (open) => () => {
    setState({ left: open });
    setToggle(open);
    console.log("toggle", toggle);
  };
  const handleTextAreaResize = (event) => {
    // Set a maximum height for the textarea
    const maxHeight = 100; // Adjust this value as needed
    if (event.target.scrollHeight <= maxHeight) {
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    } else {
      event.target.style.overflowY = "auto";
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    attachment: null,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setSuccess(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setSuccess(false);
    const file = e.target.files[0];
    setFormData({
      ...formData,
      attachment: file,
    });
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFileName(uploadedFile.name);
      // You can also perform other actions with the uploaded file here if needed
    }
  };

  const handleFormSubmit =async(e) => {
    console.log("formData",formData);
    e.preventDefault();
 
    // Validate form fields
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors = { ...newErrors, name: "Name is required" };
    }
    if (!formData.email.trim()) {
      newErrors = { ...newErrors, email: "Email is required" };
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors = { ...newErrors, email: "Invalid email address" };
    }
    if (!formData.message.trim()) {
      newErrors = { ...newErrors, message: "Message is required" };
    }
    if (formData.attachment) {
      const allowedFileTypes = [
        "pdf",
        "doc",
        "docx",
        "txt",
        "csv",
        "xls",
        "xlsx",
        "jpg",
        "jpeg",
        "png",
        "gif",
        // Add more image formats as needed
      ];
      
      const fileType = formData.attachment.name.split(".").pop().toLowerCase();
      
      if (!allowedFileTypes.includes(fileType)) {
        newErrors = {
          ...newErrors,
          attachment:
            "Invalid file type. Allowed: pdf, doc, docx, txt, csv, xls, xlsx, jpg, jpeg, png, gif",
        };
      }
    } 
    setErrors(newErrors);
console.log("newErrors",newErrors);
    // If no errors, submit form
    if (Object.keys(newErrors).length === 0) {
      setSuccess(false);
      setLoading(true);
   
        try {
          console.log("formData",formData);
             await axios.post('https://flask-python-portfolio-5ffcdbf52aeb.herokuapp.com/email', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then((response) => {
                console.log("SSSSSSSSSSSSSSSSSS",response.status);
                      // Reset form fields and errors
                
                      setFormData({
                        name: "",
                        email: "",
                        message: "",
                        attachment: null,
                      });
                      setFileName("");
                      setIsLoading(false);
                      setSuccess(true);
                      setLoading(false);
            })
          
          } catch (error) {
            console.error('Error uploading file:', error);
          }
    }
  };

  const buttonSx  = {
    bgcolor: success ? 'rgb(212, 154, 6)': 'rgb(233, 187, 71)',
    '&:hover': {
      bgcolor: success ? 'rgb(212, 154, 6)': 'rgb(233, 187, 71)',
    },
    
  };
  

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  // const handleButtonClick = () => {
  //   if (!loading) {
  //     setSuccess(false);
  //     setLoading(true);
  //     timer.current = window.setTimeout(() => {
  //       setSuccess(true);
  //       setLoading(false);
  //     }, 2000);
  //   }
  // };


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
          style={{ marginTop: "3em" }}
        >
          <MdEmail />
        </div>

        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer(false)}
          sx={{ width: "100%" }}
          PaperProps={{
            elevation: 8,
            sx: {
              height: "100%",
              color: "rgba(225,249,27,1)",
              backgroundColor: "rgba(10, 10, 10, 0.9)",
              width: "50%", // Default width for desktop

              // Media query for mobile
              "@media (max-width: 910px)": {
                width: "100%", // Set width to 100% for screens with width up to 767px
              },
            },
          }}
        >
          <div>
            <Grid
              container
              spacing={0}
              sx={{
                paddingTop: 1,
                borderBottom: "1px solid rgb(215, 214, 214,0.5)",
              }}
            >
              <Grid item xs={10.5} sm={11.0}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={chatBotLogo}
                    alt="Description of your image"
                    width={130}
                    height={80}
                    style={{ marginRight: "-3%", marginLeft: "-3%" }} // Adjust margin as needed
                  />
                  <p
                    style={{
                      marginTop: "1%",
                      color: "white",
                      fontFamily: "serif",
                    }}
                  >
                    Get in touch
                  </p>
                </div>
              </Grid>
              <Grid item xs={0.5}>
                <button className="closeButton" onClick={toggleDrawer(false)}>
                  X
                </button>{" "}
                {/* You need to modify toggleDrawer to toggle drawer state */}
              </Grid>
            </Grid>
            <div style={{ padding: "3em" }}>
              <form onSubmit={handleFormSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p className="contactUslable">Your Name </p>

                      <p className="errorMsg">
                        {" "}
                        {errors.name && <>{errors.name}</>}
                      </p>
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="contactUsForm"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p
                        className="contactUslable"
                        style={{ marginBottom: "0.5em" }}
                      >
                        Your Email 
                      </p>
                      <p className="errorMsg">
                        {" "}
                        {errors.email && <>{errors.email}</>}
                      </p>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="contactUsForm"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p
                        className="contactUslable"
                        style={{ marginBottom: "0.5em" }}
                      >
                        Your Message 
                      </p>
                      <p className="errorMsg">
                        {" "}
                        {errors.message && <>{errors.message}</>}
                      </p>
                    </div>
                    <TextareaAutosize
                      className="ContactUSTextareaAutosize"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p
                        className="contactUslable"
                        style={{ marginBottom: "0.5em" }}
                      >
                        Attachment <i>(Optional)</i>
                      </p>{" "}
                      <p className="errorMsg">
                        {errors.attachment && <>{errors.attachment}</>}
                      </p>
                    </div>
                    <label htmlFor="file-upload" className="custom-file-upload">
                      Choose File
                    </label>
                    <div style={{display: "inline-flex", alignItems: "center"}}>
                    <input
                      type="file"
                      id="file-upload"
                      name="file-upload"
                      onChange={handleFileChange}
                    />
                  <p className="selectedFile">{fileName}</p>
                    </div>
                  </Grid>
                </Grid>
                <div style={{ textAlign: "right" }}>
      





      <Box sx={{ m: 1, position: 'relative' }}>
        {!loading?(<>   <Fab
          aria-label="save"
          color="gold"
          sx={buttonSx}
          size="medium" 
          onClick={handleFormSubmit}
        >
          {success ? <CheckIcon style={{fontSize:'2em'}}/> : <RiMailSendFill  style={{fontSize:'2em' , color:"#353535"}}/>}
        </Fab></>):(<> <CircularProgress
            size={40}
            sx={{color:"rgb(233, 187, 71)"}}
          /></>)}

      </Box>


                </div>

              </form>
            </div>
          </div>

        </Drawer>
      </React.Fragment>
  
    </div>
  );
};

export default ContactUs;

