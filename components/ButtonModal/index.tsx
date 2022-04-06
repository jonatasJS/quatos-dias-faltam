import * as React from "react";

interface TypesButtonModal {
  onClick: () => void;
  className: string;
  children: React.ReactNode;
}

export default function ButtonModal({
  onClick,
  className,
  children
}: TypesButtonModal) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      data-mdb-toggle="modal"
      data-mdb-target="#exampleModal"
    >
      {children}
    </button>
  );
}