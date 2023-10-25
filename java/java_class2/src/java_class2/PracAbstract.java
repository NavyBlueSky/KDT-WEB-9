package java_class2;

//추상클래스
abstract class Students{
	private String name;
	private String school;
	private int age;
	private int pernum;
	//추상메소드
	abstract public void todo();
	
	//일반메서드
	public void sche() {
		System.out.println("수업");
	}
}

//추상클래스 상속받는 클래스
class Kim extends Students {
	
	@Override
	public void todo() {
		System.out.println("점심은 김가네 김밥");
	}
	
}
class Baek extends Students {
	
	@Override
	public void todo() {
		System.out.println("점심은 백종원 피자");
	}
	
}

public class PracAbstract {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Baek baek = new Baek();
		baek.todo();
		Kim kim = new Kim();
		kim.todo();

	}

}
