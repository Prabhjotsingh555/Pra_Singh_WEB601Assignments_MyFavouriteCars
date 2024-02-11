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
    this.contentList.add({ id: 1, title: ' Mustang', description: 'The classic Ford Mustang, an iconic American muscle car, first hit the streets in the 1960s and has since become a symbol of power and style. With its unmistakable fastback design, roaring V8 engine, and distinctive pony emblem, the old Mustang captures the essence of the golden era of muscle cars. Whether its the sleek lines, throaty exhaust note, or the thrill of open-road cruising, the old Mustang continues to evoke nostalgia and admiration among automotive enthusiasts worldwide', creator: 'Jim Farley ', imgURL: 'https://th.bing.com/th/id/R.d331e72bba1c35ade48ac5b2fef3b48d?rik=pYpgKKdrCeUkXw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-jLItxCxFTTo%2fUIDuNUPZHAI%2fAAAAAAAALqU%2fhh6-Fgcj1cA%2fs1600%2fClassic%2bCars%2bWallpapers%2b5.jpg&ehk=KD1BM6l24Wl2vLZAYKJmhXPzp9BQX%2f3d6zv4%2fe%2fgY4A%3d&risl=&pid=ImgRaw&r=0', type: 'Type 1',tags: ['tag1', 'tag2', 'tag3'] });
    this.contentList.add({ id: 2, title: 'Charger', description: 'The Dodge Charger, a legendary name in the automotive world, has been a symbol of bold performance and aggressive styling since its introduction in the 1960s. Known for its muscular stance, powerful engine options, and unmistakable front grille, the Charger has earned its place in the pantheon of American muscle cars. From the high-performance variants to the classic design elements, the Charger stands as a testament to the pursuit of raw power and uncompromising style on the open road.', creator: 'Carlos Tavares', imgURL: 'https://amazingclassiccars.com/wp-content/uploads/2021/02/1a5181279fe9cfc240bff40f9299cd60-scaled.jpg', type: 'Type 2' });
    this.contentList.add({ id: 3, title: ' Chevrolet', description: 'The Chevrolet lineup, steeped in American automotive history, has produced a diverse range of vehicles over the years. From the timeless elegance of classic models to the contemporary innovation seen in modern iterations, Chevrolet has maintained a reputation for quality and performance. Whether its the enduring charm of the Chevrolet Impala, the rugged capability of the Silverado, or the efficiency of the Malibu, each model reflects the brands commitment to providing a reliable and enjoyable driving experience for generations of drivers.', creator: 'Mary Barra', imgURL: 'https://th.bing.com/th/id/R.3eb2e3097b23428fbd8dfbc0f6c45fef?rik=uCTCXWsNi3SUYg&riu=http%3a%2f%2fwww.musclecarszone.com%2fwp-content%2fuploads%2f2013%2f10%2f1970-chevrolet-chevelle-ss-54.jpg&ehk=rPA9Rkbp2fQcETTvieV%2fITt7JltO%2f%2bGxe4C77kXQIlM%3d&risl=&pid=ImgRaw&r=0', type: 'Type 3' });
  }

  ngOnInit(): void {
    console.log(this.contentList)

 }
}