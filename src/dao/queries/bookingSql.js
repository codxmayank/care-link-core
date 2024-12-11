const getBookingsByPatientIdQuery = `
  select * from bookings where patient_id=$1
`;

const createBookingQuery = `
  insert into bookings (patient_id, doctor_id, department_id, booking_date, booking_time)
  values ($1, $2, $3, $4, $5)
`;

export { getBookingsByPatientIdQuery, createBookingQuery };
