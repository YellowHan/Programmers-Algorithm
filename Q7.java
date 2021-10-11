// 두 정수 사이의 합
public class Q7 {
    public static void main(String[] args) {
    int a = 3, b = 5;
    Sum sum = new Sum();
    System.out.println(sum.sum(a,b));
    }
}
class Sum {
    public long sum(int a, int b) {
        long answer = 0;
        if(a > b){
            int tmp = a;
            a = b;
            b = tmp;
        }
        while(a <= b){
            answer += a;
            a++;
        }
        return answer ;
    }
}