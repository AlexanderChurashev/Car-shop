import {Car} from '../car.model';

export interface IAppState {
  carPage: {
    cars: Car[]
  };
}
