import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'demong-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  loading: boolean;

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    'Episode VII - The Force Awakens',
    // 'Episode VIII - The Last Jedi'
  ];

  constructor() {
    this.movies = Array(12).fill(0).map((_, i) => `Episode # ${i} - The Force Awakens`);
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  scrolled(data: number) {

    console.log('here', data, data % 8);
    if ((data % 10) === 0) {
      this.loading = true;
      setTimeout(() => {
        this.movies = [...this.movies, ...Array(12).fill(0).map((_, i) => `Episode # ${i} - The Force Awakens`)];
        this.loading = false;
      }, 1000);
    }
  }

}
