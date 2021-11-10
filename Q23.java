// 없는 숫자 더하기
public class Q23 {
    public static void main(String[] args) {
        int[] numbers = {1,2,3,4,6,7,8,0};
        AddEmpty addEmpty = new AddEmpty();
        System.out.println(addEmpty.addEmpty(numbers));
    }
}

class AddEmpty {
    public int addEmpty(int[] numbers) {
        int sum = 0;
        for(int i=0;i<numbers.length;i++){
            sum+=numbers[i];
        }
        return 45-sum;
    }
}