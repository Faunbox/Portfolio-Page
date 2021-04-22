import React, { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";
import { ThemedWrapperStyle } from "../GlobalCss/GlobalStyles";

//Formik
import { useFormik } from "formik";
import * as Yup from "yup";

//Material ui
import { Button, Box, TextField, Snackbar } from "@material-ui/core";
//firebase
import firebase from "firebase/app";
import "firebase/firestore";
import { authAnony } from "./firebase";
import { gsapAnimation } from "../Hooks/hooks";

const ContactWrapper = styled.div`
  ${ThemedWrapperStyle}
  width: 100vw;
  padding: 5%;
`;

const Form = styled.form`
  width: 100%;
  font-size: 1.6rem;
`;

const FormField = styled(TextField)`
  color: white;
  background-color: white;
  border-color: black;

  label {
    font-size: 1.4rem;
  }
  p {
    font-size: 1.1rem;
  }
`;

const H1 = styled.h1`
  color: ${({ theme }) => (theme === true ? "white" : "black")};
`;

const SendButton = styled(Button)`
  background-color: ${({ theme }) => (theme === true ? "white" : "black")};
  color: ${({ theme }) => (theme === true ? "black" : "white")};
  border-color: black;
  font-size: 3rem;
`;

const Contact = () => {
  //submit state
  const [isSubmitted, setIsSubmitted] = useState(false);
  //Snackbar state
  const [isOpen, setIsOpen] = useState(false);
  //Snackbar error state
  const [isError, setIsError] = useState(false);
  //Context
  const { isDarkTheme } = useContext(AppContext);
  //Wrapper Ref
  const wrapperRef = useRef(null);

  // firebase upload contact form on submit
  const uploadData = (data) => {
    const db = firebase.firestore();
    const docRef = db.collection("contact_form").doc(data.subject);

    docRef
      .set(data)
      .then(setIsError(false), console.log(isError, isSubmitted))
      .catch(setIsError(true));
  };

  //Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be longer than 3 character")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string()
        .min(5, "Subject must be longer than 5 character")
        .required("Required"),
      message: Yup.string()
        .min(10, "Message must be longer than 10 character")
        // .max(150, "Message must be shorter than 100 characters")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      uploadData(values);
      resetForm({});
      setIsSubmitted((prevstate) => !prevstate);
    },
  });

  //Anony authorization
  useEffect(() => {
    authAnony();
    const wrapperChildrens = [...wrapperRef.current.children];
    gsapAnimation(wrapperChildrens, wrapperRef.current, "top", "center-=20%");
  }, []);

  return (
    <>
      <ContactWrapper id="contact" ref={wrapperRef} theme={isDarkTheme}>
        <H1 theme={isDarkTheme}>Wanna contact?</H1>
        <Form onSubmit={formik.handleSubmit} theme={isDarkTheme}>
          <Box margin={4}>
            <FormField
              disabled={isSubmitted ? true : false}
              type="name"
              label="Your Name"
              placeholder="Enter Your Name"
              name="name"
              variant="outlined"
              fullWidth
              error={formik.touched.name && Boolean(formik.errors.name)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.name ? formik.errors.name : ""}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Box>
          <Box margin={4}>
            <FormField
              disabled={isSubmitted ? true : false}
              type="email"
              name="email"
              label="Email"
              placeholder="Enter Your Email"
              variant="outlined"
              fullWidth
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email ? formik.errors.email : ""}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Box>
          <Box margin={4}>
            <FormField
              disabled={isSubmitted ? true : false}
              type="subject"
              name="subject"
              label="Subject"
              placeholder="Enter your subject here"
              variant="outlined"
              fullWidth
              helperText={formik.touched.subject ? formik.errors.subject : ""}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.subject}
            />
          </Box>
          <Box margin={4}>
            <FormField
              disabled={isSubmitted ? true : false}
              rows="10"
              type="text"
              name="message"
              label="Message"
              placeholder="Enter your message here"
              variant="outlined"
              fullWidth
              multiline
              helperText={formik.touched.message ? formik.errors.message : ""}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              // size="medium"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </Box>
          <Box margin={1}>
            <SendButton
              theme={isDarkTheme}
              disabled={isSubmitted ? true : false}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disableElevation
            >
              {!isSubmitted ? "Submit" : "Done!"}
            </SendButton>
          </Box>
        </Form>
        {isSubmitted ? (
          <Snackbar
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
            autoHideDuration={5000}
            open={!isOpen}
            onClose={() => setIsOpen((prevstate) => !prevstate)}
            message={!isError ? "Something goes wrong!" : "Succes!"}
          />
        ) : null}
      </ContactWrapper>
    </>
  );
};

export default Contact;
