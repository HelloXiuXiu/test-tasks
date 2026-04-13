import { useRef, useEffect } from "react";

// that hook can be used outside of a popup element - inside of
// it's parrent where toggle state is located. but it's a bit better
// to attach eventListener when the popup mounts to not pollute the window
// therefore use it inside of a popup directly
export default function useClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    function click(e) {
      if (!ref.current || ref.current.contains(e.target)) return;
      callback();
    }

    window.addEventListener("pointerdown", click);

    return () => {
      window.removeEventListener("pointerdown", click);
    };
  }, []);

  return ref;
}
