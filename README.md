# TypeMart
🛍️ TypeMart - Learn TypeScript: Fundamentals 🚀

Welcome to my TypeMart Repository! Here, I've got everything you need to create a type-safe purchase flow for our innovative online shop. Let's embark on this exciting journey together! 🎉

📝 Project Description
TypeMart is all about making online shopping a breeze with our type-safe purchase flow. In this repository, you'll find two essential files:

index.ts: This is the heart of our purchase flow, where I handle all the customer transactions.

products.ts: Explore our catalog of amazing products, waiting for you to discover!

🏃 Getting Started
Follow these simple steps to run the program and experience the magic of TypeMart:

Clone the Repository 📂:
git clone https://github.com/limarodrigo5/TypeMart.git

Install Dependencies 🛠️:
npm install

Compile and Run ▶️:
tsc

node index.js

💻 Purchase Flow
My purchase flow in index.ts ensures a smooth and secure shopping experience for you. Here's what it does:

Import Products 📦:

I fetch the list of fantastic products from products.ts.

Find Your Product 🔍:

Choose your desired product by setting the productName variable.

Select and Verify 🛒:

I find and store the matching product details in the product variable.
Check the console to ensure we've got the right product.

Pre-order Notifications 📅:

If the product is available for pre-order, I'll let you know that I'll send a message when it's on the way.

Calculate Shipping 🚚:

Based on the product's price, I calculate the shipping cost:
Free shipping for prices $25 or above.
$5 shipping for items below $25.

Tax Calculation 💰:

I apply taxes based on the shipping address:
10% tax for deliveries to New York.
5% tax for all other locations.

Receipt Generation 🧾:

I prepare a detailed receipt including product name, shipping address, price, tax total, shipping cost, and total amount.

🧪 Tested Products
My purchase flow has been thoroughly tested with various products, both pre-order and non-pre-order, and different shipping addresses. So you can be confident in a delightful shopping experience! 🛍️

📌 Additional Notes
I'm thrilled to present this type-safe purchase flow, ensuring accuracy and efficiency for every transaction at TypeMart. Your feedback and contributions are valuable to me as I continue to enhance the shopping experience.

Feel free to explore the code and embark on this incredible shopping journey with me. Happy shopping, and I can't wait to see you at the grand opening! 🥳
