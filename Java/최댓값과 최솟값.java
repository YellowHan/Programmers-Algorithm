// 최댓값과 최솟값
public class Q20 {
    public static void main(String[] args) {
        String str = "-1 -2 -3 -4";
        MaxAndMin maxAndMin = new MaxAndMin();
        System.out.println(maxAndMin.maxandmin(str));
    }
}
class MaxAndMin {
    public String maxandmin(String s) {
        String answer = "";
        String[] arr = s.split(" ");
        int[] num = new int[arr.length];
        for(int i=0;i<arr.length;i++){
            num[i] = Integer.parseInt(arr[i]);
        }
        int max = num[0];
        int min = max;
        for(int i=0;i<num.length;i++){
            if(num[i]>max){
                max = num[i];
            }
            if(num[i]<min) {
                min = num[i];
            }
        }
        answer = min + " " + max;
        return answer;
    }
}
