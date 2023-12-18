// booking.component.ts
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  template: `
    <div *ngIf="data">
    <table>
      <thead>
        <tr>
          <th *ngFor="let key of keys(data[0])">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of data">
          <td *ngFor="let key of keys(item)">{{ item[key] }}</td>
        </tr>
      </tbody>
    </table>
    <button (click)="downloadExcel()">Download Excel</button>
  </div>
  `,
  styles: [`
  textarea {
    width: 100%;
    height: 100px;
  }
`]
})
export class BookingComponent implements OnInit{
  
  data: any[]=[];

  constructor(private bookingService: BookingService) { }
  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.bookingService.getBookings().subscribe(response => {
      this.data = response;
    });
  }

  downloadExcel(): void {
    if (!this.data || this.data.length === 0) {
      return;
    }

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(data, 'Reports.xlsx');
  }

  keys(obj: Object): string[] {
    return Object.keys(obj);
  }
}
