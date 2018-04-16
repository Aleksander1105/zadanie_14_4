var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		dsc: 'Film o czarodzieju',
		img: './Harry-Potter.jpg'
	},
	{   
		id: 2,
		title: 'Psy 2',
		dsc: 'Film o Bogusiu Lindzie',
		img: './linda.boguslaw.jpg'
	},
	{   
		id: 3,
		title: 'Nietykalni',
		dsc: 'Film o murzynie',
		img: './nietykalni-10.png'
	},
	{   
		id: 4,
		title: 'Killer',
		dsc: 'Czarek pzura w roli głownej',
		img: './kiler.png'
	}
];
	
const MoviesList = React.createClass({
	propTypes: {
		moviesList: React.PropTypes.array.isRequired
	},

	render: function() {
		const itemMovie = this.props.moviesList.map(function(item) {
			return React.createElement(Movie, {movie: item, key: item.id})
		});
		return (
			React.createElement('ul', {}, itemMovie)
		);
	}
});

const Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function() {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {movieTitle: this.props.movie.title}),
				React.createElement(MovieDsc, {movieDsc: this.props.movie.dsc}),
				React.createElement(MovieImg, {movieImg: this.props.movie.img})
			)
		);
	}
});

const MovieTitle = React.createClass({
	propTypes: {
		movieTitle: React.PropTypes.string.isRequired
	},

	render: function() {
		return (
			React.createElement('h2', {}, this.props.movieTitle)
		);
	}
	
});

const MovieDsc = React.createClass({
  propTypes: {
    movieDsc: React.PropTypes.string.isRequired
  },

  render: function () {
  	return (
  		React.createElement('p', {}, this.props.movieDsc)
  	);
  }
});

const MovieImg = React.createClass({
  propTypes: {
    movieImg: React.PropTypes.string.isRequired
  },

  render: function () {
  	return (
  		React.createElement('img', {alt: this.props.movieTitle, src: this.props.movieImg})
  	);
  }
});

const element = React.createElement('div', {},
					React.createElement('h2', {}, 'Lista Filmów'),
					React.createElement(MoviesList, {moviesList: movies})
				);

ReactDOM.render(element, document.getElementById('app'));