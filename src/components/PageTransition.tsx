import { useLocation } from "@tanstack/react-router";
import { useEffect, useState, useRef, type ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState<"enter" | "exit">("enter");
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPathRef.current) {
      prevPathRef.current = location.pathname;
      setStage("exit");
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setStage("enter");
        window.scrollTo({ top: 0 });
      }, 250);
      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [children, location.pathname]);

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        stage === "enter"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3"
      }`}
    >
      {displayChildren}
    </div>
  );
}
