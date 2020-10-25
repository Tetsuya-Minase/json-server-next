import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
import { Observable } from 'rxjs';
import { JsonData } from '../../../model/JsonData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public readonly list$: Observable<JsonData[]>;

  constructor(private readonly listService: ListService) {
    this.list$ = this.listService.list$;
  }

  ngOnInit() {
    this.listService.getList();
  }

  onClick() {
    this.listService.fetchList();
  }
}
