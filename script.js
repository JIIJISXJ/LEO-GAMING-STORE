const wallets = {

    vodafone: {
        title: "Vodafone Cash",
        number: "01094676883",
        logo: "vodafone-cash.svg"
    },

    etisalat: {
        title: "Etisalat Cash",
        number: "01109302815",
        logo: "etisalat-cash.svg"
    }

};


let currentNumber = "";


function showPayment(type) {

    const wallet = wallets[type];

    currentNumber = wallet.number;

    document.getElementById("popupTitle").textContent =
        wallet.title;

    document.getElementById("popupNumber").textContent =
        wallet.number;

    document.getElementById("popupLogo").src =
        wallet.logo;

    document.getElementById("paymentBox")
        .classList.add("active");
}


function closePayment() {

    document.getElementById("paymentBox")
        .classList.remove("active");
}


function copyNumber() {

    navigator.clipboard.writeText(currentNumber);

    alert("تم نسخ رقم المحفظة ✓");

}


document.getElementById("paymentBox").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {
            closePayment();
        }

    }
);
