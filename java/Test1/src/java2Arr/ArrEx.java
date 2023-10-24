package java2Arr;
//import java.util.Arrays;
import java.util.Scanner;

public class ArrEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		int[] intArray = {1,2,3,4,5};
//		
//		for( int i = 0; i < intArray.length; i++) {
//			System.out.print(intArray[i] + "");
//		}
		
		Scanner scan = new Scanner(System.in);
		int[] intArray = new int[5]; // 
		
		System.out.println("숫자 5개를 입력하세요");
		for(int i = 0; i < intArray.length; i++) {
			intArray[i] = scan.nextInt();
		}
		
		//Array.toString �迭�� ��Ҹ� ���ڿ��� ��ȯ 방법2
//		System.out.print(Arrays.toString(intArray));
//		System.out.print(intArray);
		
		//방법3. for-each문 사용
		int sum = 0;
		for (int arr: intArray) {
			System.out.print(arr + " ");
			sum += arr;
		}
		System.out.println(sum);
		
		
		scan.close();
	}

}