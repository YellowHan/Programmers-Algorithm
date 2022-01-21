// 약수의 합
public class Q25 {
    public static void main(String[] args) {
        int n = 12;
        DivSum divSum = new DivSum();
        System.out.println(divSum.divSum(n));
    }
}

class DivSum {
    public int divSum(int n) {
        int answer = 0;
        for(int i=1;i<=n;i++){
            if(n%i==0){
                answer+=i;
            }
        }
        return answer;
    }
}
