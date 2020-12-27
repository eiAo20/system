var datas = [
	{
		userName:"admin",
		password:"admin"
	},
	{
		userName:123456,
		password:123456
	}
]//这里是一个存放对象的数组，作为一个简易的数据库使用
var text = document.getElementsByClassName('inputText')
var login = document.getElementById('login')
login.onclick = function(){
	for(var i = 0; i < datas.length;i++){
		if(text[0].value == datas[i].userName){
			for(var j = 0;j < datas.length;j++){
				if(text[1].value == datas[j].password){
					window.location.href = '1.html'
				}else{
					alert('密码错误')
				}	
			}
		}else{
			alert('账号错误')
		}
	}
}


