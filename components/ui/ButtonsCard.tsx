"use client";
import React from "react";

export const ButtonsCard = ({
  children,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button className="mt-10 w-[15vw] px-8 py-2 rounded-full relative bg-lime-400 hover:bg-black hover:text-white text-black text-sm hover:shadow-2xl hover:shadow-lime-400/[1] transition duration-200 border border-lime-400 hover:border-transparent">
      <span className="relative z-20">{children}</span>
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px shadow-xl bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
    </button>
  );
};
