import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  games: game[] = [
    {
      name:'Halo Combat Evolved' ,
      imgUrl: 'https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2015/10/halo_01.jpg?w=994&ssl=1',
      desc: 'Shooter'
    },
    {
      name: 'Cities Skylines',
      imgUrl: 'https://cdn1.epicgames.com/6009be9994c2409099588cde6f3a5ed0/offer/EGS_CitiesSkylines_ColossalOrder_S3-2560x1440-14df106873c918591e49bd9604841e83.jpg',
      desc:'Simulation'
    },
    {
      name: 'The Legend Of Zelda: Tears of the kingdom',
      imgUrl: 'https://assets.nintendo.com/image/upload/w_920,f_auto,q_auto/v1681238674/Microsites/zelda-tears-of-the-kingdom/videos/posters/totk_microsite_officialtrailer3_1304xj47am',
      desc: 'Open World'
    }
  ]

}

type game = { name: string, imgUrl: string, desc: string }

