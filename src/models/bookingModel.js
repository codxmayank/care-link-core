export class Booking {
  constructor({
    booking_id,
    patient_id,
    doctor_id,
    department_id,
    booking_date,
    booking_time,
    status
  }) {
    this.bookingId = booking_id;
    this.patientId = patient_id;
    this.doctorId = doctor_id;
    this.departmentId = department_id;
    this.bookingDate = booking_date;
    this.bookingTime = booking_time;
    this.status = status;
  }
}

export default Booking;
