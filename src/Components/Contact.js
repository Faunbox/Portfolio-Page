import React from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import Box from "@material-ui/core/Box";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5%;
  color: white;
  background-color: grey;
`;

const Contact = () => {
  return (
    <>
      <Wrapper>
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.name) {
              errors.name = "Required";
            } else if (values.name.length < 3) {
              errors.name = "Name must be longer than 3 character";
            }

            if (!values.subject) errors.subject = "Required";
            else if (values.subject.length < 5)
              errors.subject = "Subject must be longer than 5 character";

            if (!values.message) errors.message = "Required";
            else if (values.message < 10)
              errors.message = "Message must be longer than 10 character";

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}>
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Box margin={4}>
                <Field
                  component={TextField}
                  type="name"
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box margin={4}>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  // helperText="Enter Your Email"
                />
              </Box>
              <Box margin={4}>
                <Field
                  component={TextField}
                  type="subject"
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              {isSubmitting && <LinearProgress />}
              <Box margin={4}>
                <Field
                  component={TextField}
                  rows="10"
                  type="text"
                  name="message"
                  placeholder="Enter your message here"
                  variant="outlined"
                  fullWidth
                  multiline
                />
              </Box>
              <Box margin={1}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}>
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

export default Contact;
