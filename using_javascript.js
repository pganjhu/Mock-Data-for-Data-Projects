// Function to generate a random integer within a range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate mock data for each column
function generateMockData() {
  const names = ['John Doe', 'Jane Smith', 'David Johnson', 'Emily Brown'];
  const products = ['Product A', 'Product B', 'Product C', 'Product D'];

  const data = [];
  for (let i = 0; i < 100; i++) {
    const userName = names[getRandomInt(0, names.length - 1)];
    const userMobileNumber = '9876543210'; // Replace with your logic to generate a random mobile number
    const pinCode = '123456'; // Replace with your logic to generate a random pin code
    const areaCode = getRandomInt(100, 999);
    const district = 'Sample District'; // Replace with your logic to generate a random district
    const state = 'Sample State'; // Replace with your logic to generate a random state
    const country = 'Sample Country'; // Replace with your logic to generate a random country
    const productName = products[getRandomInt(0, products.length - 1)];
    const productPrice = parseFloat((Math.random() * (1000 - 10) + 10).toFixed(2));
    const productDiscount = parseFloat((Math.random() * 50).toFixed(2));
    const modeOfPayment = ['Credit Card', 'Debit Card', 'PayPal'][getRandomInt(0, 2)];
    const deliveryDate = new Date(Date.now() + getRandomInt(-30, 30) * 24 * 60 * 60 * 1000);
    const orderDate = new Date(Date.now() + getRandomInt(-60, -1) * 24 * 60 * 60 * 1000);
    const refundableItem = Math.random() < 0.5; // 50% chance of being true
    const pricePaid = parseFloat((productPrice - (productPrice * (productDiscount / 100))).toFixed(2));
    const paymentMode = ['Cash', 'Card'][getRandomInt(0, 1)];

    data.push({
      userName,
      userMobileNumber,
      pinCode,
      areaCode,
      district,
      state,
      country,
      productName,
      productPrice,
      productDiscount,
      modeOfPayment,
      deliveryDate,
      orderDate,
      refundableItem,
      pricePaid,
      paymentMode,
    });
  }

  return data;
}

// Generate mock data
const mockData = generateMockData();

// Print the first 20 rows of the generated mock data
console.log(mockData.slice(0, 20));
