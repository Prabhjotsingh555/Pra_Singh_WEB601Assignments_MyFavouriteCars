import { Component } from '@angular/core';
// import { ContentList } from '../helper-files/content-list';
import { Content} from '../helper-file/content-interface'

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {

  name : string | undefined;
   contentArray: Content[] = [];
  
  
  constructor() {
    this.contentArray.push(
      {
        id: 1,
        title: 'Chevrolet Bel Air',
        description: 'A classic American car known for its iconic design and powerful V8 engine.',
        creator: 'Chevrolet',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/57_Chevy_BelAir.jpg/420px-57_Chevy_BelAir.jpg',
        type: 'Sedan',
        tags: ['American Classic', 'Vintage', 'V8']
      },
      {
        id: 2,
        title: 'Ford Mustang',
        description: 'The legendary pony car that revolutionized the muscle car segment with its sleek design.',
        creator: 'Ford',
        imgURL: 'https://th.bing.com/th/id/OIP.BIuhyDTLFcHM4O2r2Ltz9wHaEK?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        type: 'Muscle Car',
        tags: ['Pony Car', 'Muscle', 'Iconic']
      },
      {
        id: 3,
        title: 'Mercedes-Benz 300SL Gullwing',
        description: 'An iconic sports car featuring distinctive gullwing doors and a powerful inline-six engine.',
        creator: 'Mercedes-Benz',
        imgURL: 'https://th.bing.com/th/id/OIP.qQoAKowWULCOfKW2HTXIsAHaFj?w=252&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        type: 'Sports Car',
        tags: ['Classic Sports Car', 'Gullwing', 'Luxury']
      },
      {
        id: 4,
        title: 'Jaguar E-Type',
        description: 'A British classic known for its elegant design and high-performance capabilities.',
        creator: 'Jaguar',
        imgURL: 'https://th.bing.com/th/id/OIP.4nCbM_ti4FXMT8ghcw40PQHaFj?rs=1&pid=ImgDetMain',
        type: 'Roadster',
        tags: ['British Classic', 'Convertible', 'Elegant']
      },
      {
        id: 5,
        title: 'Porsche 911',
        description: 'A timeless German sports car that has become a symbol of precision engineering and performance.',
        creator: 'Porsche',
        imgURL: 'https://philipraby.co.uk/wp-content/uploads/2020/06/1.-911-Carrera-3.2-2048x1365.jpeg',
        type: 'Coupe',
        tags: ['German Engineering', 'Classic Coupe', 'Performance']
      },
      {
        id: 6,
        title: 'Chevrolet Corvette Stingray',
        description: 'A legendary American sports car with a sleek design and powerful V8 engine.',
        creator: 'Chevrolet',
        imgURL: 'https://th.bing.com/th/id/OIP.K-Kw9kqnRb9VvB2SIDRJxQHaE8?rs=1&pid=ImgDetMain',
        type: 'Sports Car',
        tags: ['American Muscle', 'V8', 'Stingray']
      }
    );
  }
}  