import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})

export class ProductDetailsComponent implements OnInit {
  product: any;
  apiUrl = 'https://api.everrest.educata.dev/shop/products/id/';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id'); // Get product ID from URL
    if (productId) {
      this.fetchProductDetails(productId);
    }
  }

  fetchProductDetails(id: string): void {
    this.http.get(`${this.apiUrl}${id}`).subscribe(
      (data) => this.product = data,
      (error) => console.error('Error fetching product:', error)
    );
  }
}
