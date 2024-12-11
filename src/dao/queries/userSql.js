const createUserQuery = `
  INSERT INTO patients (name, age, email, phone, password)
  VALUES ($1, $2, $3, $4, $5)
`;

const fetchUserByIdQuery = `
  SELECT
    patient_id, name, age, email, phone
  from patients
  where patient_id=$1 and is_active=true
`;

const fetchUserByEmailQuery = `
  SELECT
    patient_id, name, age, email, phone, password
  from patients
  where email=$1 and is_active=true
`;

const patchUserByIdQuery = `
  update patients
  set
    name=$2,
    age=$3,
    email=$4,
    phone=$5
    updated_at = CURRENT_TIMESTAMP
  where
    patient_id=$1 and is_active=true
`;

const deactivateUserByIdQuery = `
  update patients
  set
    is_active=false
    updated_at = CURRENT_TIMESTAMP
  where
    patient_id=$1 and is_active=true
`;

export {
  createUserQuery,
  fetchUserByIdQuery,
  fetchUserByEmailQuery,
  patchUserByIdQuery,
  deactivateUserByIdQuery
};
