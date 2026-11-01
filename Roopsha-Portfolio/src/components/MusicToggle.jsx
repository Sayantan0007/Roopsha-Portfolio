import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const isPlayingRef = useRef(false);
  const intervalRef = useRef(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioCtxRef.current = new AudioContext();

      const masterGain = audioCtxRef.current.createGain();
      masterGain.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
      masterGain.connect(audioCtxRef.current.destination);
      gainNodeRef.current = masterGain;
    }
  };

  const playNote = (freq, duration = 2.5, type = 'sine', gainLevel = 0.12) => {
    if (!audioCtxRef.current || !gainNodeRef.current) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    // Soft attack, warm sustain, gentle release
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.exponentialRampToValueAtTime(gainLevel, now + 0.15);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(noteGain);
    noteGain.connect(gainNodeRef.current);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  };

  const stopMusic = useCallback(() => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      stopMusic();
    };
  }, [stopMusic]);

  const startMusic = () => {
    initAudio();
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    isPlayingRef.current = true;
    setIsPlaying(true);

    // Midnight Chime / Celesta Harp Melody Sequence
    // Romantic chords: Fmaj9 -> Cmaj7 -> Dm9 -> Am9
    const chordProgressions = [
      // Fmaj9 (F3, C4, E4, A4, G5)
      { bass: 174.61, notes: [261.63, 329.63, 440.00, 523.25, 659.25, 783.99] },
      // Cmaj7 (C3, G3, B3, E4, D5)
      { bass: 130.81, notes: [196.00, 246.94, 329.63, 392.00, 587.33, 659.25] },
      // Dm9 (D3, A3, F4, C5, E5)
      { bass: 146.83, notes: [220.00, 349.23, 523.25, 659.25, 440.00, 587.33] },
      // Am9 (A2, E3, C4, G4, B4)
      { bass: 110.00, notes: [164.81, 261.63, 392.00, 493.88, 659.25, 523.25] },
    ];

    let chordIndex = 0;
    let step = 0;

    const playStep = () => {
      if (!isPlayingRef.current) return;

      const currentChord = chordProgressions[chordIndex];

      // Bass drone on first beat
      if (step === 0) {
        playNote(currentChord.bass, 4.0, 'triangle', 0.14);
      }

      // Delicate harp arpeggio note
      const noteFreq = currentChord.notes[step % currentChord.notes.length];
      playNote(noteFreq, 2.2, 'sine', 0.08);

      // Occasional high harmonic shimmer
      if (step === 2 || step === 5) {
        const shimmerFreq = currentChord.notes[(step + 2) % currentChord.notes.length] * 2;
        playNote(shimmerFreq, 3.0, 'sine', 0.04);
      }

      step++;
      if (step >= 6) {
        step = 0;
        chordIndex = (chordIndex + 1) % chordProgressions.length;
      }
    };

    // First trigger immediately
    playStep();
    intervalRef.current = setInterval(playStep, 750);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(newVol, audioCtxRef.current.currentTime);
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-2 group">
      <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2.5 shadow-lg border border-[#BCA5F5]/20 hover:border-[#BCA5F5]/40 transition-all duration-300">
        <button
          onClick={toggleMusic}
          className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#FFF5E8] hover:text-[#BCA5F5] transition-colors focus:outline-none"
          title={isPlaying ? "Pause ambient melody" : "Play ambient melody"}
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-[#BCA5F5] animate-pulse" />
              <span className="hidden sm:inline text-xs tracking-wider uppercase font-sans text-[#FFF5E8]/80">Midnight Air</span>
              {/* Music visualizer bars */}
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 bg-[#BCA5F5] rounded-full animate-[bounce_0.6s_ease-in-out_infinite] h-2.5" />
                <span className="w-0.5 bg-[#F2B8D0] rounded-full animate-[bounce_0.9s_ease-in-out_infinite_0.1s] h-3" />
                <span className="w-0.5 bg-[#E8D6A5] rounded-full animate-[bounce_0.7s_ease-in-out_infinite_0.2s] h-2" />
              </div>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-[#FFF5E8]/60" />
              <span className="hidden sm:inline text-xs tracking-wider uppercase font-sans text-[#FFF5E8]/70">Play Melody</span>
              <Sparkles className="w-3 h-3 text-[#E8D6A5] animate-spin" style={{ animationDuration: '6s' }} />
            </>
          )}
        </button>

        {/* Volume slider reveal on hover */}
        <div className="w-0 overflow-hidden group-hover:w-16 transition-all duration-300 flex items-center">
          <input
            type="range"
            min="0"
            max="0.8"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-14 h-1 bg-[#17132D] accent-[#BCA5F5] rounded-lg cursor-pointer"
            aria-label="Volume slider"
          />
        </div>
      </div>
    </div>
  );
}
