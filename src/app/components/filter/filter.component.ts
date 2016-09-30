// Handle module loading:
import { Component } from '@angular/core';
import {SearchService} from '../../services/search.service';

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

}
