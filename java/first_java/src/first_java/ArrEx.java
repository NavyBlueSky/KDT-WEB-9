package first_java;
import java.util.Arrays;
import java.util.Scanner;

public class ArrEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		// �迭 ��� ����
//		int[] intArray = {1,2,3,4,5};
//		
//		for( int i = 0; i < intArray.length; i++) {
//			System.out.print(intArray[i] + "");
//		}
		
		Scanner scan = new Scanner(System.in);
		int[] intArray = new int[5]; // ũ�Ⱑ 5�� int �迭
		
		System.out.println("���� 5���� �Է��ϼ���");
		for(int i = 0; i < intArray.length; i++) {
			intArray[i] = scan.nextInt();
		}
		
		//Array.toString �迭�� ��Ҹ� ���ڿ��� ��ȯ
		System.out.print(Arrays.toString(intArray));
		System.out.print(intArray);
		scan.close();
	}

}
