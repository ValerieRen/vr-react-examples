export const checkImageExistenceByIndex = (url) => {
  return fetch(url, {
    method: "get"
  })
    .then((res) => {
      return res.status === 200;
    })
    .catch((error) => {
      console.log("error", error);
    })
};
