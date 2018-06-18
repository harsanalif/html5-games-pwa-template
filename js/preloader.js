
var GoalChampion = {};

GoalChampion.Preloader = function ()
{
};

GoalChampion.Preloader.prototype =
{
	preload: function ()
	{
		this.load.image('bg_games', 'assets/bg_games.png');
		this.load.image('ball', 'assets/ball.png');
	},

	create: function ()
	{
		this.state.start('games');
	}
}