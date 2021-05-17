//先抓到畫面上的cv元素//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡

function draw(){
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
}
draw()

//主體
ctx.beginPath()
      ctx.moveTo(75,200)
      ctx.lineTo(325,200)
      ctx.lineTo(325,350)
      ctx.lineTo(75,350)
    ctx.closePath()
    ctx.fillStyle="#E4B165"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()


//三角形尖塔
    ctx.beginPath()
      ctx.moveTo(75,200)
      ctx.lineTo(200,50)
      ctx.lineTo(325,200)
    ctx.closePath()
    ctx.fillStyle="red"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()


//三角形尖塔
    ctx.beginPath()
      ctx.moveTo(125,200)
      ctx.lineTo(200,50)
      ctx.lineTo(325,200)
    ctx.closePath()
    ctx.fillStyle="pink"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()

//三角形尖塔
    ctx.beginPath()
      ctx.moveTo(175,200)
      ctx.lineTo(200,50)
      ctx.lineTo(325,200)
    ctx.closePath()
    ctx.fillStyle="yellow"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()


//三角形尖塔
    ctx.beginPath()
      ctx.moveTo(225,200)
      ctx.lineTo(200,50)
      ctx.lineTo(325,200)
    ctx.closePath()
    ctx.fillStyle="pink"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()

//三角形尖塔
    ctx.beginPath()
      ctx.moveTo(275,200)
      ctx.lineTo(200,50)
      ctx.lineTo(325,200)
    ctx.closePath()
    ctx.fillStyle="red"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()

//拱門的城門
      ctx.fillStyle = "white"
      ctx.fillRect(100,225,25,25)
      ctx.strokeRect(100,225,25,25)
      ctx.fillRect(150,225,25,25)
      ctx.strokeRect(150,225,25,25)
      ctx.fillRect(225,225,25,25)
      ctx.strokeRect(225,225,25,25)
      ctx.fillRect(275,225,25,25)
      ctx.strokeRect(275,225,25,25)


//拱門繪製
  ctx.beginPath()
   
    //圓弧拱門
    
    ctx.arc(200,350,50,Math.PI*2,Math.PI,true)
    //左半邊
    ctx.lineTo(150,350)
    ctx.lineTo(100,350)
    ctx.closePath()
    ctx.fillStyle="white"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()

//旗子
      ctx.beginPath()
        ctx.moveTo(200,50)
        ctx.lineTo(200,25-mouse.y/5)
        ctx.lineTo(225,40-(time%3)-mouse.y/5)
        ctx.lineTo(200,40-mouse.y/5)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()  

//車子
    ctx.fillStyle="white"
    let carx = time%440-40
    ctx.fillRect(carx,340,40,25)
    ctx.strokeRect(carx,340,40,25)
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+30,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
  
    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})



 






