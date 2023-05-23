import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource.ts";

@Injectable
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  construct(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category)
          .filter((c, index, array) => array.indexOf(c) == index).sort();
    })

    getProducts(category: string = null): Product[] {
      return this.products.filter(prod => category == null | category == prod.category);
    }

  getProduct(id: number): Product {
    return products.filter(prod => prod.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
