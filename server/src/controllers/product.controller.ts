import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public async getProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await this.productService.getProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error getting products', error });
    }
  }

  public async addProduct(req: Request, res: Response): Promise<void> {
    try {
      const product = await this.productService.addProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error adding product', error });
    }
  }

  public async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const product = await this.productService.updateProduct(req.params.id, req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error updating product', error });
    }
  }

  public async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      await this.productService.deleteProduct(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting product', error });
    }
  }
}
