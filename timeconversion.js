/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/

const changePmToMilitary = (string) => {
  const split = string.split(":");
  const change = split[2].includes("PM");
  const hour = split[0];
  const minutes = split[1];
  const seconds = split[2].slice(0, 2);

  const pmChange =
    change && +hour === 12
      ? `${hour}:${minutes}:${seconds}`
      : `${+hour + 12}:${minutes}:${seconds}`;

  return pmChange.toString();
};
const changeAmToMilitary = (string) => {
  const split = string.split(":");
  const change = split[2].includes("PM");
  const hour = split[0];
  const minutes = split[1];
  const seconds = split[2].slice(0, 2);

  const amChange =
    !change && +hour === 12
      ? `${+hour - 12}0:${minutes}:${seconds}`
      : `${hour}:${minutes}:${seconds}`;

  return amChange.toString();
};

function timeConversion(s) {
  const change = s.includes("PM");
  const string = s;

  return change ? changePmToMilitary(string) : changeAmToMilitary(string);
}

const am = "1:01:00AM";
const pm = "1:01:00PM";

const output1 = timeConversion(am);
const output2 = timeConversion(pm);

console.log("am:", output1, "pm:", output2);
