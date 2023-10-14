const payButton = document.querySelector(".pay");
// payButton.addEventListener("click", pay);
const wayforpay = new Wayforpay();

var secretKey = "76d4dd5782e2ec8eaad896683936c46d0893c9a0";

function pay() {
  const merchantAccount = "freelance_user_652a33f72b21a";
  const merchantDomainName = "ksybook.netlify.app";
  const orderReference = "1DH783023";
  const orderDate = "1415379863";
  const amount = "5";
  const currency = "UAH";
  const productName = "book";
  const productPrice = "5";
  const productCount = "1";

  // Об'єднання параметрів
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
    productPrice +
    ";" +
    productCount;
  console.log(dataToSign);

  // Підписати генерований рядок за допомогою SecretKey
  //   var signature = CryptoJS.HmacMD5(dataToSign, secretKey).toString();

  wayforpay.run(
    {
      merchantAccount: merchantAccount,
      merchantDomainName: merchantDomainName,
      authorizationType: "SimpleSignature",
      merchantSignature: "aea44589ea34dbd69355ac6785b12abf",
      orderReference: orderReference,
      orderDate: orderDate,
      amount: amount,
      currency: currency,
      productName: productName,
      productPrice: productPrice,
      productCount: productCount,
      clientFirstName: "Вася",
      clientLastName: "Васечкин",
      clientEmail: "some@mail.com",
      clientPhone: "380631234567",
      language: "UA",
    },
    function (response) {
      // Обробка платежу при схваленні
      console.log("Платіж схвалено");
      console.log(response);
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
