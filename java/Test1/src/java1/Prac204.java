package java1;
import java.util.Scanner;

public class Prac204 {
	public double add(int a, int b) {
		return a + b;
	}
	public double sub(int a, int b) {
		return a - b;
	}
	public double mul(int a, int b) {
		return a * b;
	}
	public double div(int a, int b) {
		return a / b;
	}
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	    Scanner scanner = new Scanner(System.in);
	    System.out.println("숫자를 입력하세요");
	    int a = scanner.nextInt();
	    int b = scanner.nextInt();
	    
		Prac204 calc = new Prac204();

	    System.out.print("덧셈-");
		System.out.println(calc.add(a, b));
	    System.out.print("뺄셈-");
		System.out.println(calc.sub(a, b));
	    System.out.print("곱-");
		System.out.println(calc.mul(a, b));
	    System.out.print("나누기");
		System.out.println(calc.div(a, b));
		
		scanner.close();

	}

}