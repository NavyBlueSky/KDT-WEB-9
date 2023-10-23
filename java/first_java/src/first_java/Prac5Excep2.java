package first_java;
import java.util.Scanner;

public class Prac5Excep2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);

		System.out.println("배열의 크기를 입력하세요");
		int usernum = scanner.nextInt();
		
		int[] intArray = new int[usernum];
		for (int i = 0; i < usernum; i++) {
			System.out.println("숫자를 입력하세요");
			int pushn = scanner.nextInt();
			intArray[i] = pushn;
		}
		try {
			for (int i = 0; i < intArray.length; i++) {
				
			}
		} catch {
			
		}

		
		
		scanner.close();
	}

}
