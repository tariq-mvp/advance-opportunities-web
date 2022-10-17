const packages = [
  {
    id: 1,
    label: "Basic",
    cars: 5,
    plans: [
      {
        id: 1,
        months: 3,
        price: "27,500",
      },
      {
        id: 2,
        months: 6,
        price: "52,000",
      },
      {
        id: 3,
        months: 9,
        price: "75,750",
      },
      {
        id: 4,
        months: 12,
        price: "98,000",
      },
    ],
  },
  {
    id: 2,
    label: "Basic Plus",
    cars: 15,
    plans: [
      {
        id: 1,
        months: 3,
        price: "81,000",
      },
      {
        id: 2,
        months: 6,
        price: "153,000",
      },
      {
        id: 3,
        months: 9,
        price: "223,425",
      },
      {
        id: 4,
        months: 12,
        price: "288,000",
      },
    ],
  },
  {
    id: 3,
    label: "Premium",
    cars: 30,
    plans: [
      {
        id: 1,
        months: 3,
        price: "157,500",
      },
      {
        id: 2,
        months: 6,
        price: "297,000",
      },
      {
        id: 3,
        months: 9,
        price: "433,350",
      },
      {
        id: 4,
        months: 12,
        price: "558,000",
      },
    ],
  },
  {
    id: 4,
    cars: 50,
    label: "Pro",
    plans: [
      {
        id: 1,
        months: 3,
        price: "255,000",
      },
      {
        id: 2,
        months: 6,
        price: "480,000",
      },
      {
        id: 3,
        months: 9,
        price: "699,750",
      },
      {
        id: 4,
        months: 12,
        price: "900,000",
      },
    ],
  },
];

function renderPackageDetails(package_no) {
  if (package_no > 0) {
    let package = packages[package_no - 1];
    let html = "";
    package.plans.forEach((element) => {
      html += `
              <label>
              <input type="radio" ${element.id === 3 ? "checked" : ""}  value="${
                element.id
              }" name="package-details-group" />
          
              <div class="package-details animate__animated animate__zoomIn">
              ${
                element.id === 3
                  ? `<img
              src="./assets/img/recommended.png"
              class="recommended"
              alt=""
              srcset=""
            />`
                  : ""
              }
                <h2 style="margin-top: 38px;">SAR ${element.price}</h2>
                <h3> ${element.months} Months </h3>
                <p style="font-size:12px;">${package.cars} Cars</p>
                  <button onClick="choosePackage(${package.id},${
        element.id
      })">Subscribe</button>
              </div>
            </label>
              `;
    });
    document.getElementById("bseen-ad-details").innerHTML = html;
  } else {
    console.error("Sorry invalid package number");
  }
}

function renderPackageCategory() {
  let html = "";
  packages.forEach((element) => {
    html += `
          <label>
            <input type="radio" ${element.id === 3 ? "checked" : ""} value="${
      element.id
    }" name="package-tab-group" />
            <div class="animate__animated animate__fadeInUp">${
              element.label
            }</div>
          </label>
                `;
  });
  document.getElementById("package-cateogry").innerHTML = html;
  document
    .querySelectorAll('input[name="package-tab-group"]')
    .forEach((elem) => {
      elem.addEventListener("click", function (event) {
        var item = event.target.value;
        renderPackageDetails(item);
      });
    });
}

function renderPackages() {
  renderPackageCategory();
  renderPackageDetails(3);
}

renderPackages();

function choosePackage(main_package, sub_package) {
  document.getElementsByName("package-details-group")[
    sub_package - 1
  ].checked = true;

  const current_package = packages[main_package - 1];
  const package_details = current_package.plans[sub_package - 1];

  document.getElementById("selectedPackage").value = main_package;
  document.getElementById("selectedPackageSub").value = sub_package;

  const text = `Selected ${current_package.cars} cars X ${package_details.months} months for ${package_details.price} SAR`;

  let packageSelected = document.getElementById("packageSelected");
  packageSelected.innerHTML = text;

  let packageModal = bootstrap.Modal.getOrCreateInstance(
    document.getElementById("packageModal")
  );

  packageModal.show();
}
