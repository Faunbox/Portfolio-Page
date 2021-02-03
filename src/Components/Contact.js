import React, { useState } from "react";
import styled from "styled-components";

//Formik
import { useFormik } from "formik";
import * as Yup from "yup";

//Material ui
import { Button, Box, TextField, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//firebase
import firebase from "firebase/app";
import "firebase/firestore";

const Wrapper = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  padding: 5%;
  color: black;
  background-color: white;
`;

const Form = styled.form`
  width: 100%;
`;

const Contact = () => {
  //submit state
  const [isSubmitted, setIsSubmitted] = useState(false);
  //Snackbar state
  const [isOpen, setIsOpen] = useState(false);

  //Material Ui classes
  const useStyles = makeStyles({
    root: {
      cursor: "pointer",
    },
    success: {
      backgroundColor: "green",
    },
  });
  const classes = useStyles();

  // firebase upload contact form on submit
  const uploadData = (data) => {
    const db = firebase.firestore();
    const docRef = db.collection("contact_form").doc(data.subject);

    docRef
      .set(data)
      // .set(data)
      .then(console.log("wysłano " + { data }))
      .catch((error) => console.log("Błąd wysyłania") + error);
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
      // alert(JSON.stringify(values, null, 2));
      uploadData(values);
      resetForm({});
      setIsSubmitted((prevstate) => !prevstate);
    },
  });

  return (
    <>
      <Wrapper id="contact">
        <h1 className="contact">Wanna contact?</h1>
        <Form onSubmit={formik.handleSubmit}>
          <Box margin={4} zIndex={0} position="relative">
            <TextField
              disabled={isSubmitted ? true : false}
              className={classes.textfield}
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
              InputLabelProps={{
                root: classes.textfield,
              }}
              InputProps={{
                root: classes.textfield,
              }}
              FormHelperTextProps={{
                root: classes.textfield,
              }}
            />
          </Box>
          <Box margin={4}>
            <TextField
              disabled={isSubmitted ? true : false}
              name="email"
              type="email"
              label="Email"
              placeholder="Enter Your Email"
              variant="outlined"
              error={formik.touched.email && Boolean(formik.errors.email)}
              fullWidth
              helperText={formik.touched.email ? formik.errors.email : ""}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Box>
          <Box margin={4}>
            <TextField
              disabled={isSubmitted ? true : false}
              type="subject"
              label="Subject"
              name="subject"
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
            <TextField
              className={classes.root}
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
              size="medium"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </Box>
          <Box margin={1}>
            <Button
              disabled={isSubmitted ? true : false}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disableElevation>
              {!isSubmitted ? "Submit" : "Done!"}
            </Button>
          </Box>
        </Form>
        {isSubmitted ? (
          <Snackbar
            className={classes.success}
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
            autoHideDuration={5000}
            open={!isOpen}
            onClose={() => setIsOpen((prevstate) => !prevstate)}
            message="Succes!"
          />
        ) : null}
      </Wrapper>
    </>
  );
};

export default Contact;
