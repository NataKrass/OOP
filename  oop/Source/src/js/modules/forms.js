export default class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.path = "assets/question.php";
  }

  async postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  }

  init() {
    this.forms.forEach((item) => {
      item.addEventListener("submit", (e) => {
        e.preventDefault();
        let statusMessage = document.createElement("div");
        item.parentNode.appendChild(statusMessage);
        statusMessage.textContent("loading...");
        const formData = new FormData(item);

        this.postData(this.path, formData)
          .then((res) => {
            console.log(res);
            statusMessage.textContent("success!");
          })
          .catch(() => {
            statusMessage.textContent("erorr");
          });
      });
    });
  }
}
