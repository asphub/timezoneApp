import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComboItem } from './ComboItem';

export const countryList: ComboItem[] = [
  {
    id: 'AF',
    value: 'Afghanistan'
  },
  {
    id: 'AX',
    value: 'Aland Islands'
  },
  {
    id: 'AL',
    value: 'Albania'
  },
  {
    id: 'DZ',
    value: 'Algeria'
  },
  {
    id: 'AS',
    value: 'American Samoa'
  },
  {
    id: 'AD',
    value: 'Andorra'
  },
  {
    id: 'AO',
    value: 'Angola'
  },
  {
    id: 'AI',
    value: 'Anguilla'
  },
  {
    id: 'AQ',
    value: 'Antarctica'
  },
  {
    id: 'AG',
    value: 'Antigua and Barbuda'
  },
  {
    id: 'AR',
    value: 'Argentina'
  },
  {
    id: 'AM',
    value: 'Armenia'
  },
  {
    id: 'AW',
    value: 'Aruba'
  },
  {
    id: 'AU',
    value: 'Australia'
  },
  {
    id: 'AT',
    value: 'Austria'
  },
  {
    id: 'AZ',
    value: 'Azerbaijan'
  },
  {
    id: 'BS',
    value: 'Bahamas'
  },
  {
    id: 'BH',
    value: 'Bahrain'
  },
  {
    id: 'BD',
    value: 'Bangladesh'
  },
  {
    id: 'BB',
    value: 'Barbados'
  },
  {
    id: 'BY',
    value: 'Belarus'
  },
  {
    id: 'BE',
    value: 'Belgium'
  },
  {
    id: 'BZ',
    value: 'Belize'
  },
  {
    id: 'BJ',
    value: 'Benin'
  },
  {
    id: 'BM',
    value: 'Bermuda'
  },
  {
    id: 'BT',
    value: 'Bhutan'
  },
  {
    id: 'BO',
    value: 'Bolivia'
  },
  {
    id: 'BQ',
    value: 'Bonaire, Sint Eustatius and Saba'
  },
  {
    id: 'BA',
    value: 'Bosnia and Herzegovina'
  },
  {
    id: 'BW',
    value: 'Botswana'
  },
  {
    id: 'BV',
    value: 'Bouvet Island'
  },
  {
    id: 'BR',
    value: 'Brazil'
  },
  {
    id: 'IO',
    value: 'British Indian Ocean Territory'
  },
  {
    id: 'BN',
    value: 'Brunei Darussalam'
  },
  {
    id: 'BG',
    value: 'Bulgaria'
  },
  {
    id: 'BF',
    value: 'Burkina Faso'
  },
  {
    id: 'BI',
    value: 'Burundi'
  },
  {
    id: 'KH',
    value: 'Cambodia'
  },
  {
    id: 'CM',
    value: 'Cameroon'
  },
  {
    id: 'CA',
    value: 'Canada'
  },
  {
    id: 'CV',
    value: 'Cape Verde'
  },
  {
    id: 'KY',
    value: 'Cayman Islands'
  },
  {
    id: 'CF',
    value: 'Central African Republic'
  },
  {
    id: 'TD',
    value: 'Chad'
  },
  {
    id: 'CL',
    value: 'Chile'
  },
  {
    id: 'CN',
    value: 'China'
  },
  {
    id: 'CX',
    value: 'Christmas Island'
  },
  {
    id: 'CC',
    value: 'Cocos (Keeling) Islands'
  },
  {
    id: 'CO',
    value: 'Colombia'
  },
  {
    id: 'KM',
    value: 'Comoros'
  },
  {
    id: 'CG',
    value: 'Congo'
  },
  {
    id: 'CD',
    value: 'Congo, Democratic Republic of the Congo'
  },
  {
    id: 'CK',
    value: 'Cook Islands'
  },
  {
    id: 'CR',
    value: 'Costa Rica'
  },
  {
    id: 'CI',
    value: 'Cote D\'Ivoire'},
{
      id: 'HR',
      value: 'Croatia'
    },
{
    id: 'CU',
    value: 'Cuba'
  },
  {
    id: 'CW',
    value: 'Curacao'
  },
  {
    id: 'CY',
    value: 'Cyprus'
  },
  {
    id: 'CZ',
    value: 'Czech Republic'
  },
  {
    id: 'DK',
    value: 'Denmark'
  },
  {
    id: 'DJ',
    value: 'Djibouti'
  },
  {
    id: 'DM',
    value: 'Dominica'
  },
  {
    id: 'DO',
    value: 'Dominican Republic'
  },
  {
    id: 'EC',
    value: 'Ecuador'
  },
  {
    id: 'EG',
    value: 'Egypt'
  },
  {
    id: 'SV',
    value: 'El Salvador'
  },
  {
    id: 'GQ',
    value: 'Equatorial Guinea'
  },
  {
    id: 'ER',
    value: 'Eritrea'
  },
  {
    id: 'EE',
    value: 'Estonia'
  },
  {
    id: 'ET',
    value: 'Ethiopia'
  },
  {
    id: 'FK',
    value: 'Falkland Islands (Malvinas)'
  },
  {
    id: 'FO',
    value: 'Faroe Islands'
  },
  {
    id: 'FJ',
    value: 'Fiji'
  },
  {
    id: 'FI',
    value: 'Finland'
  },
  {
    id: 'FR',
    value: 'France'
  },
  {
    id: 'GF',
    value: 'French Guiana'
  },
  {
    id: 'PF',
    value: 'French Polynesia'
  },
  {
    id: 'TF',
    value: 'French Southern Territories'
  },
  {
    id: 'GA',
    value: 'Gabon'
  },
  {
    id: 'GM',
    value: 'Gambia'
  },
  {
    id: 'GE',
    value: 'Georgia'
  },
  {
    id: 'DE',
    value: 'Germany'
  },
  {
    id: 'GH',
    value: 'Ghana'
  },
  {
    id: 'GI',
    value: 'Gibraltar'
  },
  {
    id: 'GR',
    value: 'Greece'
  },
  {
    id: 'GL',
    value: 'Greenland'
  },
  {
    id: 'GD',
    value: 'Grenada'
  },
  {
    id: 'GP',
    value: 'Guadeloupe'
  },
  {
    id: 'GU',
    value: 'Guam'
  },
  {
    id: 'GT',
    value: 'Guatemala'
  },
  {
    id: 'GG',
    value: 'Guernsey'
  },
  {
    id: 'GN',
    value: 'Guinea'
  },
  {
    id: 'GW',
    value: 'Guinea-Bissau'
  },
  {
    id: 'GY',
    value: 'Guyana'
  },
  {
    id: 'HT',
    value: 'Haiti'
  },
  {
    id: 'HM',
    value: 'Heard Island and Mcdonald Islands'
  },
  {
    id: 'VA',
    value: 'Holy See (Vatican City State)'
  },
  {
    id: 'HN',
    value: 'Honduras'
  },
  {
    id: 'HK',
    value: 'Hong Kong'
  },
  {
    id: 'HU',
    value: 'Hungary'
  },
  {
    id: 'IS',
    value: 'Iceland'
  },
  {
    id: 'IN',
    value: 'India'
  },
  {
    id: 'ID',
    value: 'Indonesia'
  },
  {
    id: 'IR',
    value: 'Iran, Islamic Republic of'
  },
  {
    id: 'IQ',
    value: 'Iraq'
  },
  {
    id: 'IE',
    value: 'Ireland'
  },
  {
    id: 'IM',
    value: 'Isle of Man'
  },
  {
    id: 'IL',
    value: 'Israel'
  },
  {
    id: 'IT',
    value: 'Italy'
  },
  {
    id: 'JM',
    value: 'Jamaica'
  },
  {
    id: 'JP',
    value: 'Japan'
  },
  {
    id: 'JE',
    value: 'Jersey'
  },
  {
    id: 'JO',
    value: 'Jordan'
  },
  {
    id: 'KZ',
    value: 'Kazakhstan'
  },
  {
    id: 'KE',
    value: 'Kenya'
  },
  {
    id: 'KI',
    value: 'Kiribati'
  },
  {
    id: 'KP',
    value: 'Korea, Democratic People\'s Republic of'},
{
      id: 'KR',
      value: 'Korea, Republic of'
    },
{
    id: 'XK',
    value: 'Kosovo'
  },
  {
    id: 'KW',
    value: 'Kuwait'
  },
  {
    id: 'KG',
    value: 'Kyrgyzstan'
  },
  {
    id: 'LA',
    value: 'Lao People\'s Democratic Republic'},
{
      id: 'LV',
      value: 'Latvia'
    },
{
    id: 'LB',
    value: 'Lebanon'
  },
  {
    id: 'LS',
    value: 'Lesotho'
  },
  {
    id: 'LR',
    value: 'Liberia'
  },
  {
    id: 'LY',
    value: 'Libyan Arab Jamahiriya'
  },
  {
    id: 'LI',
    value: 'Liechtenstein'
  },
  {
    id: 'LT',
    value: 'Lithuania'
  },
  {
    id: 'LU',
    value: 'Luxembourg'
  },
  {
    id: 'MO',
    value: 'Macao'
  },
  {
    id: 'MK',
    value: 'Macedonia, the Former Yugoslav Republic of'
  },
  {
    id: 'MG',
    value: 'Madagascar'
  },
  {
    id: 'MW',
    value: 'Malawi'
  },
  {
    id: 'MY',
    value: 'Malaysia'
  },
  {
    id: 'MV',
    value: 'Maldives'
  },
  {
    id: 'ML',
    value: 'Mali'
  },
  {
    id: 'MT',
    value: 'Malta'
  },
  {
    id: 'MH',
    value: 'Marshall Islands'
  },
  {
    id: 'MQ',
    value: 'Martinique'
  },
  {
    id: 'MR',
    value: 'Mauritania'
  },
  {
    id: 'MU',
    value: 'Mauritius'
  },
  {
    id: 'YT',
    value: 'Mayotte'
  },
  {
    id: 'MX',
    value: 'Mexico'
  },
  {
    id: 'FM',
    value: 'Micronesia, Federated States of'
  },
  {
    id: 'MD',
    value: 'Moldova, Republic of'
  },
  {
    id: 'MC',
    value: 'Monaco'
  },
  {
    id: 'MN',
    value: 'Mongolia'
  },
  {
    id: 'ME',
    value: 'Montenegro'
  },
  {
    id: 'MS',
    value: 'Montserrat'
  },
  {
    id: 'MA',
    value: 'Morocco'
  },
  {
    id: 'MZ',
    value: 'Mozambique'
  },
  {
    id: 'MM',
    value: 'Myanmar'
  },
  {
    id: 'NA',
    value: 'Namibia'
  },
  {
    id: 'NR',
    value: 'Nauru'
  },
  {
    id: 'NP',
    value: 'Nepal'
  },
  {
    id: 'NL',
    value: 'Netherlands'
  },
  {
    id: 'AN',
    value: 'Netherlands Antilles'
  },
  {
    id: 'NC',
    value: 'New Caledonia'
  },
  {
    id: 'NZ',
    value: 'New Zealand'
  },
  {
    id: 'NI',
    value: 'Nicaragua'
  },
  {
    id: 'NE',
    value: 'Niger'
  },
  {
    id: 'NG',
    value: 'Nigeria'
  },
  {
    id: 'NU',
    value: 'Niue'
  },
  {
    id: 'NF',
    value: 'Norfolk Island'
  },
  {
    id: 'MP',
    value: 'Northern Mariana Islands'
  },
  {
    id: 'NO',
    value: 'Norway'
  },
  {
    id: 'OM',
    value: 'Oman'
  },
  {
    id: 'PK',
    value: 'Pakistan'
  },
  {
    id: 'PW',
    value: 'Palau'
  },
  {
    id: 'PS',
    value: 'Palestinian Territory, Occupied'
  },
  {
    id: 'PA',
    value: 'Panama'
  },
  {
    id: 'PG',
    value: 'Papua New Guinea'
  },
  {
    id: 'PY',
    value: 'Paraguay'
  },
  {
    id: 'PE',
    value: 'Peru'
  },
  {
    id: 'PH',
    value: 'Philippines'
  },
  {
    id: 'PN',
    value: 'Pitcairn'
  },
  {
    id: 'PL',
    value: 'Poland'
  },
  {
    id: 'PT',
    value: 'Portugal'
  },
  {
    id: 'PR',
    value: 'Puerto Rico'
  },
  {
    id: 'QA',
    value: 'Qatar'
  },
  {
    id: 'RE',
    value: 'Reunion'
  },
  {
    id: 'RO',
    value: 'Romania'
  },
  {
    id: 'RU',
    value: 'Russian Federation'
  },
  {
    id: 'RW',
    value: 'Rwanda'
  },
  {
    id: 'BL',
    value: 'Saint Barthelemy'
  },
  {
    id: 'SH',
    value: 'Saint Helena'
  },
  {
    id: 'KN',
    value: 'Saint Kitts and Nevis'
  },
  {
    id: 'LC',
    value: 'Saint Lucia'
  },
  {
    id: 'MF',
    value: 'Saint Martin'
  },
  {
    id: 'PM',
    value: 'Saint Pierre and Miquelon'
  },
  {
    id: 'VC',
    value: 'Saint Vincent and the Grenadines'
  },
  {
    id: 'WS',
    value: 'Samoa'
  },
  {
    id: 'SM',
    value: 'San Marino'
  },
  {
    id: 'ST',
    value: 'Sao Tome and Principe'
  },
  {
    id: 'SA',
    value: 'Saudi Arabia'
  },
  {
    id: 'SN',
    value: 'Senegal'
  },
  {
    id: 'RS',
    value: 'Serbia'
  },
  {
    id: 'CS',
    value: 'Serbia and Montenegro'
  },
  {
    id: 'SC',
    value: 'Seychelles'
  },
  {
    id: 'SL',
    value: 'Sierra Leone'
  },
  {
    id: 'SG',
    value: 'Singapore'
  },
  {
    id: 'SX',
    value: 'Sint Maarten'
  },
  {
    id: 'SK',
    value: 'Slovakia'
  },
  {
    id: 'SI',
    value: 'Slovenia'
  },
  {
    id: 'SB',
    value: 'Solomon Islands'
  },
  {
    id: 'SO',
    value: 'Somalia'
  },
  {
    id: 'ZA',
    value: 'South Africa'
  },
  {
    id: 'GS',
    value: 'South Georgia and the South Sandwich Islands'
  },
  {
    id: 'SS',
    value: 'South Sudan'
  },
  {
    id: 'ES',
    value: 'Spain'
  },
  {
    id: 'LK',
    value: 'Sri Lanka'
  },
  {
    id: 'SD',
    value: 'Sudan'
  },
  {
    id: 'SR',
    value: 'Suriname'
  },
  {
    id: 'SJ',
    value: 'Svalbard and Jan Mayen'
  },
  {
    id: 'SZ',
    value: 'Swaziland'
  },
  {
    id: 'SE',
    value: 'Sweden'
  },
  {
    id: 'CH',
    value: 'Switzerland'
  },
  {
    id: 'SY',
    value: 'Syrian Arab Republic'
  },
  {
    id: 'TW',
    value: 'Taiwan, Province of China'
  },
  {
    id: 'TJ',
    value: 'Tajikistan'
  },
  {
    id: 'TZ',
    value: 'Tanzania, United Republic of'
  },
  {
    id: 'TH',
    value: 'Thailand'
  },
  {
    id: 'TL',
    value: 'Timor-Leste'
  },
  {
    id: 'TG',
    value: 'Togo'
  },
  {
    id: 'TK',
    value: 'Tokelau'
  },
  {
    id: 'TO',
    value: 'Tonga'
  },
  {
    id: 'TT',
    value: 'Trinidad and Tobago'
  },
  {
    id: 'TN',
    value: 'Tunisia'
  },
  {
    id: 'TR',
    value: 'Turkey'
  },
  {
    id: 'TM',
    value: 'Turkmenistan'
  },
  {
    id: 'TC',
    value: 'Turks and Caicos Islands'
  },
  {
    id: 'TV',
    value: 'Tuvalu'
  },
  {
    id: 'UG',
    value: 'Uganda'
  },
  {
    id: 'UA',
    value: 'Ukraine'
  },
  {
    id: 'AE',
    value: 'United Arab Emirates'
  },
  {
    id: 'GB',
    value: 'United Kingdom'
  },
  {
    id: 'US',
    value: 'United States'
  },
  {
    id: 'UM',
    value: 'United States Minor Outlying Islands'
  },
  {
    id: 'UY',
    value: 'Uruguay'
  },
  {
    id: 'UZ',
    value: 'Uzbekistan'
  },
  {
    id: 'VU',
    value: 'Vanuatu'
  },
  {
    id: 'VE',
    value: 'Venezuela'
  },
  {
    id: 'VN',
    value: 'Viet Nam'
  },
  {
    id: 'VG',
    value: 'Virgin Islands, British'
  },
  {
    id: 'VI',
    value: 'Virgin Islands, U.s.'
  },
  {
    id: 'WF',
    value: 'Wallis and Futuna'
  },
  {
    id: 'EH',
    value: 'Western Sahara'
  },
  {
    id: 'YE',
    value: 'Yemen'
  },
  {
    id: 'ZM',
    value: 'Zambia'
  },
  {
    id: 'ZW',
    value: 'Zimbabwe'
  },
];

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  getCountries(): ComboItem[] {
    return countryList;
    // return this.http.get(`${environment.apiUrl}/countries`).subscribe();
  }
}
