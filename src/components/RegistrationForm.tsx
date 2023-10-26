import React from "react";
import { Form, Formik } from "formik";
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
import RadioButtonComponent from "./RadioButtonComponent";

interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  phone: string;
  termsAccepted: boolean;
  toggle: string;
  otherValue: string;
  selectedRadioOption: string;
  address: {
    country: string;
    state: string;
    city: string;
  };
}

const RegistrationForm: React.FC = () => {
  // const [location, setLocation] = useState({});
  const initialValues: RegistrationFormValues = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    termsAccepted: false,
    toggle: "",
    otherValue: "",
    selectedRadioOption: "",
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
    toggle: Yup.array()
      .min(1, "This field is Required")
      .required("This field is Required"),
    selectedRadioOption: Yup.string().required("This field is required"),
  });
  // console.log(initialValues);

  const handleAddressData = (value: any) => {
    // setLocation({ ...value });
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
                <Label htmlFor="dob">2. Date of Birth*:</Label>

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
                <Label htmlFor="email">3. Email*:</Label>
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
                <Label mb="1.2vw">5. Where did you hear about us?</Label>
                {formik.touched.toggle && formik.errors.toggle ? (
                  <ErrorBox>{formik.errors.toggle}</ErrorBox>
                ) : null}
                <div>
                  <CheckboxComponent
                    htmlFor="friend"
                    id="friend"
                    values={formik.values}
                    handleChange={formik.handleChange}
                    type="checkbox"
                    name="toggle"
                    label="Friend"
                  />
                </div>
                <div>
                  <CheckboxComponent
                    htmlFor="website"
                    id="website"
                    type="checkbox"
                    handleChange={formik.handleChange}
                    values={formik.values}
                    name="toggle"
                    label="Website"
                  />
                </div>
                <div>
                  <CheckboxComponent
                    htmlFor="other"
                    id="other"
                    type="checkbox"
                    handleChange={formik.handleChange}
                    values={formik.values}
                    name="toggle"
                    label="Other"
                  />
                </div>
              </Container>
              {formik.values.toggle[0] === "Other" ? (
                <Container>
                  <CheckboxComponent
                    type="text"
                    placeholder="Please specify"
                    value={formik.values.otherValue}
                    name="otherValue"
                    handleChange={formik.handleChange}
                    label=""
                  />
                </Container>
              ) : (
                (formik.values.otherValue = "")
              )}

              <Container>
                <Label mb="1.2vw">6. Where did you see about us?</Label>
                {formik.touched.selectedRadioOption &&
                formik.errors.selectedRadioOption ? (
                  <ErrorBox>{formik.errors.selectedRadioOption}</ErrorBox>
                ) : null}
                <div>
                  <RadioButtonComponent
                    htmlFor="socialmedia"
                    id="socialmedia"
                    values={formik.values}
                    handleChange={formik.handleChange}
                    type="radio"
                    name="selectedRadioOption"
                    label="Social Media"
                  />
                </div>
                <div>
                  <RadioButtonComponent
                    htmlFor="Television"
                    id="Television"
                    type="radio"
                    handleChange={formik.handleChange}
                    values={formik.values}
                    name="selectedRadioOption"
                    label="Television"
                  />
                </div>
                <div>
                  <RadioButtonComponent
                    htmlFor="Poster"
                    id="Poster"
                    type="checkbox"
                    handleChange={formik.handleChange}
                    values={formik.values}
                    name="selectedRadioOption"
                    label="Poster"
                  />
                </div>
              </Container>

              <Container>
                <TANDC>
                  <CheckboxLabel border="none">
                    <SingleCheckBox
                      type="checkbox"
                      //id="termsAccepted"
                      name="termsAccepted"
                      //checked={formik.values.termsAccepted}
                      //value={formik.values.termsAccepted}
                    />
                    I accept the terms and conditions
                  </CheckboxLabel>
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
