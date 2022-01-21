import java.util.*;

// 같은 숫자는 싫어
public class Q19 {
    public static void main(String[] args) {
        int[] arr = {1,1,3,3,0,1,1};
        HateNum hateNum = new HateNum();
        System.out.println(hateNum.hatenum(arr));

    }
}
class HateNum{
    public List hatenum(int[] arr){
        ArrayList list = new ArrayList(arr.length);
        for(int i=0;i<arr.length;i++){
            if(i>0){
                if(arr[i]==arr[i-1]){
                    continue;
                }
                else{
                    list.add(arr[i]);
                }
            }
            else{
                list.add(arr[i]);
            }
        }
        return list;
    }
}
