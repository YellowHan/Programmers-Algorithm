// 문자열을 정수로 바꾸기
public class Q2 {
    public static void main(String[] args) {
        ChangeNum changeNum = new ChangeNum();
        String str = "1234";
        System.out.println(changeNum.ChangeNum(str));
    }
}
class ChangeNum{
    public int ChangeNum(String s){
        int answer = 0;
        answer = Integer.parseInt(s);
        return answer;
    }
}
