package java_interface;

interface Playable {
	void play();
	void pause();
	void stop();
}

class MP3p implements Playable {

	@Override
	public void play() {
		System.out.println("mp3 재생");
	}

	@Override
	public void pause() {
		System.out.println("mp3 일시 중지");

	}

	@Override
	public void stop() {
		System.out.println("mp3 정지");

	}
	
}

class DVD implements Playable {

	@Override
	public void play() {
		System.out.println("dvd 재생");
	}

	@Override
	public void pause() {
		System.out.println("dvd 일시 중지");

	}

	@Override
	public void stop() {
		System.out.println("dvd 정지");

	}
	
}

public class PracInterface {

	public static void main(String[] args) {
		MP3p mp3 = new MP3p();
		mp3.play();
		mp3.pause();
		mp3.stop();
		DVD dvd = new DVD();
		dvd.play();
		dvd.pause();
		dvd.stop();
		

	}

}
