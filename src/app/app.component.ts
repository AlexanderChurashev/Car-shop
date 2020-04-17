import {Component, OnInit} from '@angular/core';
import {ICars} from './car.model';
import {Store} from '@ngrx/store';
import {IAppState} from './redux/app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public carState: Observable<ICars>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.carState = this.store.select('carPage');
  }
}
