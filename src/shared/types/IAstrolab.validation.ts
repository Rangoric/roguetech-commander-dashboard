import * as yup from "yup";

export const astrolabValidation = yup.object({
  Description: yup.object({
    Id: yup.string().required(),
    Name: yup.string().required(),
  }),
  Position: yup.object({
    x: yup.number().required(),
    y: yup.number().required(),
    z: yup.number().required(),
  }),
});
