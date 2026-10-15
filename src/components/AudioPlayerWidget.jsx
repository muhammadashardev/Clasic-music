import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AudioPlayerWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const intervalRef = useRef(null);

  // Play Beethoven's 7th Allegretto harmonic progression with Web Audio API
  const startClassicalAudio = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 1.5);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Reverb simulation using delay & feedback
      const delay = ctx.createDelay();
      delay.delayTime.value = 0.28;
      const delayGain = ctx.createGain();
      delayGain.gain.value = 0.35;
      delay.connect(delayGain);
      delayGain.connect(delay);
      delayGain.connect(masterGain);

      // Beethoven Allegretto chord notes (A minor, E major, C major, F major chord progression)
      const chordNotes = [
        [220.0, 261.63, 329.63, 440.0], // Am (A3, C4, E4, A4)
        [196.0, 246.94, 293.66, 392.0], // G/B (G3, B3, D4, G4)
        [174.61, 220.0, 261.63, 349.23], // F (F3, A3, C4, F4)
        [164.81, 246.94, 329.63, 415.3], // E7 (E3, B3, E4, G#4)
      ];

      let chordIndex = 0;

      const playChord = () => {
        if (!ctx || ctx.state === 'closed') return;
        const currentChord = chordNotes[chordIndex % chordNotes.length];
        chordIndex++;

        currentChord.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const noteGain = ctx.createGain();

          // Warm violin/cello sawtooth with lowpass filter
          osc.type = idx === 0 ? 'sawtooth' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Warm acoustic filter
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(800 + idx * 250, ctx.currentTime);

          noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
          noteGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.4);
          noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.8);

          osc.connect(filter);
          filter.connect(noteGain);
          noteGain.connect(masterGain);
          noteGain.connect(delay);

          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 4.0);
        });
      };

      playChord();
      intervalRef.current = setInterval(playChord, 3600);
      setIsPlaying(true);
    } catch (e) {
      console.error('Audio playback initialization failed', e);
    }
  };

  const stopClassicalAudio = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.exponentialRampToValueAtTime(
        0.0001,
        ctx.currentTime + 0.8
      );
      setTimeout(() => {
        try {
          ctx.close();
        } catch (_) {}
      }, 900);
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopClassicalAudio();
    } else {
      startClassicalAudio();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (_) {}
      }
    };
  }, []);

  return (
    <motion.button
      onClick={toggleAudio}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 shadow-xl ${
        isPlaying
          ? 'border-[#F5D061] bg-[#1a140b]/90 text-[#F5D061] shadow-[0_0_25px_rgba(245,208,97,0.35)]'
          : 'border-white/20 bg-black/60 text-white/70 hover:border-[#D4AF37] hover:text-[#F4EFE6]'
      }`}
      aria-label={isPlaying ? 'Pause Symphony preview' : 'Play Symphony preview'}
    >
      {isPlaying ? (
        <>
          <div className="flex items-center gap-[3px] h-3.5">
            <span className="w-0.5 bg-[#F5D061] rounded-full animate-[pulseSlow_1s_infinite] h-3.5" />
            <span className="w-0.5 bg-[#F5D061] rounded-full animate-[pulseSlow_1.4s_infinite] h-2" />
            <span className="w-0.5 bg-[#F5D061] rounded-full animate-[pulseSlow_0.8s_infinite] h-4" />
            <span className="w-0.5 bg-[#F5D061] rounded-full animate-[pulseSlow_1.2s_infinite] h-2.5" />
          </div>
          <Volume2 className="h-4 w-4 text-[#F5D061]" />
          <span className="font-cinzel text-[10px] font-bold tracking-widest uppercase">
            Symphony Live
          </span>
        </>
      ) : (
        <>
          <Music className="h-4 w-4 text-[#E5B842]" />
          <VolumeX className="h-4 w-4 text-white/60" />
          <span className="font-cinzel text-[10px] font-bold tracking-widest uppercase hidden sm:inline">
            Listen Theme
          </span>
        </>
      )}
    </motion.button>
  );
}
