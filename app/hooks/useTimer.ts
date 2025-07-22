import { useState, useRef, useEffect, useCallback } from "react";

export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
    }
  }, [isRunning]);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setSeconds(0);
    setIsRunning(false);
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevElapsedSeconds) => prevElapsedSeconds + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  return {seconds, isRunning, start, stop, reset};
}