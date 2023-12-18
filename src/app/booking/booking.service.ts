import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  getBookings(): Observable<any[]> {
    const hardcodedData = [
      {
        "Id": 1,
        "BookingName": "BKG1",
        "TenantId": 1119,
        "PropertyId": 1000,
        "ProductId": 5,
        "ReportCode": 1,
        "CreatedBy": "SNC_INT_USER",
        "CreatedDate": "2023-12-19T01:04:35.8166667",
        "LastUpdateBy": "SNC_INT_USER",
        "LastUpdatedDate": "2023-12-19T01:04:35.8166667"
      },
      {
        "Id": 2,
        "BookingName": "BKG2",
        "TenantId": 1119,
        "PropertyId": 1000,
        "ProductId": 5,
        "ReportCode": 1,
        "CreatedBy": "SNC_INT_USER",
        "CreatedDate": "2023-12-19T01:04:35.8166667",
        "LastUpdateBy": "SNC_INT_USER",
        "LastUpdatedDate": "2023-12-19T01:04:35.8166667"
      },
      {
        "Id": 3,
        "BookingName": "BKG3",
        "TenantId": 1119,
        "PropertyId": 1000,
        "ProductId": 5,
        "ReportCode": 1,
        "CreatedBy": "SNC_INT_USER",
        "CreatedDate": "2023-12-19T01:04:35.8166667",
        "LastUpdateBy": "SNC_INT_USER",
        "LastUpdatedDate": "2023-12-19T01:04:35.8166667"
      },
      {
        "Id": 4,
        "BookingName": "BKG4",
        "TenantId": 1119,
        "PropertyId": 1000,
        "ProductId": 5,
        "ReportCode": 1,
        "CreatedBy": "SNC_INT_USER",
        "CreatedDate": "2023-12-19T01:04:35.8166667",
        "LastUpdateBy": "SNC_INT_USER",
        "LastUpdatedDate": "2023-12-19T01:04:35.8166667"
      },
      {
        "Id": 5,
        "BookingName": "BKG5",
        "TenantId": 1119,
        "PropertyId": 1000,
        "ProductId": 5,
        "ReportCode": 1,
        "CreatedBy": "SNC_INT_USER",
        "CreatedDate": "2023-12-19T01:04:35.8166667",
        "LastUpdateBy": "SNC_INT_USER",
        "LastUpdatedDate": "2023-12-19T01:04:35.8166667"
      },
      {
        "Id": 6,
        "BookingName": "BKG6",
        "TenantId": 1119,
        "PropertyId": 1000,
        "ProductId": 5,
        "ReportCode": 1,
        "CreatedBy": "SNC_INT_USER",
        "CreatedDate": "2023-12-19T01:04:35.8166667",
        "LastUpdateBy": "SNC_INT_USER",
        "LastUpdatedDate": "2023-12-19T01:04:35.8166667"
      }
    ];

    return of(hardcodedData);
  }
}
