import { Component, OnInit } from '@angular/core';
import { CountrySearchService } from './country-search.service';
import { CountryData } from '../api/covid';

@Component({
  selector: 'country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css'],
})
export class CountrySearchComponent implements OnInit {
  searchString: string;
  countryData: CountryData;
  constructor(private countrySearchService: CountrySearchService) {}

  ngOnInit(): void {}

  search(name: string) {
    this.countrySearchService
      .searchCountry(name)
      .subscribe((countryData: CountryData[]) => {
        this.countryData = countryData[0];
        console.log(this.countryData);
      });
  }
}
