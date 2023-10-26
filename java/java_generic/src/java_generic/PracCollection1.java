package java_generic;
import java.util.*;

public class PracCollection1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		//HashSet
		Set<Integer> hashSet = new HashSet<>();
		System.out.println("정수를 입력하세요 | -1 입력시 종료");
		while (true) {
			int a = scan.nextInt();
		
			if (a == -1) {
				break;
			}
			hashSet.add(a);
		}
		System.out.print("결과 -> ");
		System.out.println(hashSet);
		
		scan.close();

	}

}
