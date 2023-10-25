package java_class2;

public class Vehicle {
	private String cate;
	private String color;
	private String engine;
	
	//생성자
	public Vehicle(String cate, String color, String engine) {
		this.cate = cate;
		this.color = color;
		this.engine = engine;
	}
	
	@Override
	public String toString() {
		return color + "색 " + cate + "의 엔진: " + engine;
	}


}
