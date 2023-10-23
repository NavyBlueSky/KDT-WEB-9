package first_java;

import java.util.Scanner;
import java.util.InputMismatchException;

public class Prac5Exception {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner scan = new Scanner(System.in);
		System.out.println("배열의 크기를 입력하세요");
		try {
			int n = scan.nextInt();
			int[] arr = new int[n];
			int sum = 0;
			for (int i = 0; i < n; i++) {
				arr[i] = scan.nextInt();
				sum += arr[i];
			}
			System.out.println((double) sum / n);
		} catch (ArithmeticException e) {
			System.out.println("배열의 크기는 0이 될 수 없습니다.");
		} catch (NegativeArraySizeException e) {
			System.out.println("배열의 크기는 음수가 될 수 없습니다. ");
		} catch (InputMismatchException e) {
			System.out.println("양수가 아닙니다.");
		}
	}
}
