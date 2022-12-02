const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);
const throttle = require("lodash.throttle");

const onPlay = function (data) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
};

player.on("timeupdate", throttle(onPlay, 1000));

try {
  const parsedData = JSON.parse(
    localStorage.getItem("videoplayer-current-time")
  );
  player
    .setCurrentTime(parsedData.seconds)
    .then(function (seconds) {
      seconds = parsedData.seconds;
    })
    .catch(function (error) {
      switch (error.name) {
        case "RangeError":
          parsedData.seconds < 0 || parsedData.seconds > parsedData.duration;
          break;
      }
    });
} catch (error) {
  error.name;
  error.message;
}
