import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import './PopularSellers.scss';
import PopularItems from "../../../../Components/PopularItems/PopularItems";
import Dropdown from '../../../../Components/Dropdown/Dropdown';

const pList = [
	{
		"value": "Top",
	},
	{
		"value": "Items",
	},
	{
		"value": "Sellers",
	}
];
const tList = [
	{
		"value": "Today",
	},
	{
		"value": "Week",
	},
	{
		"value": "Month",
	}
];

const itemList=[
	{
		"posNumber":"1",
		"imgProfile":"https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/01.png?raw=true",
		"name":"Payton Harris",
		"sum":""
	},
	{
		"posNumber":"2",
		"imgProfile":"https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/03.png?raw=true",
		"name":"Payton Harris",
		"sum":""
	},
	{
		"posNumber":"3",
		"imgProfile":"https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/03.png?raw=true",
		"name":"Payton Harris",
		"sum":""
	},
	{
		"posNumber":"4",
		"imgProfile":"https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/05.png?raw=true",
		"name":"Payton Harris",
		"sum":""
	},
	{
		"posNumber":"5",
		"imgProfile":"https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/08.png?raw=true",
		"name":"Payton Harris",
		"sum":""
	},
	{
		"posNumber":"6",
		"imgProfile":"https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/01.png?raw=true",
		"name":"Payton Harris",
		"sum":""
	},
	{
		"posNumber":"7",
		"imgProfile":"https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/04.png?raw=true",
		"name":"Payton Harris",
		"sum":""
	}
]














const PopularSellers = () => {

	return (
		<div className='popularsellers-wrapper'>
			<div className='content'>
				<div className='dd-contend'>
					<Dropdown selectTittle="Popular" list={pList} placeholder="Sellers" background="none_background " />
				</div>
				<div className='dd-contend'>
					<Dropdown selectTittle="Timeframe" list={tList} placeholder="Today" />
				</div>
			</div>

			<div className='slider-wrapper'>
				<InfiniteCarousel className="carusel"
					breakpoints={[
						{
							breakpoint: 500,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2,
							},
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3,
							},
						},
					]}
					swipe={true}
					dots={false}
					sidesOpacity={1}
					showSides={true}
					sideSize={.09}
					autoCycle={false}
					slidesToScroll={1}
					slidesToShow={5}
					scrollOnDevice={true}
				>
					<div>
						<PopularItems
							posNumber="1"
							imgProfile="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/01.png?raw=true"
							name="Payton Harris"
							sum="2.247"
						/>
					</div>
					<div>
						<PopularItems
							posNumber="2"
							imgProfile="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/03.png?raw=true"
							name="Payton Harris"
							sum="2.212"
						/>
					</div>
					<div>
						<PopularItems
							posNumber="3"
							imgProfile="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/04.png?raw=true"
							name="Payton Harris"
							sum="2.198"
						/>
					</div>
					<div>
						<PopularItems
							posNumber="4"
							imgProfile="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/05.png?raw=true"
							name="Payton Harris"
							sum="2.047"
						/>
					</div>
					<div>
						<PopularItems
							posNumber="5"
							imgProfile="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/08.png?raw=true"
							name="Payton Harris"
							sum="1.952"
						/>
					</div>
					<div>
						<PopularItems
							posNumber="6"
							imgProfile="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/01.png?raw=true"
							name="Payton Harris"
							sum="1.852"
						/>
					</div>
					<div>
						<PopularItems
							posNumber="7"
							imgProfile="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/04.png?raw=true"
							name="Payton Harris"
							sum="1.734"
						/>
					</div>
				</InfiniteCarousel>
			</div>
		</div>
	)

}

export default PopularSellers;