package first_java;
import java.util.Arrays;
import java.util.Scanner;

public class Prac3 {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		int[] intArray = new int[5]; 
		
		System.out.println("숫자 5개를 입력하세요");
		for(int i = 0; i < intArray.length; i++) {
			intArray[i] = scan.nextInt();
		}
		
		int sum = 0;
		double avg = 0;
		for (int arr: intArray) {
			sum += arr;
		}
		avg = sum/5;
		System.out.println((double)sum/5);
		
		scan.close();
	}
}
