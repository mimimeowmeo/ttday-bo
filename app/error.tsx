"use client";

import { useEffect } from "react";

interface Error {
  errMessage: string;
}
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
}) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h2 className="display-4 fw-bold">{error?.errMessage}</h2>
        <p className="fs-3">
          {" "}
          <span className="text-danger">Opps!</span> Something went wrong!
        </p>
        {reset && (
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        )}
      </div>
    </div>
  );
}
