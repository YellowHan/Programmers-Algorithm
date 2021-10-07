// 평균 구하기
public class Q3 {
    public static void main(String[] args) {
        Average average = new Average();
        int[] arr = {1,3,5,7,9,11,13,15,17,19};
        System.out.println(average.average(arr));
    }
}

class Average{
    public double average(int[] arr){
        double answer = 0;
        for(int i = 0; i < arr.length; i++){
            answer += arr[i];
        }
        return answer /= arr.length;
    }
}
