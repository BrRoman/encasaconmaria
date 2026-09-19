"use client";

import { useSearchParams } from "next/navigation";

export default function Message() {
  const params = useSearchParams();

  return params.get("status") === "success" ? (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 text-center rounded relative m-4">
      <p>¡Enhorabuena! Su mensaje fue enviado con éxito.</p>
      <p>Nos pondremos en contacto con Usted lo antes posible.</p>
    </div>
  ) : null;
}
