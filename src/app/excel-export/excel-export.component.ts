import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-excel-export',
  template: `
    <div>
      <button (click)="exportToExcel()">Export to Excel</button>
    </div>
  `,
  styles: [`
    textarea {
      width: 100%;
      height: 100px;
    }
  `]
})
export class ExcelExportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data: string = 'Lorem ipsum\n\tdolor sit amet';

  exportToExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([{ data: this.data }]);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(excelBlob, 'exported_data.xlsx');
  }

}

