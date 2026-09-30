import { Component, Input, OnInit } from '@angular/core';
import { TaskStructure } from '../../task-service';
import { DumbComponent } from '../../components/dumb-component/dumb-component';
import { InfiniteScroll } from '../../directives/infinite-scroll';

@Component({
  imports: [DumbComponent, InfiniteScroll],
  selector: 'app-wrapper1',
  styleUrl: './wrapper1.css',
  templateUrl: './wrapper1.html',
})
export class Wrapper1 implements OnInit {

  @Input()
  tasks?: TaskStructure[];

  protected visibleTasks?: TaskStructure[];
  protected filteredTasks: TaskStructure[] = [];
  private visibleCount = 10;
  protected errorMessage?: string;

  ngOnInit(): void {
      this.filterTasks();
  }
  
  filterTasks() {
    if(this.tasks){
      this.filteredTasks = this.tasks.slice(0, this.visibleCount);
    } else{
      this.errorMessage = 'Error al filtrar las tareas';
    }
  }

  loadMore() {
    this.visibleCount = this.visibleCount + 10;
    this.filterTasks();
  }
}

