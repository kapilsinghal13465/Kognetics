import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'kognetics';
  tabs = [
    { name: 'Company', value: 'company' },
    { name: 'Investor', value: 'investor' },
    { name: 'Person', value: 'person' },
    { name: 'Sector', value: 'sector' },
    { name: 'Industry', value: 'industry' },
    { name: 'Sub-Industry', value: 'Ssb-industry' },
    { name: 'Region', value: 'region' },
  ];
  allChips = [{ name: 'Profile', color: 'primary' },
  { name: 'Comparables', color: 'primary' },
  { name: 'Strategic gaps', color: 'primary' },
  { name: 'Potential acquers', color: 'primary' },
  { name: 'Fast path', color: 'primary' }];
  items = [
    { name: 'Profile', value: 'List of Industry Segments that a company opertes in ?', color: undefined },
    { name: 'Comparables', value: 'List of public company comparable for a company ?', color: 'primary' },
    { name: 'Strategic gaps', value: 'What are the most critical strategic gaps for a company across its portfolio ?', color: 'accent' },
    { name: 'Strategic gaps', value: 'What are the strategic gaps for a company based on benchmarking vs. closest competitors ?', color: 'accent' },
    { name: 'Potential acquers', value: 'who can potentially aquire the company ?', color: 'warn' },
    { name: 'Fast path', value: 'What is the fast path to a company ?', color: 'warn' },
  ];

  itemsShow = this.items;

  config: any = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    threshold: 0
  };

  filterItems(chip) {
    let data = [];
    this.items.forEach((item, index) => {
      if (item.name === chip.name) {
        data.push(item);
      }
    });
    this.itemsShow = data;
  }

  tabClick(event) {
    this.itemsShow = this.items;
  }
}
