const Product = require('../../schemas/product/Products')

export class Products {

    async createProduct({product}): Promise<object | string> {
        try {
            const productVerify = await Product.findOne({
                name: product.name
            });
            if(productVerify) {
                throw new Error(`The product ${product.name} already exists`);
            }
            const newProduct = await new Product({
                name: product.name,
                price: product.price,
                description: product.description,
                quantity: product.quantity,
                image: product.image
            })
            await newProduct.save()
            return newProduct;
        }catch(err) {
            throw new Error(err.message)
        }
    }
}