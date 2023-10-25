package java_class2;

//추상클래스
abstract class Animals{
	private int age;
	//추상메소드
	abstract public void sound();
	
	//일반메서드
	public void sleep() {
		System.out.println("동물이 잠을 잔다");
	}
}

//추상클래스 Animal을 상속받는 chicken클래스
class Chicken extends Animals {
	
	@Override
	public void sound() {
		System.out.println("꼬꼮");
	}
	
}

public class AbstractExample {

	public static void main(String[] args) {
		//추상클래스는 인스턴스화 할 수 없음▼
//		Animals animal = new Animals();
		
		Chicken chicken = new Chicken();
		chicken.sound();
		chicken.sleep();
	}

}
