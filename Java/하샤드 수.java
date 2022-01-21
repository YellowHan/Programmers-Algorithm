// 하샤드 수
public class Q24 {
    public static void main(String[] args) {
        int arr = 13;
        HarshadNum harshadNum = new HarshadNum();
        System.out.println(harshadNum.harshadNum(arr));
    }
}

class HarshadNum {
    public boolean harshadNum(int x) {
        boolean answer = true;
        int num = 0;
        String str = x+"";
        for(int i=0;i<str.length();i++){
            num+=str.charAt(i)-'0';
        }
        if(x%num==0){
            answer=true;
        }
        else {
            answer=false;
        }
        return answer;
    }
}
