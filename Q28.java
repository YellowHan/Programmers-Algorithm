// 음양 더하기
public class Q28 {
    public static void main(String[] args) {
        int[] absolutes = {4,7,12};
        boolean[] signs = {true,false,true};
        Add add = new Add();
        System.out.println(add.add(absolutes,signs));
    }
}

class Add {
    public int add(int[] absolutes, boolean[] signs) {
        int answer = 0;
        for(int i=0;i<signs.length;i++){
            if(signs[i]==false){
                absolutes[i]*=-1;
            }
            answer+=absolutes[i];
        }
        return answer;
    }
}