package java_class;

public class Car {
	// 접근제어자
	// public: 같은 클래스 o, 같은 패키지 o, 자식클래스 o, 전체 o
	// protected: 같은 클래스 o, 같은 패키지 o, 자식클래스 o, 전체 x
	// default: 같은 클래스 o, 같은 패키지 o, 자식클래스 x, 전체 x
	// private: 같은 클래스 o, 같은 패키지 x, 자식클래스 x, 전체 x
	
	// 멤버 변수
	private int speed;
	
	// 생성자
	// 클래스명과 동일해야함
	public Car(int speed) {
		this.speed = speed;
	}

	public void start() {
		System.out.println("Car Start");
		System.out.println(speed);
	}
	
	public void increaseSpeed(int speed) {
		this.speed += speed;
	}

	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		// 유효성검사
		if (speed > 0) {
			this.speed = speed;
		}
	}

//	//setter 메소드
//	public void setSpeed(int speed) {
//		this.speed = speed;
//	}
//
//	//getter 메소드
//	public int getSpeed() {
//		return this.speed;
//	}
}
