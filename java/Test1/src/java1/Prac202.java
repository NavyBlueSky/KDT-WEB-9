package java1;
import java.util.Scanner;

public class Prac202 {

   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.println("이름을 입력하세요");
      String num = scanner.nextLine();
      

		switch(num) {
		case "홍길동":
			System.out.println("남자");
			break;
		case "성춘향":
			System.out.println("여자");
			break;
		default: 
			System.out.println("몰라");
		}
		scanner.close();
	
   }
}