// 약수의 개수와 덧셈
public class Q26 {
    public static void main(String[] args) {
        int left = 24;
        int right = 27;
        DivCountSum divCountSum = new DivCountSum();
        System.out.println(divCountSum.divCountSum(left,right));
    }
}

class DivCountSum {
    public int divCountSum(int left, int right) {
        int[] arr = new int[(right-left)+1];
        int result = 0;
        for(int i=0;i<=right-left;i++){
            arr[i]=left+i;
        }
        for(int i=0;i<arr.length;i++){
            int count = 0;
            for(int j=1;j<=arr[i];j++){
                if(arr[i]%j==0){
                    count++;
                }
            }
            if(count%2==0){
                result+=arr[i];
            }
            else {
                result-=arr[i];
            }
        }
        return result;
    }
}
