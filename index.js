// FILTER PRODUK


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



// PAGINATION

let thisPage = 1;
let limit = 4;
let list = document.querySelectorAll(".card-container .card-menu");

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;
  list.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage();
}

loadItem();

function listPage() {
  let count = Math.ceil(list.length / limit);
  document.querySelector(".listPage").innerHTML = "";

  if (thisPage != 1) {
    let prev = document.createElement("li");
    prev.innerText = "PREV";
    prev.setAttribute("onclick", `changePage(${thisPage - 1})`);
    document.querySelector(".listPage").appendChild(prev);
  }

  for (let i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.innerHTML = i;
    if (i == thisPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", `changePage(${i})`);
    document.querySelector(".listPage").appendChild(newPage);
  }

  if (thisPage != count) {
    let next = document.createElement("li");
    next.innerText = "NEXT";
    next.setAttribute("onclick", `changePage(${thisPage + 1})`);
    document.querySelector(".listPage").appendChild(next);
  }
}

function changePage(i) {
  thisPage = i;
  loadItem();
}
