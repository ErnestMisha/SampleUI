const faker = require('faker');
faker.locale = 'pl';

module.exports = () => {
    let data = { products:[] };
    for(let i=0;i<500;i++) {
        data.products.push({
            id: i+1,
            image: faker.image.image(),
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price(),
        });
    }
    return data;
};