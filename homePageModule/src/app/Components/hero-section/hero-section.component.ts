import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  state = 0;
  animationObjs = [
    {
      headerTag: 'Making',
      textColor: '#F215B6',
      imgColor: 'pink',
      header: '25 Years of <br>Business Growth',
      text: 'Link Development, the global technology solutions provider and an A15 company, unveiled today that it has recently marked its Silver Jubilee anniversary.',
      img: 'assets/images/resources/792948c4f4be4cad5e748eb604ec1da7',
    },
    {
      headerTag: 'TRENDY INSIDE-OUT',
      textColor: '#A6E51C',
      imgColor: 'green',
      header: 'Crafty Minds <br>Reshaping Future',
      text: 'Link Development, Our People, Processes and technologies thrive on digital breakthroughs',
      img: 'assets/images/resources/Happy-Men-PNG-High-Quality-Image.png',
    },
    {
      headerTag: 'OUTSOURCE',
      textColor: '#FF7C16',
      imgColor: 'orange',
      header: 'Global IT <br>Experts',
      text: 'On-shore, offshore, nearshore and hybrid models for dedicated development, product building and staff augmentation',
      img: 'assets/images/resources/Guy-PNG-HD.png',
    },
  ];

  changeState() {
    this.state++;
    this.state %= 3;
    console.log('this.state', this.state);
  }
}
