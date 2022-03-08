/*
* x만큼 간격이 있는 n개의 숫자 :
*   정수 x와 자연수 n을 입력 받아, x부터 시작하여 x씩 증가하는 숫자 n개를 가지는 리스트를 리턴
* 제한 조건 :
*   x는 -10000000 이상, 10000000 이하인 정수
*   n은 1000 이하인 자연수
* */

fun main() {
    val x = 1
    val n = 1

    val sol = Solution()
    println(sol.solution(x, n))
}

class Solution {
    fun solution(x: Int, n: Int): ArrayList<Long> {
        val answer = arrayListOf<Long>()
        for (i in 1..n) {
            answer.add((x*i.toLong()))
        }
        return answer
    }
}