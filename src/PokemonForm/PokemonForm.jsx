import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

let userSchema = yup.object().shape({
  pokemonName: yup.string().max(15).required(),
});

const initialValues = {
  pokemonName: "",
};

export const PokemonForm = ({ onSubmit }) => {
    const handleForm = (values, { resetForm }) => {
      onSubmit(values.pokemonName.trim());
      resetForm();
    };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleForm}
    >
      <Form autoComplete="off">
        <label htmlFor="pokemonName">
          Choce your Pokemon!
          <Field as="textarea"  name="pokemonName" />
          <ErrorMessage name="pokemonName" render={()=> <div>PLEASE ENTER NAME!!!</div>} />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
