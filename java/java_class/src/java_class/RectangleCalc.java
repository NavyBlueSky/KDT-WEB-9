package java_class;

import java.util.Scanner;
import java.util.ArrayList;

public class RectangleCalc {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		ArrayList<Rectangle> rects = new ArrayList<>();
		while (true) {
			System.out.println("사각형의 가로와 세로 길이를 띄어쓰기 기준으로 입력");
			int width = scan.nextInt();
			int height = scan.nextInt();
			if( width == 0 && height == 0) {
				break;
			}
			Rectangle one = new Rectangle(width);
			one.setHeight(height);
			rects.add(one);
		}
		
		for ( Rectangle one: rects) {
		System.out.printf("가로 길이는 %d \n", one.getWidth());
		System.out.printf("세로 길이는 %d \n", one.getHeight());
		System.out.printf("넓이는 %d \n", one.Calc(one.getWidth(), one.getHeight()));
		System.out.println("-------------------");
		}
		
		System.out.printf("인스턴스 수 : %d", Rectangle.registered);

		
		
		
//		Rectangle one = new Rectangle(); 
//		System.out.println("사각형의 가로와 세로 길이를 띄어쓰기 기준으로 입력");
//		int a = scan.nextInt();
//		int b = scan.nextInt();
//
//		System.out.println(	one.Calc(a, b));
		scan.close();

	}

}
