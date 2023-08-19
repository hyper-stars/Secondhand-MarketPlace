import { Component, OnInit } from '@angular/core';
import { ClothService } from '../../services/cloth/cloth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: any[] = [];

  constructor(private clothService: ClothService) {}

  ngOnInit(): void {
    this.clothService.getProducts().subscribe({
      next: (response) => {
        this.categories = response; 
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }
}
