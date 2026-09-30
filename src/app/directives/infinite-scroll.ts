import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
})
export class InfiniteScroll implements AfterViewInit, OnDestroy {
  
  @Output()
  reachedEnd = new EventEmitter<void>();

  private observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {

    this.observer = new IntersectionObserver((entries) => {

      if (entries[0].isIntersecting) {
        this.reachedEnd.emit();
      }

    });

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
