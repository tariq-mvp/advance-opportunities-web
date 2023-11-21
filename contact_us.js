setInterval(function () {
    let number1 = Date.now()
    let updated = parseInt(number1.toString().substring(3)) + 2000000

    let formatted1 = updated.toLocaleString("en-US")
    let number2 = updated - 6234567
    let formatted2 = number2.toLocaleString("en-US")

    let data = {
        distance_traveled: formatted1,
        impressions: formatted2,
    }
    // console.log(data);
    let rightNum = document.getElementById("leftNum")
    let leftNum = document.getElementById("rightNum")
    leftNum.innerHTML =
        data && data.impressions ? data.impressions + " km" : ""
    rightNum.innerHTML =
        data && data.distance_traveled ? data.distance_traveled : "";
}, 3000);

document
    .getElementById("openPopupBtn")
    .addEventListener("click", function () {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("popup").style.display = "block";
    });

document
    .getElementById("closePopupBtn")
    .addEventListener("click", function () {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("popup").style.display = "none";
    });

document
    .getElementById("overlay")
    .addEventListener("click", function (event) {
        if (event.target === document.getElementById("overlay")) {
            document.getElementById("overlay").style.display = "none";
            document.getElementById("popup").style.display = "none";
        }
    });


function toggleFaq(card) {
    const answer = card.querySelector('.faq-answer');
    const icon = card.querySelector('.toggle-icon');

    answer.classList.toggle('txt-hide');
    icon.classList.toggle('rotate-icon');
}
