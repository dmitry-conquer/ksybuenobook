import { md5 } from "js-md5";

export function payPaperBook() {
  const wayforpay = new Wayforpay();
  const secretKey = "76d4dd5782e2ec8eaad896683936c46d0893c9a0";

  const paperBookDialog = document.getElementById("buy-paper-dialog");
  const buyPaperForm = document.getElementById("buy-paper-form");
  const firstname = document.getElementById("paperFirstName");
  const lastName = document.getElementById("paperLastName");
  const tel = document.getElementById("paperTel");
  const email = document.getElementById("paperEmail");
  const deliveryMethod = document.getElementById("deliveryMethod");
  const post = document.getElementById("post");

  const buyPaperBookButton = document.getElementById("buy-paper-book");

  function pay() {
    const merchantAccount = "freelance_user_652a33f72b21a";
    const merchantDomainName = "ksybook.netlify.app";
    const orderReference = Date.now();
    const orderDate = Date.now();
    const amount = "3";
    const currency = "UAH";
    const productName = "Книга «Інтервальне Голодування» автор : Ksybueno (друковане видання)";
    const productPrice = "2";
    const productCount = "1";

    /*
      pay info
    */

    const dataToSign =
      merchantAccount +
      ";" +
      merchantDomainName +
      ";" +
      orderReference +
      ";" +
      orderDate +
      ";" +
      amount +
      ";" +
      currency +
      ";" +
      productName +
      ";" +
      productCount +
      ";" +
      productPrice;

    /*
      generate md5
    */

    md5.hmac(secretKey, dataToSign);
    const hash = md5.hmac.create(secretKey);
    hash.update(dataToSign);
    const signature = hash.hex();

    /*
      pay
    */

    wayforpay.run(
      {
        merchantAccount: merchantAccount,
        merchantDomainName: merchantDomainName,
        authorizationType: "SimpleSignature",
        merchantSignature: signature,
        orderReference: orderReference,
        orderDate: orderDate,
        amount: amount,
        currency: currency,
        productName: productName,
        productPrice: productPrice,
        productCount: productCount,
        clientFirstName: firstname.value,
        clientLastName: lastName.value,
        clientEmail: email.value,
        clientPhone: tel.value,
        language: "UA",
      
        straightWidget: true,
      },
      function (response) {
        // Обробка платежу при схваленні
        console.log("Платіж схвалено");
        // console.log(response);
        buyPaperForm.submit();
        alert('OK!')
      },
      function (response) {
        // Обробка платежу при відхиленні
        console.log("Платіж відхилено");
        console.log(response);
      },
      function (response) {
        // Обробка платежу при статусі "pending" або "in processing"
        console.log("Платіж в очікуванні або обробці");
        console.log(response);
      },
    );
  }

  buyPaperBookButton.addEventListener("click", pay);
}
