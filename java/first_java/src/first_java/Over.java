package first_java;

public class Over {
	
	//�ڹٽ�ũ��Ʈ
	//function a( a, b, c = 0) {}
	//a(1, 2)
	
	//�޼ҵ� �����ε�
	//���� �ΰ��� ���ϴ� �޼ҵ�
	public int add(int a, int b) {
		return a + b;
	}
	
	//�Ǽ� �ΰ��� ���ϴ� �޼ҵ�
	public double add(double a, double b) {
		return a + b;
	}
	
	//���� ������ ���ϴ� �޼ҵ�
	public int add(int a, int b, int c) {
		return a + b + c;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Over calc = new Over();
		
		System.out.println(calc.add(10, 20));
		System.out.println(calc.add(10.15, 20.5));
		System.out.println(calc.add(10, 20, 300));

	}

}