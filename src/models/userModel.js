class User {
  constructor({ id, name, age, email, phone }) {
    this.userId = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
  }
}

export class UserData {
  constructor({ id, name, age, email, phone, password }) {
    this.userId = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
}

export default User;
