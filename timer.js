class Timer {
    constructor(inputTime, startBtn, pauseBtn, callBacks) {
        this.inputTime = inputTime;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if(callBacks) {
            this.onStart = callBacks.onStart;
            this.onTick = callBacks.onTick;
            this.onComplete = callBacks.onComplete;
        }
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.remainingTime);
        }
        this.tick();
        this.interval = setInterval(this.tick, 50);
    }
    pause = () => {
        clearInterval(this.interval);
    }
    tick = () => {
         if (this.remainingTime <= 0) {
            if (this.onComplete) {
                this.onComplete();
            }
            this.pause();
        }
        else {
            this.remainingTime = this.remainingTime - 0.05;
            if(this.onTick) {
                this.onTick(this.remainingTime);
            }
        }
    }
    get remainingTime()  {
       return parseFloat(this.inputTime.value)
    }
    set remainingTime(time) {
        this.inputTime.value = time.toFixed(2);
    }
}