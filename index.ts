import products from "./products";

const productName: string = "tote bag";
let shipping: number;
let taxPercent: number;
let total: number;

const product = products.filter((product) => product.name === productName)[0];

console.log(product);

if (product.preOrder === true) {
  console.log("We will send you a message when your product is on its way.");
}

if (Number(product.price) >= 25) {
  shipping = 0;
  console.log("we provide free shipping for this product");
} else {
  shipping = 5;
  console.log("your shipping is $5");
}

if (product.shippingAddress.match("New York")) {
  taxPercent = 0.1;
  console.log("there's a 10% tax on this product");
} else {
  taxPercent = 0.05;
  console.log("there's a 5% tax on this product");
}

let taxTotal: number = Number(product.price) * taxPercent;

total = Number(product.price) + taxTotal + shipping;

console.log(
  `your product: ${product.name}, will be sent to ${
    product.shippingAddress
  }, costing \$${Number(
    product.price
  )}, plus a tax of \$${taxTotal} and \$${shipping} shipping, resulting a total of \$${total}`
);
