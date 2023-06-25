import * as yup from 'yup';

export const tableAssignmentValidationSchema = yup.object().shape({
  table_number: yup.number().integer().required(),
  wait_staff_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
