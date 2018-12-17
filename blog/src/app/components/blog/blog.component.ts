import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items = [
    {
      image: 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg',
      text: 'Tytuł 1'
    },
    {
      image: 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg',
      text: 'Tytuł 2'
    },
    {
      image: 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg',
      text: 'Tytuł 3'
    }, {
      image: 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg',
      text: 'Tytuł 4'
    }, {
      image: 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg',
      text: 'Tytuł 5'
    }, {
      image: 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg',
      text: 'Tytuł 6'
    }, {
      image: 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg',
      text: 'Tytuł 7'
    }, {
      image: 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg',
      text: 'Tytuł 8'
    }, {
      image: 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg',
      text: 'Tytuł 9'
    }, {
      image: 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg',
      text: 'Tytuł 10'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
