const canvas1 = document.getElementById('canvas1')
const ctx = canvas1.getContext('2d')
const width = canvas1.width
const height = canvas1.height
var style = getComputedStyle(document.body)
const primaryColor = style.getPropertyValue('--primary-color') 
const fillColor =  style.getPropertyValue('--fill-color')  
ctx.fillStyle = primaryColor;
ctx.fillRect(50,50,400,400); // rectangle with last fill color
ctx.strokeRect(40,40,420,420) //reactangle without fill
ctx.clearRect(200,200,100,100) //clears space


//color styles
ctx.fillStyle = '#0000ff'
ctx.fillRect(10,520,100,80)
ctx.fillStyle = '#0f0'
ctx.fillRect(110,520,100,80)
ctx.fillStyle = 'rgb(255,255,0)'
ctx.fillRect(210,520,100,80)
ctx.fillStyle = 'rgba(255,0,255,0.2)'
ctx.fillRect(310,520,100,80)

//lines , strokes
// ctx.fillStyle = '#1C6758'
ctx.fillStyle ='#F8EDE3'
ctx.strokeStyle = "#1C6758"
ctx.rect(500, 50,100,100)
ctx.fill()
ctx.stroke()

ctx.fillStyle ='#DFD3C3'
ctx.fillRect(610,50,100,100);
ctx.strokeRect(610,50,100,100)

//drawing lines

ctx.fillStyle ='#D0B8A8'
ctx.beginPath(610,50)
ctx.moveTo(720,50) //move pen
ctx.lineTo(720,150) //draw line
ctx.lineTo(820,150) //draw line
ctx.lineTo(820,50) //draw line
ctx.lineTo(720,50) //draw line
ctx.fill()
ctx.stroke()
ctx.closePath() 


//draw grid with lines
function drawGrid() {
	ctx.setLineDash([5]);
	ctx.strokeStyle ='rgba(0,0,0,0.1)'
	for(i=1; i< width/100; i++){
        ctx.beginPath(0,0)
	    ctx.moveTo(i*100,0) 
	    ctx.lineTo(i*100,height)  
	    ctx.moveTo(0,i*100) 
	    ctx.lineTo(width,i*100)  
	    ctx.stroke()
        ctx.closePath()
	}
}

//triangle with draw line
// ctx.setLineDash([]);

ctx.fillStyle ='#967E76'
ctx.beginPath(920,50)
ctx.moveTo(915,50) //move pen
ctx.lineTo(840,150) //draw line
ctx.lineTo(990,150) //draw line
ctx.lineTo(915,50) //draw line
ctx.fill()
ctx.stroke()
ctx.closePath() 

//Draw circle
function drawCircle(color,x,y,r, endAnlge = 2){
ctx.fillStyle =color
ctx.beginPath()
ctx.arc(x,y,r,0,endAnlge*Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath()}
drawCircle('#abc4ff', 550,250,50)
drawCircle('#edf2fb', 530,240,10)
drawCircle('#edf2fb', 570,240,10)
drawCircle('#edf2fb', 550,265,20, 1)
ctx.beginPath(530,265)
ctx.moveTo(530,265) //move pen
ctx.lineTo(570,265)
ctx.stroke()
ctx.closePath()
drawGrid()
