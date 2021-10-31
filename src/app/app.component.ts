import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CountryService } from './_services/country.service';
// import { TimeZoneService } from './time-zone.service';
import * as moment from 'moment';
import { ComboItem } from './_services/ComboItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timezoneApp';

  @ViewChild('comboTimezones') comboTimezones: any;

  timeZoneForm: any;

  countries!: any[] | null;
  timeZones: any[] | null = [];

  selectedCountry: ComboItem = {
    id: "",
    value: ""
  };

  selectedTimeZone: ComboItem = {
    id: "",
    value: ""
  };

  localTime = `${moment().format(environment.format.time)}, ${moment.tz.guess()}`;
  targetTime = '-';
  //`${moment().tz(moment.tz.guess()).format(environment.format.time)}, ${moment.tz.guess()}`;

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {
  }

  ngOnInit() {
    this.timeZoneForm = this.fb.group({
      country: undefined,
      timezone: undefined
    });
    // console.log(moment.tz.countries());
    this.countries = this.countryService.getCountries();
    this.timeZones = this.parseArrayToComboItems(moment.tz.names());

    setInterval(() => {
      this.localTime = `${moment().format(environment.format.time)}, ${moment.tz.guess()}`;
      if (this.selectedTimeZone && this.selectedTimeZone.value !== '') {
        console.log('VALID', this.selectedTimeZone.value);
        this.targetTime = `${moment().tz(this.selectedTimeZone.value).format(environment.format.time)}, ${this.selectedTimeZone.value}`
      }
    }, 500);
  }

  onCountryChange(opt: any) {
    console.log(opt);
    if (!opt) { return };
    this.timeZones = [];
    this.timeZones = this.parseArrayToComboItems(moment.tz.zonesForCountry(opt.id));

    this.comboTimezones.focus();

    this.selectedCountry = opt;
    this.selectedTimeZone = this.timeZones[0];

    // console.log('TIMEZONES: ', moment.tz.zonesForCountry(opt.id, true));
    // console.log(this.timeZones);
  }

  onChange(opt: any) {
    console.log(opt);
    this.selectedTimeZone = opt;
  }

  parseArrayToComboItems(array: any[]): ComboItem[] {
    const listItems: ComboItem[] = [];
    array.map((v: any, i: any) => {
      listItems.push({
        id: i,
        value: v
      });
    });
    return listItems;
  }
}
