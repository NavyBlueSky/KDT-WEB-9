package java_class;

public class CarContainer {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Car bmw = new Car(30);
		Car porsche = new Car(20);
		
		//잘못된 접근방법
//		bmw.speed = 120;
//		porsche.speed = 180;
		
		bmw.start();
		porsche.start();
		
		//객체를 보호
		bmw.setSpeed(-120);
		porsche.setSpeed(-180);
		
//		int bmwSpeed = bmw.getSpeed();
//		bmwSpeed += 100;
//		bmw.setSpeed(bmwSpeed);
//		
//		int porscheSpeed = porsche.getSpeed();
//		porscheSpeed += 190;
//		porsche.setSpeed(porscheSpeed);
		
//		bmw.setSpeed(120);
//		porsche.setSpeed(180);
		
		bmw.increaseSpeed(120);
		porsche.increaseSpeed(190);
		
		System.out.println("bmw: " + bmw.getSpeed());
		System.out.println("Porsche: " + porsche.getSpeed());
	
	}
}
