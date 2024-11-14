const createUserQuery = `
  INSERT INTO users (name, age, email, phone, password)
  VALUES ($1, $2, $3, $4, $5)
`;

const fetchUserByIdQuery = `
  SELECT * from users where id=$1
`;

export { createUserQuery, fetchUserByIdQuery };
