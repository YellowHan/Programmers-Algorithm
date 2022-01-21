// 나머지가 1이 되는 수 찾기
public class Q22 {
    public static void main(String[] args) {
        int n = 10;
        Div1 div1 = new Div1();
        System.out.println(div1.div1(n));
    }
}

class Div1 {
    public int div1(int n) {
        int answer = 0;
        for(int i=1;i<n;i++){
            if(n%i==1){
                answer=i;
                break;
            }
        }
        return answer;
    }
}
