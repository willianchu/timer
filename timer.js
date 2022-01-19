const arg = process.argv.slice(2);

const schedules = arg;

const makeBeep = () => {
  process.stdout.write('\x07');
  process.stdout.write('beep!');
  process.stdout.write('\n');
};

const timer = (schedules) => {
  if(schedules.length === 0) {
    return false;
  }
  for (let schedule of schedules) {
    if ((schedule < 1) || isNaN(Number(schedule))) {
      continue;
    } else {
      setTimeout(makeBeep, schedule * 1000);
    }
  }
  return;
};

timer(schedules);
