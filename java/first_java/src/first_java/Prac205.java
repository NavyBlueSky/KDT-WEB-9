package first_java;

public class Prac205 {
	
	public double circle(int a) {
		return a * a * 3.14;
	}
	
	public double square(int a, int b) {
		return a * b;
	}
	
	public int tri(int a, int b, boolean c) {
		return a * b / 2;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Prac205 calc = new Prac205();
	     
	    int num1 = 5;
	    int num2 = 4;
	    int num3 = 7;
	    int num4 = 6;
	    int num5 = 3;
	    boolean a = true;
		
	    System.out.printf("반지름이 %d 인 원의 넓이-", num1);
		System.out.println(calc.circle(num1));
	    System.out.printf("가로 %d, 세로 %d인 직사각형의 넓이-", num2, num3);
		System.out.println(calc.square(num2, num3));
	    System.out.printf("밑변 %d, 세로 %d인 삼각형의 넓이-", num4, num5);
		System.out.println(calc.tri(num4, num5, a));


	}

}