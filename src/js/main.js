function removeTitleAndCalcDays() {
  let title = document.querySelector("h1");
  let calc_input = document.querySelector(".calc_input");
  let dayes = document.querySelector(".dayes");
  let icons = document.querySelector(".links");
  title.addEventListener("click", () => {
    title.style.display = "none";
    calc_input.style.display = "flex";
    calc_input.style.margin = "16rem auto";
    dayes.style.display = "flex";
    icons.style.display = "flex";
    calc_input.addEventListener("change", function () {
      calc_age = calc_input.value * 365;
      dayes.innerHTML = `Your Days old is: ${calc_age} `;
      let speech = new SpeechSynthesisUtterance(calc_age);
      speechSynthesis.speak(speech)

      if (calc_age <= "-365") {
        alert(
          "Well, you're not even born yet😂🤣🤰, Try writing the age of someone who's here with us"
        );
        window.location.reload();
      }
    });
  });
}
removeTitleAndCalcDays();

function icons() {
  let facebook_icon = document.querySelector(".links :nth-child(1)");
  let twitter_icon = document.querySelector(".links :nth-child(2)");
  let github_icon = document.querySelector(".links :nth-child(3)");
  let linkedin_icon = document.querySelector(".links :nth-child(4)");
  facebook_icon.onclick = function () {
    window.open("https://www.facebook.com/hamdy.elgokar.5");
  };
  twitter_icon.onclick = function () {
    window.open("https://twitter.com/HamdyMohamedd1");
  };
  github_icon.onclick = function () {
    window.open("https://github.com/Hamdy-Mohamed");
  };
  linkedin_icon.onclick = function () {
    window.open("https://www.linkedin.com/in/hamdy-abdal-majeed-b67b32246/");
  };
}

icons();
