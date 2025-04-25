import { useState, useEffect } from 'react';

type Props = {
  text: string;
  delay: number;
};

export default function useTypeWriterEffect({ text, delay }: Props) {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, text, delay]);

  return typedText;
}
