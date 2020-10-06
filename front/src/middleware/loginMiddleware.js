import axios from 'axios';
import Cookies from 'universal-cookie';

import { LOGIN_SUBMIT, loginSuccess, loginError, CHECK_AUTH, DISCONNECT_USER } from '../actions/user';

const cookies = new Cookies();

// Importation des actions

const loginMiddleware = (store) => (next) => (action) => {
  // En premier, on laisse passer l'action pour ne pas bloquer l'exécution du script.
  next(action);

  // Ensuite, on vérifie l'action qu'on a reçu pour y répondre correctement.
  switch (action.type) {
    default:
      break;

    // On demande à l'API si l'utilisateur présent sur le site est déjà connecté ou non
    case CHECK_AUTH:
      axios({
        method: 'get',
        url: 'http://ec2-23-20-252-110.compute-1.amazonaws.com/api/user',
        header: {
          Authorization: `Bearer ${cookies.get('token')}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    // On reçois la demande de Login et on fait une demande de vérification vers l'API
    case LOGIN_SUBMIT: {
      console.log('login submitted (loginMiddleware)');
      // TODO : Réaliser l'appel axios
      // Si le login réussi -> dispatch(loginSuccess());
      // Si le login échoue -> dispatch(loginError());
      // const data = {
      //   email: store.getState().user.formData.email,
      //   password: store.getState().user.formData.password,
      // };

      axios({
        method: 'post',
        url: 'http://ec2-23-20-252-110.compute-1.amazonaws.com/api/login_check',
        data: {
          username: store.getState().user.formData.email,
          password: store.getState().user.formData.password,
        },
      })
        .then((response) => {
          // TODO : Ici il ne faut pas accéder à response.config. Il faut se servir du token généré pour accéder ensuite aux
          // TODO : Données utilisateur associées.
          const userToken = response.data;
          cookies.set('token', userToken, { path: '/' });
          store.dispatch(loginSuccess(response.config.data));
        })
        .catch((error) => {
          store.dispatch(loginError());
          console.log(error);
        });
      break;
    }
  }
};

export default loginMiddleware;
