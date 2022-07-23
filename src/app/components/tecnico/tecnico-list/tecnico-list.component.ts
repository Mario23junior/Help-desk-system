import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/Tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  DATA_TECNICOS: Tecnico[] = [{
    id: 1,
    nome: 'Marcos aureli',
    cpf: '233.233.232-23.',
    email: 'marcosaureli@hotmail.com',
    senha: '823773coe',
    perfis: ['0'],
    dataCriacao: '23/07/2022'
  }]

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acaoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.DATA_TECNICOS);

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
