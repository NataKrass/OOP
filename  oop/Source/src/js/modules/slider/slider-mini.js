import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, prev, next, activeClass, animate, autoplay);
  }

  decorateClass() {
    this.slides.forEach((element) => {
      element.classList.remove(this.activeClass);
      if (this.animate) {
        element.querySelector(".card__title").style.opacity = "0.4";
      }
    });

    this.slides[0].classList.add(this.activeClass);
    if (this.animate) {
      this.slides[0].querySelector(".card__title").style.opacity = "1";
    }
  }

  bindTrigger() {
    this.next.addEventListener("click", () => {
      this.container.appendChild(this.slides[0]);
      this.decorateClass();
    });

    this.prev.addEventListener("click", () => {
      let active = this.slides[this.slides.length - 1];
      this.container.insertBefore(active, this.slides[0]);
      this.decorateClass();
    });
  }

  init() {
    try {
      this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
            `;

      this.bindTrigger();
      this.decorateClass();
    } catch (e) {}
  }
}
