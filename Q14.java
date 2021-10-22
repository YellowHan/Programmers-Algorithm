import java.util.Calendar;

// 핸드폰 번호 가리기
public class Q14 {
    public static void main(String[] args) {
        String phone_number = "01033334444";
        HiddenNumber hiddenNumber = new HiddenNumber();
        System.out.println(hiddenNumber.hiddennumber(phone_number));

    }
}
class HiddenNumber {
    public String hiddennumber(String phone_number) {
        String answer = "";
        char[] num = new char[phone_number.length()];
        for(int i=0;i<phone_number.length();i++){
            num[i] = phone_number.charAt(i);
        }
        for(int i=0;i<phone_number.length()-4;i++){
            num[i] = '*';
        }
        for(int i=0;i<phone_number.length();i++){
            answer+=num[i]+"";
        }
        return answer;
    }
}
