// 가운데 글자 가져오기
public class Q5 {
    public static void main(String[] args) {
        String s = "abcde";
        String s1 = "qwer";
        MiddlePick middlePick = new MiddlePick();
        System.out.println(middlePick.middle(s));
        System.out.println(s.charAt(s.length()/2 + 1));

    }
}
class MiddlePick{
    public String middle(String s){
        String answer = "";
//        if(s.length()%2 == 0){
//            answer = ""+(s.charAt(s.length()/2-1))+(s.charAt(s.length()/2));
//        }
//        else {
//            answer = s.charAt(s.length() / 2) + "";
//        }

        return s.substring((s.length()-1) / 2, s.length()/2 + 1); // 이렇게 작성하면 코드가 줄어듬
    }
}
