import java.util.Arrays;

// x만큼 간격이 있는 n개의 숫자
public class Q10 {
    public static void main(String[] args) {
        int x=-100, n=10;
        Interval interval = new Interval();
        System.out.println(Arrays.toString(interval.interval(x,n)));
    }
}
class Interval{
    public long[] interval(int x, int n){
        long[] answer = new long[n];
        for(int i=0; i<n; i++){
            answer[i] = (long) x * (i+1);
        }
        return answer;
    }
}
