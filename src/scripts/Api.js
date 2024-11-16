class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "d5ee094d-65cf-4d3a-8db9-806babebd6bb",
      },
    }).then((res) => res.json());
  }

  // other methods for working with the API
}

export default Api;
