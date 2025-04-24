
import React, { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  whiteText?: boolean;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  text, 
  delay = 100, 
  className = "",
  whiteText = false 
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span 
      className={`${className} ${whiteText ? 'text-white' : ''}`}
    >
      {currentText}
    </span>
  );
};

export default TypeWriter;
