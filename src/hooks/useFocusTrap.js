import { useEffect, useRef } from "react";

/**
 * Simple focus trap to keep keyboard focus inside a container while open.
 * Usage: const ref = useFocusTrap(open);
 * Attach returned ref to the container element.
 */
export default function useFocusTrap(open) {
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const node = ref.current;
    if (!node) return;

    const selector = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(node.querySelectorAll(selector)).filter((el) => !el.hasAttribute("disabled"));
    const first = focusable[0] || node;
    const last = focusable[focusable.length - 1] || node;
    const prevActive = document.activeElement;

    // move focus into the container
    first.focus();

    function onKey(e) {
      if (e.key === "Tab") {
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    node.addEventListener("keydown", onKey);
    return () => {
      node.removeEventListener("keydown", onKey);
      try { prevActive && prevActive.focus && prevActive.focus(); } catch (e) {}
    };
  }, [open]);

  return ref;
}
