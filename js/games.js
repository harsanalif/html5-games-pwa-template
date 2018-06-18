
GoalChampion.Games = function ()
{
};

GoalChampion.Games.prototype =
{
	create: function ()
	{
		this.bg = this.game.add.sprite(0, 0, "bg_games");
		this.score = 0;
		
		this.createBall();
	},
	
	createBall: function()
	{
		this.ball = this.game.add.sprite(this.game.width*0.5, this.game.height*-0.5, "ball");
		this.ball.anchor.set(0.5);
		this.ball.inputEnabled = true;
		this.ball.events.onInputDown.add(this.hitBall, this);
		
		this.resetBall();
	},
	
	resetBall: function()
	{
		this.ball.x = (Math.random()*0.85 + 0.1) * this.game.width;
		this.ball.y = this.game.height*-0.5;
		
		this.ballTween = this.game.add.tween(this.ball).to({y:this.game.height*1.5}, 2000+(Math.random()*3000), Phaser.Easing.Sinusoidal.Out, true);
		this.ballTween.onComplete.addOnce(this.ballFall, this);
	},
	
	ballFall: function()
	{
		this.resetBall();
	},
	
	hitBall: function()
	{
		this.score++;
		this.ballTween.stop();
		this.resetBall();
	},

	update: function()
	{
		
	}
}