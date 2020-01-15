import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Description} from '../../models/description.model';

@Component({
  selector: 'app-subtabla',
  templateUrl: './subtabla.component.html',
  styleUrls: ['./subtabla.component.scss']
})
export class SubtablaComponent implements OnInit {
  @Input() descriptions:Description[];
  displayedColumns: string[] = ['desc', 'source'];
  dataSource;
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.descriptions);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
