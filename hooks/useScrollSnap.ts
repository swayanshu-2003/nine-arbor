import { useEffect, useState } from "react";
import createScrollSnap from "scroll-snap";

export default function useScrollSnap(ref: any, settings: any, callback: any) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const { bind, unbind } = createScrollSnap(element, settings, callback);
    bind(); // Ensure the binding happens

    return () => unbind(); // Cleanup on unmount
  }, [ref, settings]); // Add dependencies to re-run when ref or settings change
}
