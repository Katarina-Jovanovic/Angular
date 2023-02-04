import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SlidesInterface } from './slides-interface';

@Component({
  selector: 'app-slike-slajder',
  templateUrl: './slike-slajder.component.html',
  styleUrls: ['./slike-slajder.component.scss']
})
export class SlikeSlajderComponent implements OnInit,OnDestroy{
  @Input() slides: SlidesInterface[]=[];

  currentIndex:number=0;
  timeoutId?:number;

  ngOnInit(): void{
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

}
