package first_java;
import java.util.Scanner;

public class Prac203 {
   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.println("���ڸ� �Է��ϼ���");
      
      int N = scanner.nextInt();
      
      for (int i = 1; i <= N; i++) {
         System.out.print(i + " ");
      }
      
      scanner.close();
   }
}