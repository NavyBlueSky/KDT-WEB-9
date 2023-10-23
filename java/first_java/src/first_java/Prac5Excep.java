package first_java;

public class Prac5Excep {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int[] intArray = { 1, 2, 3, 4 };
		try {
			for (int i = 0; i < 5; i++) {
				System.out.println(intArray[i]);
			}
		} catch (ArrayIndexOutOfBoundsException e) {
			System.out.println("인덱스가 범위를 벗어났습니다.");
		}
	}

}
