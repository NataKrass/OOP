import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(btns) {
    super(btns);
  }

  showSlide(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.lenght;
    }

    try {
      this.hanson.style.opacity = "0";
      if (n === 3) {
        this.hanson.classList.add("animated");
        setTimeout(() => {
          this.hanson.style.opacity = "1";
          this.hanson.classList.add("slideInUp");
        }, 1500);
      } else {
        this.hanson.classList.remove("animated", "slideInUp");
      }
    } catch (e) {}

    this.slides.forEach((el) => {
      el.style.display = "none";
      el.classList.remove("animated", "fadeIn");
    });
    console.log(this.slides);
    this.slides[this.slideIndex - 1].style.display = "block";
    this.slides[this.slideIndex - 1].classList.add("animated", "fadeIn");
  }

  plusSlise(n) {
    this.showSlide((this.slideIndex += n));
  }

  render() {
    if (this.container) {
      try {
        this.hanson = document.querySelector(".hanson");
      } catch (e) {
        return;
      }

      this.btns.forEach((item) => {
        item.addEventListener("click", () => {
          this.plusSlise(1);
        });

        item.parentNode.previousElementSibling.addEventListener(
          "click",
          (e) => {
            e.preventDefault();
            console.log("CLICK");
            this.slideIndex = 1;
            this.showSlide(this.slideIndex);
          }
        );
      });

      this.showSlide(this.slideIndex);

      document.querySelectorAll(".prevmodule").forEach((e) => {
        e.addEventListener("click", (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.plusSlise(-1);
        });
      });
      document.querySelectorAll(".nextmodule").forEach((e) => {
        e.addEventListener("click", (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.plusSlise(1);
        });
      });
    }
  }
}
