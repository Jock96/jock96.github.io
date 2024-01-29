import { FC, RefObject, useCallback, useEffect, useState } from "react";
import { useElementOnScreen, usePrevious } from "../../hooks";
import { Spinner } from "../spinner";
import { OBSERVER_DEFAULT_INIT_OPTIONS } from "./constants";
import type { ComponentWithSkeleton, FetchMoreObserverProps } from "./types";
import "./FetchMoreObserver.css"

export const FetchMoreObserver: FC<
  FetchMoreObserverProps & ComponentWithSkeleton
> = ({ onFetchMore, intersectionObserverInit }) => {
  const [observerRef, setObserverRef] = useState<RefObject<HTMLElement>>({
    current: null,
  });

  const callbackRef = useCallback(
    (value: HTMLDivElement) => {
      setObserverRef({ current: value });
    },
    [setObserverRef]
  );

  const isVisible = useElementOnScreen(
    observerRef.current,
    intersectionObserverInit ?? OBSERVER_DEFAULT_INIT_OPTIONS
  );
  const prevVisible = usePrevious(isVisible) ?? false;

  useEffect(() => {
    if (!prevVisible && isVisible) {
      onFetchMore();
    }
  }, [isVisible, prevVisible, onFetchMore]);

  return (
    <>
      <div className="observer" ref={callbackRef} />
      <Spinner centered />
    </>
  );
};
