import java.util.*;

// 두 개 뽑아서 더하기
public class Q18 {
    public static void main(String[] args) {
        long[] numbers = {2,1,3,4,1};
        Add2 add2 = new Add2();
        System.out.println(add2.add2(numbers));
    }
}
class Add2 {
    public List add2(long[] numbers) {
        Set set = new HashSet();
        Arrays.sort(numbers);
        for(int i=0;i<numbers.length;i++){
            for(int j=0;j<numbers.length;j++){
                if(i!=j){
                    set.add(numbers[i]+ numbers[j]);
                }
            }
        }
        List list = new ArrayList(set);
        Collections.sort(list);
        return list;
    }
}
