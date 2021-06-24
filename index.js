const text = document.querySelector('#text')
const style = document.querySelector('#style')
let string = `/* 你好，我是zdj，一名前端小白
* 这是我的一个小练习
* 首先准备一个div
**/
#taiji{
  border: 1px solid red;
  width:200px;
  height:200px;
  animation: ro 30s infinite ;
}
/* 接下来生成太极
 * 首先变成一个圆
 **/
#taiji{
  border-radius:50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 八卦由阴阳形成 */
#taiji{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个小球 */
#taiji::before{
  width: 100px;
  height: 100px;
  left:0;
  top:0;
  left:50%;
  border-radius:50%;
  background: #fff;
  transform:translateX(-50%);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
#taiji::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`
let n = 0
let string2 = ''
text.innerHTML = string.substring(0, n)

function step() {
  setTimeout(() => {
    // 判断是否有回车和空格
    if (string[n] === '\n') {
      string2 += '<br>'
    } else if (string[n] === ' ') {
      string2 += '&nbsp;'
    } else {
      string2 += string[n]
    }
    // 将文本给string2直接渲染在页面中，防止<br>的产生
    text.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    window.scrollTo(0, 99999)
    text.scrollTo(0, 99999)

    // html.scrollTo(0, 99999)
    // 如果n不是最后一个就继续循环
    if (n < string.length - 1) {
      n += 1
      step()
    }
  }, 0)
}
step()
