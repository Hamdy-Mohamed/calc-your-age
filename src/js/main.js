function removetitle() {
  let title = document.querySelector("h1");
  let calc_input = document.querySelector(".calc_input");
  let dayes = document.querySelector(".dayes");
  title.addEventListener("click", () => {
    title.style.display = "none";
    calc_input.style.display = "flex";
    calc_input.style.margin = "20rem auto";
    dayes.style.display = "flex";
    calc_input.addEventListener("change", function () {
      calc_age = calc_input.value * 365;
      dayes.innerHTML = `Your Days old is: ${calc_age} `;
      if (calc_age == "-365") {
        alert(
          "Well, you're not even born yet😂🤣🤰, Try writing the age of someone who's here with us"
        );
        window.location.reload();
      }
    });
  });
}
removetitle();
