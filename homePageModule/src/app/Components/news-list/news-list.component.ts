import { Component, ElementRef, OnInit } from '@angular/core';
import { ApisService } from '../../Services/apis.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss',
})
export class NewsListComponent implements OnInit {
  categoryList: { name: string; id: string }[] = [];
  filteredList: any;
  newsList: any[] = [];

  constructor(private apisService: ApisService, private el: ElementRef) {}

  ngOnInit(): void {
    this.getBanner();
    this.getNewsList();
    this.getNewsCategories();
  }

  getBanner() {
    this.apisService.getBanner().subscribe((banner) => {});
  }

  getNewsList() {
    this.apisService.getNewsList().subscribe((list) => {
      this.newsList = list.filter((item: any) => item.showOnHomepage === 'yes');
      this.filteredList = [...this.newsList];
      console.log('filteredList => ', this.filteredList);

    });
  }

  getNewsItemById() {
    this.apisService.getNewsItemById('1').subscribe((getNewsItemById) => {});
  }

  getNewsCategories() {
    this.apisService.getNewsCategories().subscribe((categories) => {
      this.categoryList = categories;
    });
  }

  searchByCategory(categoryId?: string) {
    const tags = this.el.nativeElement.querySelectorAll('.app-tags');

    tags.forEach((tag: any, index: any) => {
      if (tag.id == categoryId) {
        tag.classList.add('active-btn');
      } else {
        tag.classList.remove('active-btn');
      }
    });

    if (categoryId == '0') {
      this.filteredList = [...this.newsList];
    } else {
      this.filteredList = [
        ...this.newsList.filter((item) => item.categoryID == categoryId),
      ];
    }
  }
}
