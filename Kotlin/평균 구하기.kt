/*
* 평균 구하기 :
*   정수를 담고 있는 배열 arr의 평균값을 return 하는 함수 완성
* 제한 조건 :
*   arr의 길이 1 이상, 100이하인 배열
*   arr의 원소는 -10,000 이상 10,000이하인 정수
* */

fun main() {
    val arr = intArrayOf(1,2,3,4)
    val sol = Solution()
    println(sol.solution(arr))
}

class Solution {
    fun solution(arr: IntArray) : Double = arr.average()
}


