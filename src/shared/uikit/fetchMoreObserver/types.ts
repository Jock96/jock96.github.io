import type { ReactElement } from "react";

export interface FetchMoreObserverProps {
  onFetchMore(): void;
  intersectionObserverInit?: IntersectionObserverInit;
}

export interface ComponentWithSkeleton {
  skeleton?: ReactElement;
}
