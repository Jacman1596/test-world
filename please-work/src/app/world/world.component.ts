import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { dataCountry, WorldServiceService } from '../world-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-world',
  standalone: true,
  imports: [],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent implements OnInit{
  constructor(public myAPI: WorldServiceService){}
  @Input() container?: dataCountry
  @Output() targetCountry = new EventEmitter<any>()

  countryInfo = new dataCountry
  dataInfo: any

  ngOnInit(): void {
    const targetMap = document.querySelector('svg')
    const targetPaths = targetMap?.querySelectorAll('path')
    targetPaths?.forEach((path: SVGPathElement) => {
      path.addEventListener('click', this.onClick.bind(this))
    });
  }
  onClick(event: MouseEvent){
    const paths = event.target as SVGAElement
    const clickID = paths.id
    this.dataInfo = this.myAPI.getCountryInfo(clickID).subscribe((data: any) => {
    this.countryInfo.countryName = data[1][0].name
    this.countryInfo.capital = data[1][0].capitalCity
    this.countryInfo.region = data[1][0].region.value
    this.countryInfo.incomeLevel = data[1][0].incomeLevel.value
    this.countryInfo.longitude= data[1][0].longitude
    this.countryInfo.latitude = data[1][0].latitude
    console.log(
      data[1],
      this.countryInfo
    )
    this.targetCountry.emit(this.countryInfo)
    })
  }
}
