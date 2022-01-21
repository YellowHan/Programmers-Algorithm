import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// 나누어 떨어지는 숫자 배열
public class Q21{
    public static void main(String[] args) {
        int[] arr = {1,2,3,36};
        int divisor = 1;
        Divisor div = new Divisor();
        System.out.println(div.div(arr,divisor));


    }
}
class Divisor {
    public List div(int[] arr, int divisor) {
        List answer = new ArrayList();
        Arrays.sort(arr);
        for(int i=0;i<arr.length;i++){
            if(arr[i]%divisor==0){
                answer.add(arr[i]);
            }
        }
        if(answer.size()==0){
            answer.add(-1);
        }
        return answer;
    }
}
