import APIService from '@services/api';
import loaderActions from '@store/actions/loader';
import modalActions from '@store/actions/modal';
// import routerActions from "@store/actions/router";

export default (values) => {
  loaderActions.showLoader();

  APIService.post('v1/registration', values)
    .then((response) => {
      console.log('resp: ', response);
    })
    .finally(() => {
      // routerActions.calculateRoutes();
      // loaderActions.hideLoader();
    });
};
