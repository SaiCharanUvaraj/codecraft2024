import { ReactLenis } from "@studio-freight/react-lenis";
import BackToTop from "./BackToTop";
function SmoothScroller({ children }) {
  // lenis options for configuration
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, 
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
      <BackToTop/>
    </ReactLenis>
  );
}

export default SmoothScroller;
