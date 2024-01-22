import { Component , OnInit} from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();
  title="My Application"
  constructor() {
    // Adding at least 3 valid items
    this.contentList.add({ id: 1, title: ' Mustang', description: 'Description 1', creator: 'Creator 1', imgURL: 'https://th.bing.com/th/id/R.d331e72bba1c35ade48ac5b2fef3b48d?rik=pYpgKKdrCeUkXw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-jLItxCxFTTo%2fUIDuNUPZHAI%2fAAAAAAAALqU%2fhh6-Fgcj1cA%2fs1600%2fClassic%2bCars%2bWallpapers%2b5.jpg&ehk=KD1BM6l24Wl2vLZAYKJmhXPzp9BQX%2f3d6zv4%2fe%2fgY4A%3d&risl=&pid=ImgRaw&r=0', type: 'Type 1',tags: ['tag1', 'tag2', 'tag3'] });
    this.contentList.add({ id: 2, title: 'Charger', description: 'Description 2', creator: 'Creator 2', imgURL: 'https://amazingclassiccars.com/wp-content/uploads/2021/02/1a5181279fe9cfc240bff40f9299cd60-scaled.jpg', type: 'Type 2' });
    this.contentList.add({ id: 3, title: ' Chevrolet', description: 'Description 3', creator: 'Creator 3', imgURL: 'https://th.bing.com/th/id/R.3eb2e3097b23428fbd8dfbc0f6c45fef?rik=uCTCXWsNi3SUYg&riu=http%3a%2f%2fwww.musclecarszone.com%2fwp-content%2fuploads%2f2013%2f10%2f1970-chevrolet-chevelle-ss-54.jpg&ehk=rPA9Rkbp2fQcETTvieV%2fITt7JltO%2f%2bGxe4C77kXQIlM%3d&risl=&pid=ImgRaw&r=0', type: 'Type 3' });
  }

  ngOnInit(): void {
    console.log(this.contentList)

  }
}
