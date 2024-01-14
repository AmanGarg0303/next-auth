"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch((err) => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backbuttonHref="/auth/login"
    >
      <div className="flex items-center justify-center w-full">
        {!success && !error && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-loader animate-slow-spin"
          >
            <line x1="12" x2="12" y1="2" y2="6" />
            <line x1="12" x2="12" y1="18" y2="22" />
            <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
            <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
            <line x1="2" x2="6" y1="12" y2="12" />
            <line x1="18" x2="22" y1="12" y2="12" />
            <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
            <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
          </svg>
        )}

        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
