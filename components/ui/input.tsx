"use client";
import React from 'react';

interface InputProps {
  id: string;
  placeholder?: string;
}

export default function Input({ id, placeholder }: InputProps) {
  return <input id={id} placeholder={placeholder} className="w-full p-2 border border-[var(--border)] rounded-md" />;
}
