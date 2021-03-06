export function PostData(type, userData) {
  let BaseURL = "http://localhost/bizlogic/api/index.php";
  return new Promise((resolve, reject) => {
    fetch(BaseURL + "?tp=" + type, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) =>
        response.json().then((res) => {
          resolve(res);
        })
      )
      .catch((error) => {
        reject(error);
      });
  });
}
