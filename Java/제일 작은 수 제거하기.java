import java.util.Arrays;

// 제일 작은 수 제거하기
public class Q11 {
    public static void main(String[] args) {
        int[] arr = {5,7,6,12,20,32,1,48};
        DeleteMin deleteMin = new DeleteMin();
        System.out.println(Arrays.toString(deleteMin.deleteMin(arr)));
    }
}


class DeleteMin {
    public int[] deleteMin(int[] arr) {
        int[] answer = new int[arr.length-1];
        int min = arr[0];
        for(int i=0;i< arr.length;i++) {
            if(min > arr[i]){
                min=arr[i];
            }
        }
        int j = 0;
        for (int i=0;i< arr.length;i++) {
            if (arr[i] != min) {
                answer[j] = arr[i];
                j++;
            }
        }
        if(answer.length == 0){
            answer = new int[1];
            answer[0] = -1;
        }

        return answer;
    }
}
