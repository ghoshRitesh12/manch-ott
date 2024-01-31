import { Suspense, type PropsWithChildren } from "react";
import {
  ErrorBoundary,
  type FallbackProps,
  type ErrorBoundaryPropsWithRender,
} from "react-error-boundary";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

type ErrorDetails = Parameters<
  Extract<ErrorBoundaryPropsWithRender["onReset"], (details: any) => void>
>[0];

type ErrorResetFn = Parameters<
  Extract<
    Parameters<typeof QueryErrorResetBoundary>[0]["children"],
    (value: any) => React.ReactNode
  >
>[0]["reset"];

type SuspenseErrorBoundaryProps = PropsWithChildren<{
  errorFallback: (props: FallbackProps) => React.ReactNode;
  onErrorReset?: (details: ErrorDetails, resetFn: ErrorResetFn) => void;
  suspenseFallback: () => React.ReactNode;
}>;

export default function SuspenseErrorBoundary({
  errorFallback,
  onErrorReset,
  suspenseFallback,
  children,
}: SuspenseErrorBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={(details) => {
            if (onErrorReset && typeof onErrorReset === "function") {
              onErrorReset(details, reset);
            }
          }}
          fallbackRender={errorFallback}
        >
          <Suspense fallback={suspenseFallback()}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
