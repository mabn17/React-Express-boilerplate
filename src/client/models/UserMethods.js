import axios from 'axios';

export const registerUser = newUser => axios
  .post('api/register', {
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    email: newUser.email,
    password: newUser.password
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

export const loginUser = user => axios
  .post('api/login', {
    email: user.email,
    password: user.password
  })
  .then((res) => {
    localStorage.setItem('usertoken', res.data);
    console.log(res.data);
    return res.data;
  })
  .catch((err) => {
    console.log(err);
  });
