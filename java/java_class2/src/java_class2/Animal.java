package java_class2;

public class Animal {
	private String cate;
	private String name;
	private int age;
	
	//생성자
	public Animal(String cate, String name, int age) {
		this.cate = cate;
		this.name = name;
		this.age = age;
	}
	
	@Override
	public String toString() {
		return "Person / name: " + name + ", age: " + age;
	}
	
//	@Override
	public String makeSound() {
		return "동물은 소리를 낸다.";
	}

	public String getCate() {
		return cate;
	}

	public void setCate(String cate) {
		this.cate = cate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
}
