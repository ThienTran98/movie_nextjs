import { useAppSelector } from "@/lib/hooks";
import React from "react";
import { ClipLoader } from "react-spinners";

type Props = {};

export default function Loading({}: Props) {
  const isLoading = useAppSelector((state) => {
    return state.loadingReducer.isLoading;
  });
  return (
    isLoading && (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-white/[.5] flex items-center justify-center z-50">
        <ClipLoader color="#d63636" loading size={34} speedMultiplier={1} />
      </div>
    )
  );
}
