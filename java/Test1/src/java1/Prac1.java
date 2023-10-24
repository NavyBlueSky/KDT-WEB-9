package java1;
import java.util.Scanner;

public class Prac1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("이름을 입력하세요");
		
		Scanner scanner = new Scanner(System.in);
		
		String name = scanner.next(); 
		
		System.out.println("나이를 입력하세요.");
		
		int age = scanner.nextInt(); 

		System.out.printf("안녕하세요 %s(%d)", name, age);
		
		scanner.close();

	}

}