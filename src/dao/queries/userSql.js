const createUserQuery = `
  INSERT INTO users (name, age, email, phone, password)
  VALUES ($1, $2, $3, $4, $5)
`;

const fetchUserByIdQuery = `
  SELECT
    id, name, age, email, phone
  from users
  where id=$1 and is_active=true
`;

const fetchUserByEmailQuery = `
  SELECT
    id, name, age, email, phone, password
  from users
  where email=$1 and is_active=true
`;

const patchUserByIdQuery = `
  update users
  set
    name=$2,
    age=$3,
    email=$4,
    phone=$5
    updated_at = CURRENT_TIMESTAMP
  where
    id=$1 and is_active=true
`;

const deactivateUserByIdQuery = `
  update users
  set
    is_active=false
    updated_at = CURRENT_TIMESTAMP
  where
    id=$1 and is_active=true
`;

export {
  createUserQuery,
  fetchUserByIdQuery,
  fetchUserByEmailQuery,
  patchUserByIdQuery,
  deactivateUserByIdQuery
};
