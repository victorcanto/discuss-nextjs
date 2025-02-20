"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
import React from "react";

interface FormButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: Readonly<FormButtonProps>) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}
