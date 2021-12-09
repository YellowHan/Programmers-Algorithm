// 3진법 뒤집기
public class Q29 {
    public static void main(String[] args) {
        int n = 45;
        Reverse reverse = new Reverse();
        System.out.println(reverse.reverse(n));

    }
}

class Reverse {
    public int reverse(int n) {
        int answer = 0;
        String str = "";
        while (n/3!=0){
            str+=n%3;
            n=n/3;
        }


        return answer;
    }
}
