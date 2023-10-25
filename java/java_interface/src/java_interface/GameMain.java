package java_interface;

public class GameMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Overwatch game = new Overwatch();
		DiabloGame game2 = new DiabloGame();
		game.up();
		game.down();
		game.right();
		game.left();
		
		game2.up();
		game2.down();
		game2.right();
		game2.left();
	}

}
