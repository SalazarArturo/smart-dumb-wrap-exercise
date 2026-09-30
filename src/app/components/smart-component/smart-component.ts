import { Component, inject, Input, OnInit } from '@angular/core';
import { TaskService, TaskStructure } from '../../task-service';
import { Wrapper1 } from '../../wrappers/wrapper1/wrapper1';
import { Wrapper2 } from '../../wrappers/wrapper2/wrapper2';

@Component({
  imports: [Wrapper1, Wrapper2],
  selector: 'app-smart-component',
  styleUrl: './smart-component.css',
  templateUrl: './smart-component.html',
  providers: [TaskService]
})
export class SmartComponent implements OnInit {
  
  @Input()
  userElection?: boolean;
  private taskService = inject(TaskService);
  protected allTasks?: TaskStructure[];
  
  ngOnInit(): void {
      this.execute();
  }

  execute() {
    this.allTasks = structuredClone(this.taskService.getAllTasks());
  }
}
