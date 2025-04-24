
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
    let mounted = true;

    const typeText = async () => {
      while (mounted) {
        // Type the text
        for (let i = 0; i <= text.length; i++) {
          if (!mounted) break;
          await new Promise(resolve => setTimeout(resolve, delay));
          setDisplayText(text.substring(0, i));
        }

        // Wait for 10 seconds before starting again
        if (mounted) {
          await new Promise(resolve => setTimeout(resolve, 10000));
          setDisplayText("");
        }
      }
    };

    typeText();

    return () => {
      mounted = false;
    };
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
