import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from "./Layout";
import React, { Component } from "react";
import Slider from "react-slick";
import './Layout.css'

const Data = [
  {
    id:'r1',
    url:"https://b.zmtcdn.com/data/pictures/1/7415421/443d32d6e13165d08833256c344c14b1.jpg?fit=around|300:273&crop=300:273;*,*",
    name:'Martabak Holland',
    address:'Jalan Margonda Raya No. 250, Beji, Depok',
    price:'Rp25.000,00',
},
  {
    id:'r2',
    url:"https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/tvlk-prod-cul-assets/culinary/asset/REST_201-1280x720-FIT_AND_TRIM-e83bb16d97a080b228cf3be2f9cbedaa.jpeg?tr=q-40,w-300,h-300&amp;_src=imagekit",
    name:"D'Plate",
    address:'Jl. Taman Kopo Indah 2, Ruko 1a, No.4, Bandung',
    price:'Rp75.000,00',
},
  {
    id:'r3',
    url:"https://b.zmtcdn.com/data/pictures/8/7402658/943845114a753389f5e550027d4612ac.jpg?fit=around|300:273&crop=300:273;*,*",
    name:"Paradise",
    address:'Festival Citylink, Lantai 3 Jl. Peta No. 241, Bandung',
    price:'Rp50.000,00',
},
  {
    id:'r4',
    url:"https://asset.kompas.com/crops/4kU9rwbN9CZ3FU9x-lIXtnKHZi0=/0x0:739x493/750x500/data/photo/2020/04/26/5ea5419d24d7e.jpg",
    name:"Sushi Tei",
    address:'Flamboyant Season Building, Lantai 1',
    price:'Rp100.000,00',
},
  {
    id:'r5',
    url:"https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/tvlk-prod-cul-assets/culinary/asset/REST_shi-720x720-FIT_AND_TRIM-dc8c2a58c59fbf082628d0202a571094.jpeg?tr=q-40,c-at_max,w-1080,h-1920&_src=imagekit",
    name:"Shihlin",
    address:'Trans Studio Mall Bandung, Lantai 2',
    price:'Rp50.000,00',
},
]

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 7500,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className='container'>
        <Slider {...settings}>
          {Data.map((store,index) => (
            <Layout 
              key={index}
              url={store.url}
              name={store.name}
              address={store.address}
              price={store.price}
            />
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;