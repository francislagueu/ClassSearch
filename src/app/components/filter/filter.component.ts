// Handle module loading:
import { Component } from '@angular/core';
import {SearchService} from '../../services/search.service';
import { SIDEBAR_POSITION } from 'ng2-sidebar';

// Decorator:
@Component({
  // Attributes:
  selector: 'filter', //CSS selector for a host HTML element.  
  templateUrl: './filter.component.html', // Specifies HTML to be inserted into the DOM when the component's view is rendered.
  styleUrls: ['./filter.component.css'],
  providers: [SearchService]
})

// Class definition, exporting to have this class be available to other modules:
export class FilterComponent {
  private _open: boolean = false;
  private _positionNum: number = 0;
  private _closeOnClickOutside: boolean = true;
  private _showOverlay: boolean = false;
  private _animate: boolean = true;

  private _POSITIONS = [SIDEBAR_POSITION.Left, SIDEBAR_POSITION.Right, SIDEBAR_POSITION.Top, SIDEBAR_POSITION.Bottom];

  private _toggleSidebar() {
    this._open = !this._open;
  }

  private _forceOpen(){
    this._open = true;
  }

  private _togglePosition() {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  private _toggleCloseOnClickOutside() {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  private _toggleShowOverlay() {
    this._showOverlay = !this._showOverlay;
  }

  private _toggleAnimate() {
    this._animate = !this._animate;
  }

  private _onOpen() {
    console.info('Sidebar opened');
  }

  private _onClose() {
    console.info('Sidebar closed');
  }
}
