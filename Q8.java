import java.util.Arrays;

// 자연수 뒤집어 배열로 만들기
public class Q8 {
    public static void main(String[] args) {
        int n = 12345;
        Reverse reverse = new Reverse();
        System.out.println(Arrays.toString(reverse.reverse(n)));
    }
}
class Reverse {
    public int[] reverse(long n) {
        String st = n + "";
        int[] answer = new int[st.length()];
        int j = 1;
        for(int i = 0; i < st.length(); i++) {
            answer[i] = st.charAt(st.length() - j) - '0';
            j++;
        }
        return answer;
    }
}