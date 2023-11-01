const liProduct = document.querySelectorAll("ul li");
const card = document.querySelectorAll(".card-menu");

liProduct.forEach((li) => {
  li.onclick = function () {
    liProduct.forEach((li) => {
      // MENGHAPUS SEMUA KELAS CURRENT PADA ELEMENT LI
      li.classList.remove("current");
    });
    li.classList.add("current");

    // FITUR FILTER

    // MENGAMBIL ATAU MENYEMBUNYIKAN ELEMEN CARD-MENU BERDASARKAN NILAI FILTERVALUE
    const filterValue = li.getAttribute("data-filter");

    card.forEach((card) => {
      const cardFilter = card.getAttribute("data-filter");

      if (filterValue === "semua-menu" || filterValue === cardFilter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };
});
