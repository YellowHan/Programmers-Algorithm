/*
* 나머지가 1이 되는 수 찾기 :
*   자연수 n이 매개변수로 주어질 때
*   n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하는 함수 완성
* 제한 조건 :
*   3 ≤ n ≤ 1,000,000
* */

fun main() {
    val n = 12

    val sol = Solution()
    println(sol.solution(n))
}

class Solution {
    fun solution(n: Int): Int {
        var result = 0
        for (i in 1..n) {
            if(n % i == 1) {
                result = i
                break
            }
        }
        return result
    }
}