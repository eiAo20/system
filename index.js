var datas = [
	{
		userName:1234567,
		password:1234567
	},
	{
		userName:123456,
		password:123456
	}
]//这里是一个存放对象的数组，作为一个简易的数据库使用

var text = document.getElementsByClassName('inputText')
var login = document.getElementById('login')
login.onclick = function(){
	if(text[0].value == "admin"&&text[1].value == "admin"){
		window.location.href = '1.html'
	}
	else{
	for(var i = 0; i < datas.length;i++){
		if(text[0].value == datas[i].userName){
			for(var j = 0;j < datas.length;j++){
				if(text[1].value == datas[j].password){
					window.location.href = '2.html'
					}
				}
			
		}
	}
}
}