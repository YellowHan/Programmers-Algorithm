// 정수 내림차순으로 배치하기
public class Q12 {
    public static void main(String[] args) {
        long n = 123456789101112L;
        Desc desc = new Desc();
        System.out.println(desc.desc(n));
    }
}
class Desc{
    public long desc(long n){
        String st = n + "";
        long answer = 0;
        long[] arr = new long[st.length()];
        long tmp = 0;
        for(int i=0;i<st.length();i++){
            arr[i]=st.charAt(i)-'0';
        }
        for(int i=0;i<st.length();i++){
            for(int j=0;j<st.length()-1;j++) {
                if (arr[i] > arr[j]) {
                    tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }
        String num ="";
        for (int i=0;i<st.length();i++){
            num += arr[i];
        }
        answer = (long) Double.parseDouble(num);
        return answer;
    }
}
// 1번 실패
//class Desc{
//    public long desc(long n){
//        String st = n+"";
//        List answer = new ArrayList(st.length());
//        for(int i=0;i<st.length();i++){
//            answer.add(st.charAt(i)+"");
//        }
//        answer.sort(Collections.reverseOrder());
//        long num = Integer.parseInt(String.join("",answer));
//        return num;
//    }
//}
// 2번 실패
//class Desc{
//    public long desc(long n){
//        String st = n+"";
//        String[] arr = new String[st.length()];
//        String[] arr2 = new String[st.length()];
//        long answer = 0;
//        for(int i=0;i<st.length();i++){
//            arr[i] = st.charAt(i)+"";
//        }
//        Arrays.sort(arr);
//        for(int i=0;i<st.length();i++){
//            arr2[i] = arr[st.length()-i-1];
//        }
//        answer = Integer.parseInt(String.join("",arr2));
//        return answer;
//    }
//}

