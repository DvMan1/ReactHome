import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

let userSchema = yup.object().shape({
  login: yup.string().email().required(),
  password: yup.string().min(3).max(10).required(),
  massage: yup.string().max(15).required(),
});

const initialValues = {
  login: "",
  password: "",
  massage: "",
};

export const LoginForm = ({ onSubmit }) => {
    const handleForm = (values, { resetForm }) => {
      onSubmit(values.massage);
      resetForm();
    };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleForm}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Field type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <label htmlFor="massage">
          Massage
          <Field as="textarea"  name="massage" />
          <ErrorMessage name="massage" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik >
  );
};
