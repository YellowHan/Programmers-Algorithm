import java.util.Locale;
// 문자열 내 p와 y의 개수
public class Q6 {
    public static void main(String[] args) {
        String s = "Ppoooyy";
        Pycount pycount = new Pycount();
        System.out.println(s);
        System.out.println(pycount.pycount(s));
    }
}
class Pycount {
    boolean pycount(String s) {
//        boolean answer = true;
//        int p = 0, y = 0;
//        for(int i = 0; i < s.length(); i++){
//            if(s.charAt(i) == 'p' || s.charAt(i) == 'P'){
//                p++;
//            }
//            if(s.charAt(i) == 'y' || s.charAt(i) == 'Y'){
//                y++;
//            }
//        }
//        if(p == y){
//            answer = true;
//        }
//        else {
//            answer = false;
//        }
        s = s.toUpperCase();
        return s.chars().filter(e->'P'==e).count()==s.chars().filter(e->'Y'==e).count();
        // 위 처럼 작성하면 한줄 2줄 코드 가능(람다식)
    }
}
