// 짝수와 홀수
public class Q4 {
    public static void main(String[] args) {
        OddEven oddEven = new OddEven();
        int num = 0;
        System.out.println(oddEven.oddeven(num));
    }
}
class OddEven {
    public String oddeven(int num) {
        String answer = "";
        if (num % 2 == 0) {
            answer = "Even";
        } else {
            answer = "Odd";
        }
        return answer;
    }
}

