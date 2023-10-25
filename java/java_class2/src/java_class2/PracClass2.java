package java_class2;

public class PracClass2 {

	public static void main(String[] args) {
		Dog ya = new Dog("개", "야옹이", 3);
		System.out.println(ya.makeSound());
		Cat mu = new Cat("고양이", "멍멍이", 4);
		System.out.println(mu.makeSound());
		
		Boxster b = new Boxster("boxster", "검정", "Flat6");
		System.out.println(b.toString());
		AMGGT a = new AMGGT("AMGGT", "흰", "V8");
		System.out.println(a.toString());

	}

}
