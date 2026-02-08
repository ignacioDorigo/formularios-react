import { useField } from "formik";

export default function InputPassword(props) {
  const [field, meta] = useField(props.name);
  return (
    <div className="formulario__campo">
      <label className="formulario__label">{props.name}</label>
      <input type="password" {...field} {...props}></input>
      {meta.error && meta.touched && (
        <p className="formulario__error">{meta.error}</p>
      )}
    </div>
  );
}
