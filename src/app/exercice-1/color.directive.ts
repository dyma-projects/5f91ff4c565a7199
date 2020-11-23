import { HostListener } from "@angular/core";
import { Directive, ElementRef } from "@angular/core";

const enum ARROW_KEY {
  UP = "ArrowUp",
  DOWN = "ArrowDown",
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
}

@Directive({
  selector: "[myAppColor]",
})
export class ColorDirective {
  private selectedColor: string;

  // prettier-ignore
  @HostListener("window:keyup", ["$event"]) keyEvent(event: KeyboardEvent) {
    // Used to flag if that's an arrow key that has been pressed
    let arrow_pressed: boolean = true;

    switch(event.code){
      case ARROW_KEY.UP: this.selectedColor = "blue"; break;
      case ARROW_KEY.DOWN: this.selectedColor = "yellow"; break;
      case ARROW_KEY.LEFT: this.selectedColor = "green"; break;
      case ARROW_KEY.RIGHT: this.selectedColor = "pink"; break;
      // If
      default: arrow_pressed = false; break;
    }

    // Updates DOM element only if it's an arrow that has been pressed
    if( arrow_pressed) {
      this.el.nativeElement.style.color = this.selectedColor
    }
  }

  constructor(private el: ElementRef) {}
}
