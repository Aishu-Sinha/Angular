import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  //create a service set initial goals using BehaviorSubject and goal as an observable
  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();
  
  constructor() { }
  //changes the goal property, go to app.module.ts
  changeGoal(goal) {
    this.goals.next(goal)
  }
}
