
export default class TimePlayer {
    private _startTime: number | null;
    private _pausedTime: number;
    private _pausedAt: number | null;
  
    constructor() {
      this._startTime = null;
      this._pausedTime = 0;
      this._pausedAt = null;
    }
  
    getCurrentTime(): number {
      if (this._startTime === null) {
        return 0; // Return 0 if not started
      }
  
      let currentTime = Date.now(); // Use Date.now() for better performance
  
      if (this._pausedAt !== null) {
        currentTime = this._pausedAt; // Use the paused time if paused
      }
  
      return currentTime - this._startTime - this._pausedTime;
    }
  
    start(): void {
      if (this._startTime === null) {
        this._startTime = Date.now();
        this._pausedTime = 0;
        this._pausedAt = null;
      } else if (this._pausedAt !== null) {
        // Resume from pause
        this._pausedTime += Date.now() - this._pausedAt;
        this._pausedAt = null;
      }
    }
  
    stop(): void {
      this._startTime = null;
      this._pausedTime = 0;
      this._pausedAt = null;
    }
  
    pause(): void {
      if (this._startTime !== null && this._pausedAt === null) {
        this._pausedAt = Date.now();
      }
    }
  }