import { Injectable } from '@angular/core';
import { API_ROUTES } from '../../assets/config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CountryData } from '../api/covid';
@Injectable({
  providedIn: 'root',
})
export class CountrySearchService {
  constructor(private httpClient: HttpClient) {}

  searchCountry(countryName: string) {
    let options = countryName
      ? { params: new HttpParams().set('name', countryName) }
      : {};

    return this.httpClient.get<CountryData[]>(API_ROUTES.search, options);
  }
}
