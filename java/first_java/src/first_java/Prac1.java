package first_java;

import java.util.Scanner;

public class Prac1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("�̸��� �Է��ϼ���");
		
		Scanner scanner = new Scanner(System.in);
		
		String name = scanner.next(); 
		
		System.out.println("���̸� �Է��ϼ���.");
		
		int age = scanner.nextInt(); 

		System.out.printf("�ȳ��ϼ��� %s(%d)", name, age);
		
		scanner.close();

	}

}
