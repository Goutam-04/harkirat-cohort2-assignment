const clock = () => {
  const time = new Date();
//   that >9 is for single digit or double digit like 10 or 3 if 3 it converts into 03
  const hours = time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`;
  const minutes =
    time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`;
  const seconds =
    time.getSeconds() > 9 ? time.getSeconds() : `0${time.getSeconds()}`;
  console.log(`${hours}:${minutes}:${seconds}`);
};

setInterval(clock, 1000);