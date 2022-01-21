// 콜라츠 추측
public class Q17 {
	public static void main(String[] args) {
		int n = 626331;
		Guess guess = new Guess();
		System.out.println(guess.guess(n));
	}
}
class Guess {
    public int guess(long num) {
    	int count = 0;
        while(num>1) {
        	count++;
        	if(count>=500) {
        		count=-1;
        		break;
        	}
        	if(num%2==0) {
        		num/=2;
        	}
        	else {
        		num=(num*3)+1;
        	}
        }
        return count;
    }
}
