// @flow

export type Feature =
  | "art"
  | "tourism"
  | "food"
  | "cars"
  | "nature";

type Location = {
  lat: number,
  lot: number
};

export type FeatureScore = {
  feature: Feature,
  score: number
}

export type Recommendation = {
  location: Location,
  featureScores: FeatureScore[]
}

export type ReduxState = {
  fetching: boolean,
  recommendations: Recommendation,
  error: any
}