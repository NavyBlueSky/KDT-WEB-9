package first_java;
import java.util.Scanner;

public class Prac201 {

   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.print("���̸� �Է��ϼ��� : ");
      int age = scanner.nextInt();

      if (1 <= age && age <= 7) {
         System.out.print("����");
      } else if (8 <= age && age <= 13) {
         System.out.print("�ʵ��л�");
      } else if (14 <= age && age <= 16) {
         System.out.print("���л�");
      } else if (17 <= age && age <= 19) {
         System.out.print("����л�");
      } else {
         System.out.print("����");
      }
      
      scanner.close();
      

   }
}