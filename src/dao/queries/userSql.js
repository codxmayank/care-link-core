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

const patchUserByIdQuery = `
  update users
  set
    name=$2,
    age=$3,
    email=$4,
    phone=$5
  where
    id=$1 and is_active=true
`

const deactivateUserByIdQuery = `
  update users
  set
    is_active=false
  where
    id=$1 and is_active=true
`

export { createUserQuery, fetchUserByIdQuery, patchUserByIdQuery, deactivateUserByIdQuery };
