
import { Howl } from 'howler';

export default class SoundPlayer {
    private _sound: Howl | null;
    private _startTime: number | null;
    private _pausedTime: number;
    private _pausedAt: number | null;
    private _soundDuration: number;

    constructor(soundPath: string) {
        this._sound = null;
        this._startTime = null;
        this._pausedTime = 0;
        this._pausedAt = null;
        this._soundDuration = 0;
        
        // Create and load the Howl sound object
        this._loadSound(soundPath);
    }

    /**
     * Loads the sound file and sets up necessary event handlers
     * @param soundPath Path to the audio file
     */
    private _loadSound(soundPath: string): void {
        this._sound = new Howl({
            src: [soundPath],
            format: ['opus'],
            onload: () => {
                // Store the duration once the sound is loaded
                if (this._sound) {
                    this._soundDuration = this._sound.duration() * 1000; // Convert to milliseconds
                }
            }
        });
    }

    /**
     * Gets the current playback time in milliseconds
     * Mirrors the TimePlayer API but uses sound position
     */
    getCurrentTime(): number {
        if (this._startTime === null || !this._sound) {
            return 0; // Return 0 if not started or sound not loaded
        }

        let currentTime = Date.now();

        if (this._pausedAt !== null) {
            currentTime = this._pausedAt; // Use the paused time if paused
        }

        // Calculate the elapsed time since start, accounting for pauses
        const elapsedTime = currentTime - this._startTime - this._pausedTime;
        
        // Return the smaller of the elapsed time or sound duration to prevent
        // returning times longer than the sound itself
        return Math.min(elapsedTime, this._soundDuration);
    }
    jumpTo(timeMs: number): void {
        if (!this._sound) return;
        
        // Make sure the time is within the sound's duration
        const validTime = Math.max(0, Math.min(timeMs, this._soundDuration));
        
        // Convert from milliseconds to seconds for Howler's seek method
        this._sound.seek(validTime / 1000);
                
        // Update our time tracking
        if (this._startTime !== null) {
          const currentTime = Date.now();
          this._startTime = currentTime - validTime - this._pausedTime;
          
          // If we were paused, update the pause time to the new position
          if (this._pausedAt !== null) {
            this._pausedAt = this._startTime + validTime + this._pausedTime;
          }
        }
      }
    /**
     * Starts or resumes playback of the sound
     */
    start(): void {
        if (!this._sound) return;

        if (this._startTime === null) {
            // First start
            this._startTime = Date.now();
            this._pausedTime = 0;
            this._pausedAt = null;
            this._sound.play();
        } else if (this._pausedAt !== null) {
            // Resume from pause
            this._pausedTime += Date.now() - this._pausedAt;
            this._pausedAt = null;
            this._sound.play();
        }
    }

    /**
     * Stops playback and resets all timers
     */
    stop(): void {
        if (!this._sound) return;

        this._sound.stop();
        this._startTime = null;
        this._pausedTime = 0;
        this._pausedAt = null;
    }

    /**
     * Pauses playback and records the pause time
     */
    pause(): void {
        if (!this._sound) return;

        if (this._startTime !== null && this._pausedAt === null) {
            this._pausedAt = Date.now();
            this._sound.pause();
        }
    }

    /**
     * Returns the total duration of the loaded sound in milliseconds
     */
    getDuration(): number {
        return this._soundDuration;
    }

    /**
     * Checks if the sound has been loaded
     */
    isLoaded(): boolean {
        return this._sound !== null && this._sound.state() === 'loaded';
    }

    /**
     * Unloads the sound to free memory
     */
    unload(): void {
        if (this._sound) {
            this._sound.unload();
            this._sound = null;
        }
    }
}