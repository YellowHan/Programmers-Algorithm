/*
* 직사각형 별찍기 :
*   표준 입력으로 두 개의 정수 n과 m이 주어질 때
*   별(*) 문자를 이용하여 가로의 길이가 n, 세로의 길이가 m인 직사각형을 출력
* 제한 조건 :
*   n과 m은 각각 1000 이하인 자연수
* */

fun main(args: Array<String>) {
    val (n, m) = readLine()!!.split(' ').map(String::toInt)
    for (i in 1..m) {
        for (i in 1..n) {
            print("*")
        }
        println()
    }
}