const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  const link = icon.querySelector("a");
  if (link) {
    const textArea = document.createElement("textarea");
    textArea.value = link.getAttribute("href");
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Link telah disalin ke clipboard.");
  }
});
