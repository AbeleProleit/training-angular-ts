import { Component } from '@angular/core';

@Component({
  selector: 'pl-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  private max: number = 100;
  private counter: number = 0;
  private incrementStep = 5;
  private intervalId: number | undefined;

  get progress(): number {
    return this.counter;
  }

  private increment(): boolean {
    let maxReached = false;
    this.counter += this.incrementStep;
    if (this.counter > this.max) {
      this.counter = this.max;
      maxReached = true;
    }
    return maxReached;
  }

  manualIncrement(): number {
    this.increment();
    return this.counter;
  }

  startTimer() {
    if (this.intervalId) this.stopTimer();
    this.intervalId = window.setInterval(() => {
      if (this.increment()) this.stopTimer();
    }, 300);
  }
  stopTimer() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
