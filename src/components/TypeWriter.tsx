
import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  className?: string;
  delay?: number;
  preserveHtml?: boolean;
}

const TypeWriter = ({ text, className = "", delay = 100, preserveHtml = false }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  if (preserveHtml) {
    return (
      <span
        className={className}
        dangerouslySetInnerHTML={{ __html: displayText }}
      />
    );
  }

  return <span className={className}>{displayText}</span>;
};

export default TypeWriter;
