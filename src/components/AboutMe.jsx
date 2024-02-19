import { useEffect, useRef, useState, useMemo } from "react";

export default function AboutMe({ dir, children }) {
  let [subclass, setSubclass] = useState('');
  const ref = useRef(null);

  useIsInViewport(() => {
    setSubclass('inview');
  }, ref)

  return (
    <div className={`aboutme ${dir} ${subclass}`} ref={ref}>
      <div className='aboutme-container'>
        {children}
      </div>
    </div>
  );
}

function useIsInViewport(func, ref) {
  const observer = useMemo(() =>
    new IntersectionObserver(([entry]) =>
      entry.isIntersecting && func()
    ),
  []);

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, observer]);
}