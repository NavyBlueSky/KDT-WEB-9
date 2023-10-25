package java_class2;

public class Dog extends Animal {
	
	private String major;
	
	public Dog(String cate, String name, int age) {
		super(cate, name, age);
//		this.major = major;
	}
	
	@Override
	public String makeSound() {
		return "으르르르릉";
	}
	
}
