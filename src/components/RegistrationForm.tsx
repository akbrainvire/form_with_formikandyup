import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import envelope from "./svg/envelope2.svg";
import telephone from "./svg/telephone.svg";
import calendar from "./svg/calendar.svg";
import {
  Button,
  Container,
  ErrorBox,
  Input,
  Label,
  NameStyle,
  TANDC,
} from "./styles/InputStyle";

const RegistrationForm: React.FC = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    termsAccepted: false,
    referredBy: {
      friend: false,
      website: false,
      other: false,
    },
  };
  let phoneRegex = /^\d{10}$/;

  const validationSchema = Yup.object({
    firstName: Yup.string().required("This field is Required").min(4),
    lastName: Yup.string().required("This field is Required").min(3),
    dob: Yup.date()
      .required("Required")
      .max(new Date(Date.now() - 567648000000), "Must be 18year or greater"),
    phone: Yup.string().matches(phoneRegex, "Phone number is not valid"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is Required"),
  });
  // console.log(initialValues);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        console.log("form submitted", values);
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <>
          {/* {console.log(formik.values)} */}

          <Form onSubmit={formik.handleSubmit}>
            <h2 style={{ textAlign: "center" }}>Registration Form</h2>
            <NameStyle>
              <Container>
                <Label htmlFor="firstName">1. First Name:</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <ErrorBox>{formik.errors.firstName}</ErrorBox>
                ) : null}
              </Container>
              <Container>
                <Label htmlFor="lastName">2. Last Name:</Label>
                <Input
                  type="text"
                  id="lastName"
                  onBlur={formik.handleBlur}
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <ErrorBox>{formik.errors.lastName}</ErrorBox>
                ) : null}
              </Container>
            </NameStyle>
            <Container>
              <Label htmlFor="dob">3. Date of Birth:</Label>

              <Input
                type="date"
                icon={calendar}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                id="dob"
                name="dob"
                value={formik.values.dob}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <ErrorBox>{formik.errors.dob}</ErrorBox>
              ) : null}
            </Container>
            <Container>
              <Label>4. Telephone*</Label>
              <Input
                id="phone"
                type="phone"
                onBlur={formik.handleBlur}
                icon={telephone}
                placeholder="10 digit mobile number"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <ErrorBox>{formik.errors.phone}</ErrorBox>
              ) : null}
            </Container>
            <Container>
              <Label htmlFor="email">5. Email:</Label>
              <Input
                icon={envelope}
                type="email"
                id="email"
                onBlur={formik.handleBlur}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <ErrorBox>{formik.errors.email}</ErrorBox>
              ) : null}
            </Container>

            <Container>
              <Label>6. Where did you hear about us?</Label>
              <div>
                <Label>
                  <Input
                    onChange={formik.handleChange}
                    type="checkbox"
                    name="referredBy.friend"
                  />
                  Friend
                </Label>
              </div>
              <div>
                <Label>
                  <Input
                    type="checkbox"
                    onChange={formik.handleChange}
                    name="referredBy.website"
                  />
                  Website
                </Label>
              </div>
              <div>
                <Label>
                  <Input
                    type="checkbox"
                    onChange={formik.handleChange}
                    name="referredBy.other"
                  />
                  Other
                </Label>
              </div>
            </Container>
            <Container>
              <TANDC>
                <Input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                />
                <Label htmlFor="termsAccepted">
                  I accept the terms and conditions
                </Label>
                {formik.touched.termsAccepted && formik.errors.termsAccepted ? (
                  <ErrorBox>{formik.errors.termsAccepted}</ErrorBox>
                ) : null}
              </TANDC>
            </Container>

            <Button disabled={!(formik.dirty && formik.isValid)} type="submit">
              Submit
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default RegistrationForm;