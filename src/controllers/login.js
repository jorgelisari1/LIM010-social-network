// Importamos las funciones que vamos a usar.
import loginPage from '../views/login.js';
import {
  login, addUserToFirestore, registerUserGoogle, registerUserFacebook,
} from '../models/users.js';
import errorController from './errors.js';
import { redirect } from '../utils.js';

export default () => {
  // Esta es nuestra vista del login.
  loginPage();
  // Aquí logueamos los usuarios creados. 
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await login(email, password);
      redirect('home');
    } catch (error) {
      errorController(error.code);
    }
  });

 // Aquí nos logueamos con google 
  const clickGoogle = document.getElementById('google');
  clickGoogle.addEventListener('click', async () => {
    const {
      name, email, uid, error, code,
    } = await registerUserGoogle();
    if (error) {
      errorController(code);
    } else {
      await addUserToFirestore(email, name, uid);
      redirect('home');
    }
  });

  // Aquí nos logueamos con facebook 
  const clickFacebook = document.getElementById('fb');
  clickFacebook.addEventListener('click', async () => {
    const {
      name, email, uid, error, code,
    } = await registerUserFacebook();
    if (error) {
      errorController(code);
    } else {
      await addUserToFirestore(email, name, uid);
      redirect('home');
    }
  });
};
