// @flow

import axios from 'axios';

const API_PATH = "https://us-central1-yvr-rainmakers2.cloudfunctions.net/selfie-recommendations";

type Feature =
  | "art"
  | "tourism"
  | "food"
  | "cars"
  | "nature";

type Location = {
  lat: number,
  lot: number
};

type Request = {
  location: Location,
  features: Feature[]
};

export const getRecommendations = (request: Request) => {

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