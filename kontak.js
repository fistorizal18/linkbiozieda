const cabang = document.querySelectorAll(".ul li");
const card = document.querySelectorAll(".card-informasi");

cabang.forEach((c) => {
  c.onclick = function () {
    cabang.forEach((filter) => {
      filter.classList.remove("current");
    });
    c.classList.add("current");

    const filterValue = c.getAttribute("data-filter");

    card.forEach((cardItem) => {
      const cardFilter = cardItem.getAttribute("data-filter");
      if (filterValue === "semua-cabang" || filterValue === cardFilter) {
        cardItem.style.display = "block";
      } else {
        cardItem.style.display = "none";
      }
    });
  };
});

// FITUR FILTER
