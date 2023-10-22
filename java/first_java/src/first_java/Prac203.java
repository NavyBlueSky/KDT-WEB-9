package first_java;
import java.util.Scanner;

public class Prac203 {
   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.println("숫자를 입력하세요");
      
      int N = scanner.nextInt();
      
      for (int i = 1; i <= N; i++) {
         System.out.print(i + " ");
      }
      
      scanner.close();
   }
}