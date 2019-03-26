import React from "react";
import Link from 'react-router-dom/Link';
export default class Search extends React.Component {
    render() {
        return ( 
			<div id="video-search-header">
				<div id="search-icon-more"></div>
				<input type="text" placeholder="Search for match, player or team" aria-label="Search" />
				<div id="video-search-header-filtering">
					<form id="video-search-header-filtering-padding">
						<div className="row">
							<div className="col-sm extra-padding">
								<h5>Type:</h5>
								<div className="row">
									<div className="col-sm">
										<label className="checkbox-pro-container">News
											<input type="checkbox" defaultChecked id="movies-type" />
											<span className="checkmark-pro"></span>
										</label>
								
										<label className="checkbox-pro-container">Player
											<input type="checkbox" id="tv-type" />
											<span className="checkmark-pro"></span>
										</label>
									</div>
									<div className="col">
										<label className="checkbox-pro-container">Team
											<input type="checkbox" id="movie-type" />
											<span className="checkmark-pro"></span>
										</label>
								
										<label className="checkbox-pro-container">Match
											<input type="checkbox" id="documentary-type" />
											<span className="checkmark-pro"></span>
										</label>
									</div>
								</div>
								<div className="dotted-dividers-pro"></div>
							</div>
							<div className="col-sm extra-padding">
								<h5>Genres:</h5>
								<select className="custom-select">
									<option defaultValue>All Genres</option>
									<option value="1">Action</option>
									<option value="2">Adventure</option>
									<option value="3">Drama</option>
									<option value="4">Animation</option>
									<option value="5">Documentary</option>
									<option value="6">Drama</option>
									<option value="7">Horror</option>
									<option value="8">Thriller</option>
									<option value="9">Fantasy</option>
									<option value="10">Romance</option>
									<option value="11">Sci-Fi</option>
									<option value="12">Western</option>
								</select>
								<div className="dotted-dividers-pro"></div>
							</div>
							<div className="col-sm extra-padding">
								<h5>Country:</h5>
								<select className="custom-select">
									<option defaultValue>All Countries</option>
									<option value="1">Argentina</option>
									<option value="2">Australia</option>
									<option value="3">Bahamas</option>
									<option value="4">Belgium</option>
									<option value="5">Brazil</option>
									<option value="6">Canada</option>
									<option value="7">Chile</option>
									<option value="8">China</option>
									<option value="9">Denmark</option>
									<option value="10">Ecuador</option>
									<option value="11">France</option>
									<option value="12">Germany</option>
									<option value="13">Greece</option>
									<option value="14">Guatemala</option>
									<option value="15">Italy</option>
									<option value="16">Japan</option>
									<option value="17">asdfasdf</option>
									<option value="18">Korea</option>
									<option value="19">Malaysia</option>
									<option value="20">Monaco</option>
									<option value="21">Morocco</option>
									<option value="22">New Zealand</option>
									<option value="23">Panama</option>
									<option value="24">Portugal</option>
									<option value="25">Russia</option>
									<option value="26">United Kingdom</option>
									<option value="27">United States</option>
								</select>
								<div className="dotted-dividers-pro"></div>
							</div>
							<div className="col-sm extra-padding extra-range-padding">
								<h5>Average Rating:</h5>
								<input className="range-example-rating-input" type="text" min="0" max="10"  step="1" />
							</div>
						</div>
						<div id="video-search-header-buttons">
							<Link to="#!" className="btn btn-green-pro">Filter Search</Link>
							<Link to="#!" className="btn">Reset</Link>
						</div>
					</form>
				</div>
			</div>
        )
    }
}