package first_java;
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
	    System.out.println("���ڸ� �Է��ϼ���");
	    int a = scanner.nextInt();
	    int b = scanner.nextInt();
	    
		Prac204 calc = new Prac204();

	    System.out.print("����-");
		System.out.println(calc.add(a, b));
	    System.out.print("����-");
		System.out.println(calc.sub(a, b));
	    System.out.print("��-");
		System.out.println(calc.mul(a, b));
	    System.out.print("������");
		System.out.println(calc.div(a, b));
		
		scanner.close();

	}

}
