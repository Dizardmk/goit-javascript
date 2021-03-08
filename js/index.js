class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerRef = document.querySelector(selector);
    this.daysRef = this.timerRef.querySelector('span[data-value="days"]');
    this.hoursRef = this.timerRef.querySelector('span[data-value="hours"]');
    this.minsRef = this.timerRef.querySelector('span[data-value="mins"]');
    this.secsRef = this.timerRef.querySelector('span[data-value="secs"]');

    let timerId = setInterval(() => {
      const time = this.targetDate - new Date();
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

      this.daysRef.textContent = `${days}`;
      this.hoursRef.textContent = `${hours}`;
      this.minsRef.textContent = `${mins}`;
      this.secsRef.textContent = `${secs}`;

      if (time < 1) {
        clearInterval(timerId);
      }

      function pad(value) {
        return String(value).padStart(2, '0');
      }
    }, 1000);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
