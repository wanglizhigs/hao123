/*local 存取*/
var setValueInLocalStorage = function(key,value) {
	localStorage.setItem(key,value);
}
var getValueInLocalStorage = function(key) {
	return localStorage.getItem(key);
}

/*class获取对象*/
function $class(elClass){
	return document.getElementsByClassName(elClass);
}
/*id获取对象*/
function $id(elId){
	return document.getElementById(elId);
}
/*绑定事件*/
function addEvent(target,type,handler){
	if(target.addEventListener){
		target.addEventListener(type,handler,false);
	}else{
		target.attachEvent("on"+type,function(event){
			return handler.call(target,event);
		});
	}
}

/*添加删除样式*/
function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
  
function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}  
  
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
}  
function toggleClass(obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
}  
/*添加删除样式 end*/

var setSkin = function(){
	var skin = getValueInLocalStorage("color");
	if(skin != null && skin != ""){
		var _items = document.getElementsByClassName("check-item");
		for(var i = 0; i < _items.length; i++){
			if(hasClass(_items[i],skin)){
				addClass(_items[i],"selected");
			}else{
				removeClass(_items[i],"selected");
			}
		}
	
	
		var name = "wrap wrap-"+skin;
		$id("wrap").className = name; 
	}
}();


/*导航栏点击更换样式*/
addEvent($id("wrap-nav"),"click",function(e){
	var _lis = this.getElementsByTagName("li");
	for(var i = 0; i < _lis.length; i++){
		removeClass(
			_lis[i].getElementsByTagName("a")[0],
			"selected");
	}
	addClass(e.target,"selected");  
});

/*子导航样式*/
addEvent($id("sub-nav"),"click",function(e){
	if(!hasClass(e.target,"m-itemadd")){
		var _lis = this.getElementsByTagName("li");
		for(var i = 0; i < _lis.length; i++){
			removeClass(
				_lis[i].getElementsByTagName("a")[0],
				"selected");
		}
		addClass(e.target,"selected");
		
	
		
		var _citem = $class("c-item");
		for(var i = 0; i < _citem.length; i++){
			_citem[i].style.display = "none";
		}
		$class("c-"+e.target.parentNode.className)[0].style.display = "block";	
	}
});

/*皮肤样式*/
addEvent($class("check-box")[0],"click",function(e){
	if(e.target.id != ""){
		var _items = document.getElementsByClassName("check-item");
		for(var i = 0; i < _items.length; i++){
			removeClass(_items[i],"selected");
		}
		addClass(e.target,"selected");  
		setValueInLocalStorage("color",e.target.id);
		var name = "wrap wrap-"+e.target.id;
		$id("wrap").className = name; 
	}
});
































