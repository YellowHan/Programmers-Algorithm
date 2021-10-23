// 문자열 다루기 기본
public class Q15 {
    public static void main(String[] args) {
        String s = "a234";
        Check check = new Check();
        System.out.println(check.check(s));
    }
}

class Check {
    public boolean check(String s) {
        boolean answer = true;
        int count=0;
        if(s.length()==4||s.length()==6){
            for(int i=0;i<s.length();i++){
                if(s.charAt(i) >= 48 && s.charAt(i) <= 57){
                    count++;
                    if(count==s.length()){
                        answer=true;
                    }
                }
                else answer=false;
            }
        }
        else{
            answer=false;
        }
        return answer;
    }
}