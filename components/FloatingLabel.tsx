import React, { FC } from 'react';

interface FloatingLabelProps {
  placeholder: string;
  className?: string;
  type: string;
  hasError?: boolean;
  setError?: (value: boolean) => void;
  errorMessage?: string;
  pattern?: RegExp;
  setValue?: (value: string | null) => void;
  value?: string | null;
}

const FloatingLabel: FC<FloatingLabelProps> = ({
  placeholder,
  className,
  type,
  hasError,
  errorMessage,
  pattern,
  setError,
  setValue,
  value
}) => {
  const handleTextChange = (text: string) => {
    if (text !== '') {
      if (setValue) setValue(text);
    } else {
      if (setValue) setValue(null);
    }

    if (setError && pattern) {
      setError(!pattern.test(text));
    }
  };

  return (
    <div className={`floating-label ${className ? className : ''}`}>
      <input
        value={value ? value : ''}
        onChange={(e) => handleTextChange(e.target.value)}
        type={type}
      />
      <label className={value ? 'Active' : ''}>{placeholder}</label>
      {hasError && errorMessage && <span className="error_message">{errorMessage}</span>}
      <style jsx>
        {`
          .floating-label {
            display: flex;
            flex-direction: column;
            min-width: 300px;
            position: relative;

            @media (--small) {
              min-width: 350px;
            }

            @media (--medium) {
              min-width: 400px;
            }

            input {
              width: 100%;
              height: 35px;
              color: var(--white);
              outline: 0;
              border: none;
              border-bottom: 1px solid var(--white);
              background: transparent;
              font-size: 1rem;
              border-radius: 0px;
            }

            label {
              text-transform: uppercase;
              font-size: 14px;
              font-weight: 300;
              color: var(--white);
              pointer-events: none;
              position: absolute;
              transform: translate(0, 10px) scale(1);
              transform-origin: top left;
              transition: all 0.2s ease-out;
            }

            &:focus-within label,
            .Active {
              transform: translate(0, -10px) scale(0.7);
            }

            .error_message {
              font-size: 12px;
              color: var(--red);
              position: absolute;
              bottom: -20px;
              left: 0px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingLabel;
