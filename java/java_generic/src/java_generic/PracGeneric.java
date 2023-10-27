package java_generic;

class Pair<K, V> {
	private K key;
	private V value;
	
	public Pair(K key, V value) {
		this.key = key;
		this.value = value;
	}
	public K getKey() {
		return key;
	}
	public V getValue() {
		return value;
	}
	
}

public class PracGeneric {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Pair<String, Integer> pair1 = new Pair("One", 1);
		Pair<Integer, String> pair2 = new Pair(2, "two");
		
		System.out.println("Key: "+pair1.getKey() + ", value: "+ pair1.getValue());
		System.out.println("Key: "+pair2.getKey() + ", value: "+ pair2.getValue());

	}

}