let Getnew = () => {
  fetch("https://dog.ceo/api/breeds/image/random", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      let Display = document.querySelector(".image");
      Display.setAttribute("src", data.message);
    })
    .catch((error) => {
      console.log(error);
    });
};
