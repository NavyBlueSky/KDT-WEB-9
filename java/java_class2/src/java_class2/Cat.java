package java_class2;

public class Cat extends Animal {
	
	private String major;
	
	public Cat(String cate, String name, int age) {
		super(cate, name, age);
//		this.major = major;
	}
	
	@Override
	public String makeSound() {
		return "Nyang!";
	}
	
}
