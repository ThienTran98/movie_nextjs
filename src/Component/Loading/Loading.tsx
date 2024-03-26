import React from "react";
import { ClipLoader } from "react-spinners";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white/[.5] flex items-center justify-center">
      <ClipLoader color="#d63636" loading size={34} speedMultiplier={1} />
    </div>
  );
}
