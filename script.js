var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		dsc: 'Film o czarodzieju',
		img: './kiler.png'
	},
	{   
		id: 2,
		title: 'Psy 2',
		dsc: 'Film o Bogusiu Lindzie'
	},
	{   
		id: 3,
		title: 'Nietykalni',
		dsc: 'Film o murzynie'
	},
	{   
		id: 4,
		title: 'Killer',
		dsc: 'Czarek pzura w roli głownej',
	}
];
	
const moviesList = React.createClass({
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
				React.createElement.(MovieDsc, {movieDsc: this.props.movie.dsc}),
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

const MovieDesc = React.createClass({
  propTypes: {
    movieDesc: React.PropTypes.string.isRequired
  },

  render: function () {
  	return (
  		React.createElement('p', {}, this.props.movieDesc)
  	);
  }
});

const element = React.createClass({
	render: function () {
		return (
			React.createElement('div', {},
				React.createElement('h2', {}, 'Lista Filmów'),
				React.createElement(MoviesList, {moviesList: movies})
			)
		);
	}
});

ReactDOM.render(element, document.getElementById('app'));