package first_java;
import java.util.Scanner;

public class Prac202 {

   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.println("�̸��� �Է��ϼ���");
      String num = scanner.nextLine();
      

		switch(num) {
		case "ȫ�浿":
			System.out.println("����");
			break;
		case "������":
			System.out.println("����");
			break;
		default: 
			System.out.println("����");
		}
		scanner.close();
	
   }
}