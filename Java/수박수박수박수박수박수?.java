// 수박수박수박수박수박수?
public class Q13 {
    public static void main(String[] args) {
        int n = 5;
        WaterMelon waterMelon = new WaterMelon();
        System.out.println(waterMelon.watermelon(n));
    }
}

class WaterMelon {
    public String watermelon(int n) {
        String answer = "";
        int j = 1;
        for(int i=0;i<n;i++){
            answer+= j*(-1)==-1? "수":"박";
            j=j*(-1);
        }
        return answer;
    }
}
