
import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  className?: string;
  delay?: number;
}

const TypeWriter = ({ text, className = "", delay = 100 }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
};

export default TypeWriter;
