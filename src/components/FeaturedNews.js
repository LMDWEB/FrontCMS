import React from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Link from "react-router-dom/Link";

export default class CategoryNews extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: true,
          posts: []
        }
      }
    
      async componentDidMount() {
        let response = await fetch("https://api.news.lmdfoot.com/articles?_limit=3&featured=1");
        if (!response.ok) {
          return
        }
    
        let posts = await response.json()
        this.setState({ loading: false, posts: posts })
    }    

    render() {
        return (
        <Slider className="slider-wrapper" autoplay={3000}>
			{this.state.posts.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('http://localhost:1337${item.image.url}') no-repeat` }}
				>
					<div className="inner">
						<h1><Link to={`/article/${item.id}`}>{item.title}</Link></h1>
						<p>{item.resume}</p>
					</div>
				</div>
			))}
		</Slider>
            )
    }
}