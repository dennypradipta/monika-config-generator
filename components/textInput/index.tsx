import { InputHTMLAttributes } from 'react';

interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label?: string;
}

export default function TextInput({
  label,
  ...inputProps
}: TextInputProps): JSX.Element {
  return (
    <div className="space-y-3">
      {label && (
        <label
          htmlFor={inputProps.id}
          className="text-gray-400 text-sm sm:text-lg">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className="w-full border border-gray-400 rounded-md shadow-md py-3 px-5 text-sm sm:text-lg placeholder-gray-400"
      />
    </div>
  );
}
