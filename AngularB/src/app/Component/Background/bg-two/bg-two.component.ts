import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AfterViewInit, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-bg-two',
  imports: [CommonModule],
  templateUrl: './bg-two.component.html',
  styleUrl: './bg-two.component.css'
})
export class BgTwoComponent implements OnInit  {
  cells: number[] = [];

  ngOnInit() {
    this.generateGrid();
  }

  @HostListener('window:resize')
  onResize() {
    this.generateGrid();
  }

  generateGrid(): void {
    const cols = Math.floor((window.innerWidth+1000 )/ 20);
    const rows = Math.floor((window.innerHeight+1000 )/ 20);
    this.cells = Array(cols * rows).fill(0);
  }
  

  onHover(index: number) {
    const cell = document.getElementsByClassName('cell')[index] as HTMLElement;
    if (cell) {
      cell.classList.add('hovered');
    }
  }
  
  onLeave(index: number) {
    const cell = document.getElementsByClassName('cell')[index] as HTMLElement;
    if (cell) {
      cell.classList.remove('hovered');
    }
  }
}
