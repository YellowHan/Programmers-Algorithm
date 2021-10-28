// 서울에서 김서방 찾기
public class Q16 {
	public static void main(String[] args) {
		String[] seoul = {"Jane","Han","Kim"};
		FindKim kim = new FindKim();
		System.out.println(kim.kim(seoul));
	}
}
class FindKim {
    public String kim(String[] seoul) {
    	String answer = "";
        for(int i=0;i<seoul.length;i++) {
        	if(seoul[i].equals("Kim")) {
        		answer = "김서방은 "+(i)+"에 있다";
        	}
        }
        return answer;
    }
}
