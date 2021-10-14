// 자릿수 더하기
public class Q9 {
    public static void main(String[] args) {
        int n=12345;
        Solution solution = new Solution();
        System.out.println(solution.solution(n));
    }
}
class Solution {
    public int solution(int n) {
        String st = n+"";
        int answer = 0;
        for(int i=0;i<st.length();i++){
            answer+=st.charAt(i)-'0';
        }
        return answer;
    }
}
