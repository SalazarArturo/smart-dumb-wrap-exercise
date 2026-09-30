import { Component, Input, OnInit } from '@angular/core';
import { TaskStructure } from '../../task-service';
import { DumbComponent } from '../../components/dumb-component/dumb-component';

@Component({
  imports: [DumbComponent],
  selector: 'app-wrapper2',
  styleUrl: './wrapper2.css',
  templateUrl: './wrapper2.html',
})
export class Wrapper2 implements OnInit {
  @Input()
  tasks?: TaskStructure[];

  protected visibleTasks?: TaskStructure[];
  protected filteredTasks: TaskStructure[] = [];
  protected errorMessage?: string;

  private visibleCounter: number = 10;
  private currentPageIndex: number = 0;

  ngOnInit(): void {
      this.filterTasks();
  }

  filterTasks() {

    if(this.tasks){
      this.filteredTasks = this.tasks.slice(this.currentPageIndex, this.visibleCounter);
    } else{
      this.errorMessage = 'Error al filtrar las tareas';
    }
  }

  loadMore() {
    
    this.currentPageIndex = this.currentPageIndex + 10;
    this.visibleCounter = this.visibleCounter + 10;
    this.filterTasks();
  }
}
