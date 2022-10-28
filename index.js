let trueFalse = [{ basket: false }, { page: false }, { edit: false }];
let List = [];
let totalPrice = 0;
let categoryProduct;

let products = [
  {
    productName: "Asus ROG Strix",
    productImg: "img/asus_0_pc.png",
    productInfo:
      'Asus ROG Strix G513IC-HN037 AMD Ryzen 7 4800H 16GB 512GB SSD RTX3050 Freedos 15.6"',
    productPrice: 19599,
    id: 1,
    productCategory: "pc",
  },
  {
    productName: "Monster Abra A5 V17.1.3",
    productImg: "img/monster_0_pc.png",
    productInfo:
      'Monster Abra A5 V17.1.3 Intel Core i5-11400H 16GB RAM 500GB SSD 4GB RTX3050 FreeDOS 15.6" FHD 144Hz',
    productPrice: 16999,
    id: 2,
    productCategory: "pc",
  },
  {
    productName: "Huawei Matebook",
    productImg: "img/huawei_0_pc.png",
    productInfo:
      'Huawei Matebook D15 Intel Core i7 1165G7 16GB 512GB SSD Windows 11 Home 15.6"',
    productPrice: 14987,
    id: 3,
    productCategory: "pc",
  },
  {
    productName: "Casper Excalibur",
    productImg: "img/casper_0_pc.png",
    productInfo:
      'Casper Excalibur G770.1180-BVL0X-B Intel Core i7 11800H 16GB 500GB SSD RTX3050TI Freedos 15.6" FHD',
    productPrice: 21098,
    id: 4,
    productCategory: "pc",
  },
  {
    productName: "Acer Swift 1 SF114-34-C8DJ",
    productImg: "img/acer_0_pc.png",
    productInfo:
      'Acer Swift 1 SF114-34-C8DJ Intel Celeron N4500 4GB 256GB SSD Windows 11 Home 14"',
    productPrice: 4999,
    id: 5,
    productCategory: "pc",
  },
  {
    productName: "HP Pavilion 15-DK207NT",
    productImg: "img/hp_0_pc.png",
    productInfo:
      'HP Pavilion 15-DK207NT Intel Core i5 11300H 8GB 512GB SSD RTX3050 Freedos 15.6"',
    productPrice: 16499,
    id: 6,
    productCategory: "pc",
  },
  {
    productName: "Dell Vostro 3.515",
    productImg: "img/dell_0_pc.png",
    productInfo: 'Dell Vostro 3515 Ryzen 3 3250U 4GB 256GB SSD Ubuntu 15.6"',
    productPrice: 6152,
    id: 7,
    productCategory: "pc",
  },
  {
    productName: "Lenovo V15",
    productImg: "img/lenova_0_pc.png",
    productInfo:
      'Lenovo V15 Intel Core i5 10210U 8GB 512GB SSD MX330 15.6" FHD Windows 10 Home',
    productPrice: 12495,
    id: 8,
    productCategory: "pc",
  },
  {
    productName: "Apple MacBook Air M1",
    productImg: "img/apple_0_pc.png",
    productInfo:
      'Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13" QHD Taşınabilir productInfosayar Altın MGND3TU/A',
    productPrice: 19399,
    id: 9,
    productCategory: "pc",
  },
  {
    productName: "MSI Bravo 15 B5DD-208XTR",
    productImg: "img/msi_0_pc.png",
    productInfo:
      'MSI Bravo 15 B5DD-208XTR AMD Ryzen 5 5600H 8GB 512GB SSD RX5500M Freedos 15.6" FHD',
    productPrice: 16629,
    id: 10,
    productCategory: "pc",
  },
  {
    productName: "Lenovo IdeaPad Gaming 3",
    productImg: "img/lenova_1_pc.png",
    productInfo:
      'Lenovo IdeaPad Gaming 3 AMD Ryzen 7 5800H 16GB 512GB SSD GTX1650 Freedos 15.6"',
    productPrice: 17899,
    id: 11,
    productCategory: "pc",
  },
  {
    productName: "Monster Huma H5 V3.1.3",
    productImg: "img/monster_1_pc.png",
    productInfo:
      'Monster Huma H5 V3.1.3 Intel Core i5-1135G7 16GB RAM 500GB SSD FreeDOS 15.6" FHD 165Hz"',
    productPrice: 10975,
    id: 12,
    productCategory: "pc",
  },
  {
    productName: "Dell G15 5510 I5-10500H",
    productImg: "img/dell_1_pc.png",
    productInfo:
      'Dell G15 5510 I5-10500H 8gb Ram 512GB SSD 4gb GTX1650 15.6" Fhd 120Hz',
    productPrice: 14299,
    id: 12,
    productCategory: "pc",
  },
  {
    productName: "Acer Nitro 5 AN515-57",
    productImg: "img/acer_1_pc.png",
    productInfo:
      'Acer Nitro 5 AN515-57 Intel Core I7 11800H 16 GB 512 GB SSD RTX 3050TI 4 GB Freedos 15.6"',
    productPrice: 19999,
    id: 13,
    productCategory: "pc",
  },
  {
    productName: "Huawei Matebook D16",
    productImg: "img/huawei_1_pc.png",
    productInfo:
      'Huawei Matebook D16 Intel Core i7 12700H 16GB 512GB SSD Windows 11 Home 16"',
    productPrice: 20300,
    id: 14,
    productCategory: "pc",
  },
  {
    productName: "Honor Magicbook X15",
    productImg: "img/honor_0_pc.png",
    productInfo:
      'Honor Magicbook X15 Intel Core i3 10110U 8GB 256GB SSD Windows 10 Home 15.6"',
    productPrice: 12825,
    id: 15,
    productCategory: "pc",
  },
  {
    productName: "Vestel 55UA9600",
    productImg: "img/vestel_0_tv.png",
    productInfo:
      'Vestel 55UA9600 55" 139 Ekran Uydu Alıcılı 4K Ultra HD Android Smart LED TV',
    productPrice: 7799,
    id: 16,
    productCategory: "tv",
  },
  {
    productName: "Oppo A54 128 GB",
    productImg: "img/oppo_0_tel.png",
    productInfo: "128 GB depolama, 4 GB ram, 5000 mah pil",
    productPrice: 4890,
    id: 17,
    productCategory: "tel",
  },
  {
    productName: "Samsung Galaxy M32 128 GB",
    productImg: "img/samsung_0_tel.png",
    productInfo: "128 GB depolama, 6 GB ram, 5000 mah pil",
    productPrice: 6980,
    id: 18,
    productCategory: "tel",
  },
  {
    productName: "Nokia 3310",
    productImg: "img/nokia_0_tel.png",
    productInfo: "Her türlü saha görevine hazır",
    productPrice: 319,
    id: 19,
    productCategory: "tel",
  },
  {
    productName: "Xiaomi Redmi Note 10 Pro",
    productImg: "img/xiaomi_0_tel.png",
    productInfo: "128 GB depolama, 8 GB ram, 5020 mah pil",
    productPrice: 8058,
    id: 20,
    productCategory: "tel",
  },
  {
    productName: "iPhone 14 Pro Max 128 GB ",
    productImg: "img/iphone_0_tel.png",
    productInfo:
      "128 GB depolama, 6 GB ram, 4323 mah pil, 48 MP + 12 MP + 12 MP Kamera",
    productPrice: 49858,
    id: 21,
    productCategory: "tel",
  },
];
//Products DynamicList - Search
function productsList(category) {
  let dynamicList = [];
  if (category == "search") {
    let textboxText = document.getElementById("search-textbox").value;
    dynamicList = products.filter((product) => {
      return product.productName
        .toLowerCase()
        .includes(textboxText.toLowerCase());
    });
  } else if (category != "all") {
    dynamicList = products.filter((product) => {
      return product.productCategory == categoryProduct;
    });
  } else {
    dynamicList = products;
  }
  dynamicList.forEach((element, index) => {
    const el = document.createElement("div");
    const tdEl = `
    <br>
    <div class=" shop ">
    <div class="card shop_card" style="height:550px;">
    <div class="imgBx">
    <img src="${element.productImg}" style="z-index:-1">
    </div>
    <div class="contentBx">
    <h3 style="color: white; font-size: 15px;">${element.productName}</h3>
    <div class="size">
    <p style="color: white; font-size: 13px;">${element.productInfo}</p>
    </div>
    <div class="size">
    <h5 style="color: white; font-size: 14px;">Fiyat : <span">${
      element.productPrice
    }</span></h5>
    </div>
    <div class="buttons" style="opacity:0;">
    <button class="btn btn-success mt-2" onclick="basket_add(${
      element.id
    },${"categoryProduct"})" style="font-size: 14px;">Sepete Ekle</button>
    <button class="material-icons btn btn-info mt-2 ms-2" onclick="modal('edit',${
      element.id
    })">edit</button>
    </div>
    </div>
  </div>
</div>
<br>
             `;
    (el.innerHTML = tdEl), el.setAttribute("class", "col");
    el.setAttribute("id", "dynamic");
    document.getElementById("shop-dynamic").appendChild(el);
  });
}
//Basket Dynamic List
function productNameList(productName, piece, total, id) {
  const el = document.createElement("tr");
  const tdEl = `
    <td onclick="">${productName}</td>
    <td>${piece}</td>
    <td>${total}</td>
    <td class="d-none">${id}</td>
    <td colspan="2">
    <form>
    <button class="btn btn-outline-danger ms-5" type="button" style="background-color: red;" onclick="deleteBasket(this)">
    <i class="material-icons d-flex justify-content-center" style="color: white;">delete</i>
    </button>
    </form>
    `;
  (el.innerHTML = tdEl), el.setAttribute("id", `productName${id}`);
  document.getElementById("mytable").appendChild(el);
}
// Basket add products
function basket_add(id, category) {
  document.getElementById("basket-count").innerHTML =
    parseInt(document.getElementById("basket-count").innerHTML) + 1;
  let dynamicList = [];
  let start = [];
  dynamicList = products.filter((product, index) => {
    if (product.productCategory == category) {
      start.push(index);
    }
    return product.productCategory == category;
  });
  let count = 0;
  const newList = List.filter((product, index) => {
    count = index + 0;
    return product.id === id;
  });
  let oldId = id + 0;
  products.filter((product, index) => {
    if (id === products[index].id) {
      id = index + 0;
    }
  });
  List.filter((product, index) => {
    return product.id === id;
  });
  if (newList.length == 0) {
    List.push({
      productName: products[id].productName,
      piece: 1,
      id: oldId,
    });
    productNameList(
      products[id].productName,
      List[List.length - 1].piece,
      products[id].productPrice * List[List.length - 1].piece + "TL",
      id
    );
    totalPrice =
      totalPrice + products[id].productPrice * List[List.length - 1].piece;
  } else {
    List[count] = {
      productName: products[id].productName,
      piece: List[count].piece + 1,
      id: oldId,
    };
    document
      .getElementById(`productName${id}`)
      .getElementsByTagName("td")[1].innerHTML = `${List[count].piece}`;
    document
      .getElementById(`productName${id}`)
      .getElementsByTagName("td")[2].innerHTML =
      products[id].productPrice * List[count].piece;
    totalPrice = totalPrice + products[id].productPrice;
  }
  document.getElementById("total-price").innerHTML = totalPrice + "TL";
}
//Basket buy
function buy() {
  List = [];
  document.getElementById("mytable").innerHTML = "";
  document.getElementById("total-price").innerHTML = 0 + "TL";
  document.getElementById("basket-count").innerHTML = 0;
  totalPrice = 0;
}
//Delete basket
function deleteBasket(element) {
  const documentElement = element.closest("tr");
  let id = documentElement.getElementsByTagName("td")[3].innerHTML;
  products.filter((product, index) => {
    if (id === products[index].id) {
      id = index + 0;
    }
  });
  document.getElementById("basket-count").innerHTML =
    parseInt(document.getElementById("basket-count").innerHTML) - 1;
  if (documentElement.getElementsByTagName("td")[1].innerHTML == 1) {
    documentElement.remove();
    List = List.filter((product, ind) => {
      return (
        product.productName !=
        documentElement.getElementsByTagName("td")[0].innerHTML
      );
    });
  } else {
    documentElement.getElementsByTagName("td")[1].innerHTML =
      documentElement.getElementsByTagName("td")[1].innerHTML - 1;
    documentElement.getElementsByTagName("td")[2].innerHTML =
      documentElement.getElementsByTagName("td")[2].innerHTML -
      products[id].productPrice;
  }
  totalPrice = totalPrice - products[id].productPrice;
  document.getElementById("total-price").innerHTML = totalPrice + "TL";
}
//Page
function page(page) {
  resetView();
  trueFalse[1].page = true;
  document
    .getElementById("shop-dynamic")
    .setAttribute("class", "row row-cols-5");
  document.getElementById("home-view").setAttribute("class", "d-none");
  if (page == "computer") {
    categoryProduct = "pc";
    productsList("pc");
  } else if (page == "television") {
    categoryProduct = "tv";
    productsList("tv");
  } else if (page == "phone") {
    categoryProduct = "tel";
    productsList("tel");
  } else if (page == "home") {
    trueFalse[1].page = false;
    document.getElementById("shop-dynamic").classList.remove("row");
    document.getElementById("shop-dynamic").classList.remove("row-cols-5");
    document.getElementById("shop-dynamic").classList.remove("col");
    document.getElementById("home-view").classList.remove("d-none");
  } else if (page == "all") {
    categoryProduct = "all";
    productsList("all");
  } else if (page == "search") {
    categoryProduct = "search";
    productsList("search");
  }
}
//Basket True False
function basketTrueFalse() {
  item = document.getElementById("product-basket");
  if (trueFalse[0].basket == false) {
    item.classList.remove("d-none");
    trueFalse[0].basket = true;
    document
      .getElementById("shop-dynamic")
      .setAttribute("class", "row row-cols-4 col-9");
    if (trueFalse[1].page == false) {
      item.setAttribute("class", `col`);
      document
        .getElementById("shop-dynamic")
        .classList.remove("col-9", "row", "row-cols-4");
    } else {
      item.setAttribute("class", "col-3");
    }
  } else {
    item.setAttribute("class", "d-none");
    trueFalse[0].basket = false;
    document
      .getElementById("shop-dynamic")
      .setAttribute("class", "row row-cols-5");
  }
}
//Reset view
function resetView() {
  document.getElementById("shop-dynamic").innerHTML = "";
  trueFalse[1].page = false;
  trueFalse[0].basket = false;
  document.getElementById("product-basket").setAttribute("class", "d-none");
}
//Modal new, edit Product
function modal(proces, id) {
  let oldId = id + 0;
  products.filter((product, index) => {
    if (id === products[index].id) {
      id = index + 0;
    }
  });
  if (proces == "edit") {
    trueFalse[2].edit = true;
    document.getElementById("exampleModalLabel").innerHTML = "Düzenleme";
    document.getElementById("textbox-name").value = products[id].productName;
    document.getElementById("textbox-info").value = products[id].productInfo;
    document.getElementById("textbox-price").value = products[id].productPrice;
    document.getElementById("textbox-category").value =
      products[id].productCategory;
    document
      .getElementById("imgOut")
      .setAttribute("src", products[id].productImg);
    document
      .getElementById("save-button")
      .setAttribute("onclick", `saveButton(this,${oldId})`);
    document.getElementById("product-delete").classList.remove("d-none");
    document
      .getElementById("product-delete")
      .setAttribute("onclick", `productRemove(this,${oldId})`);
    console.log(id);
  } else {
    trueFalse[2].edit = false;
    document.getElementById("exampleModalLabel").innerHTML = "Yeni Ürün";
    document.getElementById("textbox-name").value = "";
    document.getElementById("textbox-info").value = "";
    document.getElementById("textbox-price").value = "";
    document.getElementById("textbox-category").value = "0";
    document.getElementById("imgOut").setAttribute("src", "");
    document.getElementById("imgInp").value = "";
    document
      .getElementById("product-delete")
      .setAttribute("class", "btn btn-danger d-none");
  }
  var directory = new bootstrap.Modal(document.getElementById("exampleModal"), {
    keyboard: false,
  });
  directory.show();
}
//img file
const fileIn = document.getElementById("imgInp");
const readUrl = (event) => {
  const fileOut = document.getElementById("imgOut");
  if (event.files && event.files[0]) {
    let reader = new FileReader();
    reader.onload = (event) => (fileOut.src = event.target.result);
    reader.readAsDataURL(event.files[0]);
  }
};
fileIn.onchange = function () {
  readUrl(this);
};
//Modal save
function saveButton(element, id) {
  const name = document.getElementById("textbox-name").value;
  const info = document.getElementById("textbox-info").value;
  const price = document.getElementById("textbox-price").value;
  const img = document.getElementById("imgOut").getAttribute("src");
  const category = document.getElementById("textbox-category").value;
  if (
    name == "" ||
    info == "" ||
    price == "" ||
    category == "" ||
    category == "Kategori Seçin" ||
    img == ""
  ) {
    alert("Boşlukları uygun şekilde doldurun");
  } else {
    if (trueFalse[2].edit == true) {
      products[id - 1] = {
        productName: `${name}`,
        productImg: `${img}`,
        productInfo: `${info}`,
        productPrice: `${price}`,
        id: id - 1,
        productCategory: `${category}`,
      };
    } else {
      products.push({
        productName: `${name}`,
        productImg: `${img}`,
        productInfo: `${info}`,
        productPrice: `${price}`,
        id: products[products.length - 1].id + 1,
        productCategory: `${category}`,
      });
    }
    document.getElementById("shop-dynamic").innerHTML = "";
    productsList(category);
    List = [];
    buy();
  }
}
//Product Delete
function productRemove(element, id) {
  console.log(products);
  products = products.filter((product, index) => {
    return product.id != id;
  });
  console.log(id);
  console.log(products);
  document.getElementById("shop-dynamic").innerHTML = "";
  productsList(categoryProduct);
  List = [];
  buy();
}
// //TL splice
// function TL_splice()
// {
// const x =Math.round(String(totalPrice).length / 3);
// console.log(x);
// if(String(totalPrice).length % 3 == 0)
// {
// console.log(Number(parseInt(x))-1);
// }
// const control_number = 3;
//   for(var i = 0; i++; i>x){
//     String(totalPrice).split(control_number,0,".")
//     control_number+=3
//     console.log(control_number);
//   }
//   document.getElementById("total-price").innerHTML = totalPrice + "TL";
// }
