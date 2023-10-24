package java_class;

public class Rectangle {
	
	private int width;
	
	private int height;
		
	public int Calc(int width, int height) {
		return width * height;

	}
	static int registered = 0;

	public Rectangle(int width) {
		this.width = width;
		registered++;
//		this.height = height;
	}
	
//	public int getRegistered() {
//		return registered;
//	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

}
