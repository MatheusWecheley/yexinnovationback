const Product = require("../../schemas/product/Products");

export type ProductDeleteInput = {
  id?: string;
  name?: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type ProductInput = {
  id: string;
  name?: String;
  price?: Number;
  description?: String;
};

export class Products {
  async createProduct({ product }): Promise<object | string> {
    try {
      const productVerify = await Product.findOne({
        name: product.name,
      });
      if (productVerify) {
        throw new Error(`The product ${product.name} already exists`);
      }
      const newProduct = await new Product({
        name: product.name,
        price: product.price,
        description: product.description,
        quantity: product.quantity,
        image: product.image,
      });
      await newProduct.save();
      return newProduct;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async updateProduct({
    id,
    ...ProductInput
  }: ProductInput): Promise<Product | null> {
    const update = await Product.findByIdAndUpdate(id, ProductInput, {
      new: true,
      useFindAndModify: false,
    });
    return update;
  }

  async deleteProduct({
    id,
    ...ProductDeleteInput
  }: ProductDeleteInput): Promise<boolean> {
    try {
      const userVerify = await Product.findById(id);
      if (userVerify) {
        const productDelete = await Product.findOneAndRemove({
          ...ProductDeleteInput,
        });
        return true;
      }
    } catch (err) {
      return false;
    }
  }
}
