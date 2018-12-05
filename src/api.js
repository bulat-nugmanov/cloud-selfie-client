// @flow

import axios from 'axios';
import type { Response, Request } from "./types";

const API_PATH = "https://us-central1-yvr-rainmakers2.cloudfunctions.net/selfie-recommendations";

export const getRecommendations = (request: Request): Promise<Response> => {

  return new Promise((resolve, reject) => {

    axios.request({

      method: 'get',
      data: request,
      url: API_PATH

    }).then(response => {
      resolve(response.data);

    }).catch(error => {
      console.log(error);
      reject();

    })
  });


};