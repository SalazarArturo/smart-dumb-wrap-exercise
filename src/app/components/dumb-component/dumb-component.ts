import { Component, Input } from '@angular/core';
import { TaskStructure } from '../../task-service';

@Component({
  imports: [],
  selector: 'app-dumb-component',
  styleUrl: './dumb-component.css',
  templateUrl: './dumb-component.html',
})
export class DumbComponent {

  @Input()
  tasks?: TaskStructure[];

  @Input()
  scrollClass?: boolean;
}
