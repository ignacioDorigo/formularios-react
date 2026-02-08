import * as Yup from "yup";

export const validationSchema = Yup.object({
  nombre: Yup.string()
    .required("El nombre es obligatorio")
    .min(2, "Mínimo 2 caracteres"),

  email: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),

  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(6, "Mínimo 6 caracteres"),

  edad: Yup.number()
    .typeError("La edad debe ser un número")
    .min(18, "Debés ser mayor de 18")
    .required("La edad es obligatoria"),

  telefono: Yup.string()
    .required("El teléfono es obligatorio")
    .matches(/^[0-9\s-]+$/, "Solo números"),

  genero: Yup.string().required("Seleccioná un género"),
});
