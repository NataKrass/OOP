export default class Download {
  constructor(trigger) {
    this.btns = document.querySelectorAll(trigger);
    this.path = "assets/img/mainbg.jpg";
  }

  downloadItem(path) {
    const element = document.createElement("a");
    element.setAttribute("href", path);
    element.setAttribute("download", "picture");

    element.style.display = "none";

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.downloadItem(this.path);
      });
    });
  }
}
