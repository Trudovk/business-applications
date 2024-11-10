import React from "react";

interface InputFieldProps {
  type: string;
  placeholder?: string;
  className?: string;
  name?: string;
  value?: string;
  id?: string;
}

export default function InputField({
  type,
  placeholder,
  name,
  value,
  id,
}: InputFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="rounded-md pl-2 border-2"
      name={name}
      value={value}
      id={id}
    />
  );
}
