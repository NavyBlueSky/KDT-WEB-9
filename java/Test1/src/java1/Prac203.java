package java1;
import java.util.Scanner;

public class Prac203 {
   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.println("¼ýÀÚ¸¦ ÀÔ·ÂÇÏ¼¼¿ä");
      
      int N = scanner.nextInt();
      
      for (int i = 1; i <= N; i++) {
         System.out.print(i + " ");
      }
      
      scanner.close();
   }
}