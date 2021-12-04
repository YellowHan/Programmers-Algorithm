// 부족한 금액 계산하기
public class Q27 {
    public static void main(String[] args) {
        int price = 3;
        int money = 20;
        int count = 4;
        MoneyCal moneyCal = new MoneyCal();
        System.out.println(moneyCal.cal(price,money,count));
    }
}

class MoneyCal {
    public long cal(int price, int money, int count) {
        long answer = 0;
        for(int i=1;i<=count;i++){
            answer += price * i;
        }
        answer -= money;
        if(answer<0){
            answer = 0;
        }
        return answer;
    }
}