export const fetchRecommendations = (request) => {
  // todo
};

export const fetchSuccess = (recommendations) => ({
  type: 'SUCCESS',
  recommendations
});

export const fetchError = (error) => ({
  type: "ERROR",
  error
});

export const fetchPending = () => ({
  type: "PENDING"
});