package java_class;

//static 없는 경우
class WithoutStatic {
	private int registered = 0;
	private String name;

	public WithoutStatic(String name) {
		this.name = name;
		registered++;
	}

	public int getRegistered() {
		return registered;
	}
}

//static 변수가 있는 경우
class WithStatic {
	private static int registered = 0;
	private String name;

	public WithStatic(String name) {
		this.name = name;
		registered++;
	}

	public int getRegistered() {
		return registered;
	}
}

//static 메소드
class MathUtil {
	private static double PI = 3.14;
	
	//메소드
	public static double circle(double radius) {
		return PI * radius * radius;
	}
}

public class CompareStatic {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//MathUtil math = new MathUtil();
		//static 메서드는 객체 생성없이 접근가능;
		MathUtil.circle(3.3);
		
		//static 없는 경우
		WithoutStatic a = new WithoutStatic("홍길동");
		WithoutStatic b = new WithoutStatic("이몽룡");
		System.out.println("without static");
		System.out.println("홍길동 : " + a.getRegistered());
		System.out.println("이몽룡 : " + b.getRegistered());

		//static 있는 경우
		WithStatic c = new WithStatic("성춘향");
		WithStatic d = new WithStatic("임꺽정");
		WithStatic e = new WithStatic("임꺽정");
		System.out.println("with static");
		System.out.println("홍길동 : " + c.getRegistered());
		System.out.println("이몽룡 : " + d.getRegistered());
	}

}
