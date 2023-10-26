package java_generic;
import java.util.*;

public class PracCollection2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		Map<String, Integer> link = new LinkedHashMap<>();	
		
		System.out.println("이름과 나이를 입력하세요 | '종료' 입력시 종료");
		
		while (true) {
			System.out.println("이름");
			String a = scan.next();
			if (a.equals("종료")) {
				break;
			}
			System.out.println("나이");
			int b = scan.nextInt();

			link.put(a, b);
		}
		System.out.println("결과 -> 이름 = 나이");
		System.out.println(link);
		
		scan.close();


	}

}
