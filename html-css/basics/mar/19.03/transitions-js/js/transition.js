import Highway from "@dogstudio/highway";
import { TimelineLite } from "gsap";

class Fade extends Highway.Transition {
  in({ from, to, done }) {
    const t1 = new TimelineLite();
    t1.fromTo(to, 0.5, { left: "-100%", top: "50%" }, { left: "0%" })
      .fromTo(
        to,
        0.5,
        { height: "5vh" },
        {
          height: "90vh",
          top: "10vh",
          onComplete: function() {
            from.remove();
            done();
          }
        }
      )
      .fromTo(to.children[0], 2, { opacity: 0 }, { opacity: 1 });
  }
  out({ from, done }) {
    done();
  }
}

export default Fade;
