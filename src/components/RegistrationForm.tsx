import React, { useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import envelope from "./svg/envelope2.svg";
import telephone from "./svg/telephone.svg";
import calendar from "./svg/calendar.svg";
import {
  Button,
  CheckboxLabel,
  Container,
  ErrorBox,
  Input,
  Label,
  NameContainer,
  NameDiv,
  NameStyle,
  SingleCheckBox,
  TANDC,
} from "./styles/InputStyle";
import Address from "./Address";
import { FormParent } from "./styles/FormParent";
import CheckboxComponent from "./CheckboxComponent";

interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  phone: string;
  termsAccepted: boolean;
  referredBy: {
    friend: boolean;
    website: boolean;
    other: boolean;
    otherValue: string;
  };
  address: {
    country: string;
    state: string;
    city: string;
  };
}

const RegistrationForm: React.FC = () => {
  const [location, setLocation] = useState({});
  const initialValues: RegistrationFormValues = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    termsAccepted: false,
    referredBy: {
      friend: false,
      website: false,
      otherValue: "",
      other: false,
    },
    address: {
      country: "",
      state: "",
      city: "",
    },
  };
  let phoneRegex = /^\d{10}$/;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is Required").min(4),
    lastName: Yup.string().required("This field is Required").min(3),
    dob: Yup.date()
      .required("This field is required")
      .max(new Date(Date.now() - 567648000000), "Must be 18year or greater"),
    phone: Yup.string()
      .required("This field is required")
      .matches(phoneRegex, "Phone number is not valid"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is Required"),
    address: Yup.object().shape({
      country: Yup.string().required("Please Select Country"),
      state: Yup.string().required("Please Select State"),
      city: Yup.string().required("Please Select City"),
    }),
    termsAccepted: Yup.bool().oneOf(
      [true],
      "You need to accept the terms and conditions"
    ),
  });
  // console.log(initialValues);

  const handleAddressData = (value: any) => {
    setLocation({ ...value });
    // console.log("enter", location);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        console.log("form submitted", values);
        // resetForm();
      }}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <>
          {/* {console.log(formik.values)} */}

          <Form onSubmit={formik.handleSubmit}>
            <FormParent>
              <h2 style={{ textAlign: "center" }}>Registration Form</h2>

              <NameStyle>
                <Label htmlFor="firstName">1. Name.</Label>
                <NameContainer>
                  <NameDiv>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <ErrorBox>{formik.errors.firstName}</ErrorBox>
                    ) : null}
                  </NameDiv>
                  <NameDiv>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      id="lastName"
                      onBlur={formik.handleBlur}
                      name="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <ErrorBox>{formik.errors.lastName}</ErrorBox>
                    ) : null}
                  </NameDiv>
                </NameContainer>
              </NameStyle>

              <Container>
                <Label htmlFor="dob">3. Date of Birth*:</Label>

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
                <Label htmlFor="email">5. Email*:</Label>
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
                <Address
                  handleAddressData={handleAddressData}
                  handleChange={formik.handleChange}
                  values={formik.values.address}
                  formik={formik}
                />
              </Container>
              <Container>
                <Label mb="1.2vw">6. Where did you hear about us?</Label>
                <div>
                  <CheckboxComponent
                    htmlFor="friend"
                    id="friend"
                    onChange={formik.handleChange}
                    type="checkbox"
                    name="referredBy.friend"
                    label="Friend"
                  />
                </div>
                <div>
                  <CheckboxComponent
                    htmlFor="website"
                    id="website"
                    type="checkbox"
                    onChange={formik.handleChange}
                    name="referredBy.website"
                    label="Website"
                  />
                </div>
                <div>
                  <CheckboxComponent
                    htmlFor="other"
                    id="other"
                    type="checkbox"
                    onChange={formik.handleChange}
                    name="referredBy.other"
                    label="Other"
                  />
                </div>
              </Container>
              {formik.values.referredBy.other !== false ? (
                <Container>
                  <CheckboxComponent
                    type="text"
                    placeholder="Please specify"
                    value={formik.values.referredBy.otherValue}
                    name="referredBy.otherValue"
                    onChange={formik.handleChange}
                    label=""
                  />
                </Container>
              ) : null}
              <Container>
                <TANDC>
                  <label>
                    <SingleCheckBox
                      type="checkbox"
                      //id="termsAccepted"
                      name="termsAccepted"
                      //checked={formik.values.termsAccepted}
                      //value={formik.values.termsAccepted}
                    />
                    I accept the terms and conditions
                  </label>
                  {/* <Label htmlFor="termsAccepted">
                    I accept the terms and conditions
                  </Label> */}
                  {/* <>{console.log(formik.errors)}</> */}
                  {!formik.values.termsAccepted && (
                    <ErrorBox>{formik.errors.termsAccepted}</ErrorBox>
                  )}
                </TANDC>
              </Container>

              <Button
                // disabled={!(formik.dirty && formik.isValid)}
                type="submit"
              >
                Submit
              </Button>
            </FormParent>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default RegistrationForm;
