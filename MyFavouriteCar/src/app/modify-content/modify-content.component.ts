import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { carserviceService } from '../car-service.service';

@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss',
})
export class ModifyContentComponent {
  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: [] as string[],
  };
  tagsString: string = '';

  @Output() contentAdded = new EventEmitter<Content>();

  constructor(private CarServiceServicearService: carserviceService) {}

  addNewContent() {
    this.newContent.tags = this.tagsString.split(',');

    this.CarServiceServicearService.addContent(this.newContent).subscribe(
      (newContentWithId) => {
        this.contentAdded.emit(newContentWithId);
        this.clearFields();
      }
    );
  }

  clearFields() {
    this.newContent = {
      id: null,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: [],
    };
    this.tagsString = '';
  }
}