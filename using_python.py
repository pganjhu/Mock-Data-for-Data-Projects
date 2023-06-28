from faker import Faker
import random
import pandas as pd

fake = Faker()

# Set a random seed for reproducibility
random.seed(42)

# Generate mock data for each column
data = []
for _ in range(100):
    user_name = fake.name()
    user_mobile_number = fake.phone_number()
    pin_code = fake.zipcode()
    area_code = fake.random_int(min=100, max=999)
    district = fake.city()
    state = fake.state()
    country = fake.country()
    product_name = fake.word().capitalize()
    product_price = round(random.uniform(10, 1000), 2)
    product_discount = round(random.uniform(0, 50), 2)
    mode_of_payment = random.choice(['Credit Card', 'Debit Card', 'PayPal'])
    delivery_date = fake.date_between(start_date='-30d', end_date='+30d')
    order_date = fake.date_between(start_date='-60d', end_date='-1d')
    refundable_item = random.choice([True, False])
    price_paid = round(product_price - (product_price * (product_discount / 100)), 2)
    payment_mode = random.choice(['Cash', 'Card'])
    
    data.append([
        user_name, user_mobile_number, pin_code, area_code, district, state, country,
        product_name, product_price, product_discount, mode_of_payment, delivery_date,
        order_date, refundable_item, price_paid, payment_mode
    ])

# Create a DataFrame with the generated data
columns = [
    'User Name', 'User Mobile Number', 'Pin Code', 'Area Code', 'District', 'State',
    'Country', 'Product Name', 'Product Price', 'Product Discount', 'Mode of Payment',
    'Delivery Date', 'Order Date', 'Refundable Item', 'Price Paid', 'Payment Mode'
]
df = pd.DataFrame(data, columns=columns)

# Print the first few rows of the DataFrame
print(df.head())
