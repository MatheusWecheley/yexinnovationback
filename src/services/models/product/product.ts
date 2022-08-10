const Product = require('../../schemas/product/Products')
import mongoose from 'mongoose'

export type ProductInput = {
    name?: String
    price?: Number
    description?: String
}

export class Products {

    async createProduct({ product }): Promise<object | string> {
        try {
            const productVerify = await Product.findOne({
                name: product.name
            });
            if (productVerify) {
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
        } catch (err) {
            throw new Error(err.message)
        }
    }
    async updateProduct(id: string, ProductInput: ProductInput): Promise<boolean | object> {
        const update = await Product.findByIdAndUpdate()
        return update;
    }
}