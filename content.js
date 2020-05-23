console.log("Extension working...");

const interval = setInterval(() => {
  const header = document.querySelector("._3Kxus");
  if (header) {
    clearInterval(interval);

    handleSpeed(header);
    handleVolume(header);
  }
}, 1000);

const handleVolume = (header) => {
  const block = document.createElement("div");
  const minusButton = document.createElement("button");
  const actualVolume = document.createElement("input");
  const plusButton = document.createElement("button");
  const muteButton = document.createElement("button");
  block.appendChild(minusButton);
  block.appendChild(actualVolume);
  block.appendChild(plusButton);
  block.appendChild(muteButton);
  header.appendChild(block);

  block.classList.add("controller");
  minusButton.classList.add("customButton");
  actualVolume.classList.add("volInput");
  actualVolume.readOnly = true;
  actualVolume.setAttribute("type", "number");
  plusButton.classList.add("customButton");
  muteButton.classList.add("muteButton");

  let volume = 100;

  minusButton.innerHTML = "-";
  actualVolume.valueAsNumber = `${volume}`;
  plusButton.innerHTML = "+";
  muteButton.innerHTML = "Mute";

  minusButton.addEventListener("click", (e) => {
    if (volume > 0) {
      volume -= 10;
      actualVolume.valueAsNumber = volume;
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio) => {
        console.log("New Volume: " + actualVolume.valueAsNumber / 100);
        audio.volume = actualVolume.valueAsNumber / 100;
      });
    }
  });

  plusButton.addEventListener("click", (e) => {
    if (volume < 100) {
      volume += 10;
      actualVolume.valueAsNumber = volume;
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio) => {
        console.log("New Volume: " + actualVolume.valueAsNumber / 100);
        audio.volume = actualVolume.valueAsNumber / 100;
      });
    }
  });

  muteButton.addEventListener("click", (e) => {
    if (volume !== 0) {
      volume = 0;
      actualVolume.valueAsNumber = volume;
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio) => {
        console.log("New Volume: " + 0);
        audio.volume = 0;
      });
    }
  });
};

const handleSpeed = (header) => {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");
  const option4 = document.createElement("option");
  const option5 = document.createElement("option");
  const option6 = document.createElement("option");
  const option7 = document.createElement("option");

  const select = document.createElement("select");

  option1.setAttribute("value", "0.25");
  option1.innerHTML = "0.25x";
  select.appendChild(option1);

  option2.setAttribute("value", "0.5");
  option2.innerHTML = "0.5x";
  select.appendChild(option2);

  option3.setAttribute("value", "1");
  option3.innerHTML = "1x";
  select.appendChild(option3);

  option4.setAttribute("value", "1.5");
  option4.innerHTML = "1.5x";
  select.appendChild(option4);

  option5.setAttribute("value", "2");
  option5.innerHTML = "2x";
  select.appendChild(option5);

  option6.setAttribute("value", "2.5");
  option6.innerHTML = "2.5x";
  select.appendChild(option6);

  option7.setAttribute("value", "3");
  option7.innerHTML = "3x";
  select.appendChild(option7);

  select.classList.add("multiSpeed");
  select.selectedIndex = 2;

  header.appendChild(select);

  select.addEventListener("change", () => {
    const audios = document.querySelectorAll("audio");
    audios.forEach((audio) => {
      audio.playbackRate = select.value;
    });
  });
};
