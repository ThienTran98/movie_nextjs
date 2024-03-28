import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function NotFoundPage({}: Props) {
  const router = useRouter();

  const handleClickGoHome = () => {
    router.push(`/`);
  };
  const handleClickGoBack = () => {
    router.back();
  };

  return (
    <div>
      <Header />
      <div className="text-center flex flex-col items-center justify-center py-10">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
        <p className="mb-4 text-lg text-gray-600">
          Oops! Looks like you're lost.
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
        <p className="mt-4 text-gray-600">
          Let's get you back
          <button
            onClick={handleClickGoHome}
            className="text-blue-500 hover:opacity-80 hover:text-white"
          >
            Go home
          </button>
          <span className="mx-1">or</span>
          <button
            onClick={handleClickGoBack}
            className="text-blue-500 hover:opacity-80 hover:text-white"
          >
            Go back
          </button>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
