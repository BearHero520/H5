!new function() {
	var a = this;
	a.width = 750, a.fontSize = 100, a.widthProportion = function() {
		var b = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0]
			.offsetWidth) / a.width;
		return b > 1 ? 1 : b
	}, a.changePage = function() {
		document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + a.widthProportion() * a
			.fontSize + "px !important")
	}, a.changePage(), window.addEventListener("resize", function() {
		a.changePage()
	}, !1)
};

!function(o,l){var r,a,s="createElement",g="getElementsByTagName",b="length",E="style",d="title",y="undefined",k="setAttribute",w="getAttribute",x=null,A="__HeroSVG",C="--inject-",S=new RegExp(C+"\\d+","g"),I="LOAD_FAIL",t="SVG_NOT_SUPPORTED",L="SVG_INVALID",v=["src","alt","onload","onerror"],j=l[s]("a"),G=typeof SVGRect!=y,f={useCache:!0,copyAttributes:!0,makeIdsUnique:!0},N={clipPath:["clip-path"],"color-profile":x,cursor:x,filter:x,linearGradient:["fill","stroke"],marker:["marker",
		"marker-end","marker-mid","marker-start"],mask:x,pattern:["fill","stroke"],radialGradient:["fill","stroke"]},u=1,c=2,O=1;function T(e){return(r=r||new XMLSerializer).serializeToString(e)}function P(e,r){var t,n,i,o,a=C+O++,f=/url\("?#([a-zA-Z][\w:.-]*)"?\)/g,u=e.querySelectorAll("[id]"),c=r?[]:x,l={},s=[],d=!1;if(u[b]){for(i=0;i<u[b];i++)(n=u[i].localName)in N&&(l[n]=1);for(n in l)(N[n]||[n]).forEach(function(e){s.indexOf(e)<0&&s.push(e)});s[b]&&s.push(E);var v,p,m,h=e[g]("*"),y=e;for(i=-1;y!=x;
){if(y.localName==E)(m=(p=y.textContent)&&p.replace(f,function(e,r){return c&&(c[r]=1),"url(#"+r+a+")"}))!==p&&(y.textContent=m);else if(y.hasAttributes()){for(o=0;o<s[b];o++)v=s[o],(m=(p=y[w](v))&&p.replace(f,function(e,r){return c&&(c[r]=1),"url(#"+r+a+")"}))!==p&&y[k](v,m);["xlink:href","href"].forEach(function(e){var r=y[w](e);/^\s*#/.test(r)&&(r=r.trim(),y[k](e,r+a),c&&(c[r.substring(1)]=1))})}y=h[++i]}for(i=0;i<u[b];i++)t=u[i],c&&!c[t.id]||(t.id+=a,d=!0)}return d}function V(e,r,t,n){if(r){
	r[k]("data-inject-url",t);var i=e.parentNode;if(i){n.copyAttributes&&function c(e,r){for(var t,n,i,o=e.attributes,a=0;a<o[b];a++)if(n=(t=o[a]).name,-1==v.indexOf(n))if(i=t.value,n==d){var f,u=r.firstElementChild;u&&u.localName.toLowerCase()==d?f=u:(f=l[s+"NS"]("http://www.w3.org/2000/svg",d),r.insertBefore(f,u)),f.textContent=i}else r[k](n,i)}(e,r);var o=n.beforeInject,a=o&&o(e,r)||r;i.replaceChild(a,e),e[A]=u,m(e);var f=n.afterInject;f&&f(e,a)}}else D(e,n)}function p(){for(var e={},r=arguments,
																																																																																																																									   t=0;t<r[b];t++){var n=r[t];for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])}return e}function _(e,r){if(r){var t;try{t=function i(e){return(a=a||new DOMParser).parseFromString(e,"text/xml")}(e)}catch(o){return x}return t[g]("parsererror")[b]?x:t.documentElement}var n=l.createElement("div");return n.innerHTML=e,n.firstElementChild}function m(e){e.removeAttribute("onload")}function n(e){console.error("HeroSVG: "+e)}function i(e,r,t){e[A]=c,t.onFail?t.onFail(e,r):n(r)}function D(e,r){m(e),i(e,L,r)
}function F(e,r){m(e),i(e,t,r)}function M(e,r){i(e,I,r)}function q(e){e.onload=x,e.onerror=x}function R(e){n("no img element")}var e=function z(e,r){var t=p(f,r),h={};function n(a,f){f=p(t,f);var e=function(r){var e=function(){var e=f.onAllFinish;e&&e(),r&&r()};if(a&&typeof a[b]!=y){var t=0,n=a[b];if(0==n)e();else for(var i=function(){++t==n&&e()},o=0;o<n;o++)u(a[o],f,i)}else u(a,f,e)};return typeof Promise==y?e():new Promise(e)}function u(u,c,e){if(u){var r=u[A];if(r)Array.isArray(r)?r.push(e
):e();else{if(q(u),!G)return F(u,c),void e();var t=c.beforeLoad,n=t&&t(u)||u[w]("src");if(!n)return""===n&&M(u,c),void e();var i=[];u[A]=i;var l=function(){e(),i.forEach(function(e){e()})},s=function f(e){return j.href=e,j.href}(n),d=c.useCache,v=c.makeIdsUnique,p=function(r){d&&(h[s].forEach(function(e){e(r)}),h[s]=r)};if(d){var o,a=function(e){if(e===I)M(u,c);else if(e===L)D(u,c);else{var r,t=e[0],n=e[1],i=e[2];v&&(t===x?(t=P(r=_(n,!1),!1),e[0]=t,e[2]=t&&T(r)):t&&(n=function o(e){
	return e.replace(S,C+O++)}(i))),r=r||_(n,!1),V(u,r,s,c)}l()};if(typeof(o=h[s])!=y)return void(o.isCallbackQueue?o.push(a):a(o));(o=[]).isCallbackQueue=!0,h[s]=o}!function m(e,r,t){if(e){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState){var e=n.status;200==e?r(n.responseXML,n.responseText.trim()):400<=e?t():0==e&&t()}},n.open("GET",e,!0),n.send()}}(s,function(e,r){var t=e instanceof Document?e.documentElement:_(r,!0),n=c.afterLoad;if(n){var i=n(t,r)||t;if(i){
	var o="string"==typeof i;r=o?i:T(t),t=o?_(i,!0):i}}if(t instanceof SVGElement){var a=x;if(v&&(a=P(t,!1)),d){var f=a&&T(t);p([a,r,f])}V(u,t,s,c)}else D(u,c),p(L);l()},function(){M(u,c),p(I),l()})}}else R()}return G&&function i(e){var r=l[g]("head")[0];if(r){var t=l[s](E);t.type="text/css",t.appendChild(l.createTextNode(e)),r.appendChild(t)}}('img[onload^="'+e+'("]{visibility:hidden;}'),n.setOptions=function(e){t=p(t,e)},n.create=z,n.err=function(e,r){e?e[A]!=c&&(q(e),G?(m(e),M(e,t)):F(e,t),r&&(m(
	e),e.src=r)):R()},o[e]=n}("HeroSVG");"object"==typeof module&&"object"==typeof module.exports&&(module.exports=e)}(window,document);
/* 手机号码自动加空格 */
$(function(){
	$('.tel').on('keyup', function() {
		var that = $(this);
		var value = that.val();
		value = value.replace(/[^0-9]/ig, "");
		var arr = value.split('');
		if (arr.length >= 4) {
			arr.splice(3, 0, ' ');
		}
		if (arr.length >= 9) {
			arr.splice(8, 0, ' ');
		}
		value = arr.join('');
		that.val(value);
	});
})

/* 手机号码自动加空格end */
/* 对话框stare */
function del_mask() {
	$('.mask').fadeOut();
	$('body').removeClass('body_no')
}

function dialog(state, t, c, l, r, f) {

	// console.log(state,"state")
	// console.log(t,"t")
	// console.log(c,"c")
	// console.log(l,"l")
	// console.log(r,"r")
	// console.log(f,"f")
	$('.mask').remove();
	if (state == 'text') {
		//state-内容，t-标题，c-内容，l-取消，r-确认 f-方法
		var html = ""
		html += '<div class="mask">'
		html += '<div class="delAbsolute" onclick="del_mask()"></div>'
		html += '<div class="dialogbox f_15"><div>'
		html += '<div class="c_h_33 dialogbox_title">' + t + '</div>'
		html += '<div class="c_h_66 f_14 dialogbox_content">' + c + '</div>'
		html += '</div>'
		html += '<div class="dialogbox_btn">'
		html += '<div class="dialogbox_btn_l" onclick="del_mask()">' + l + '</div>'
		html += '<div class="dialogbox_btn_r c_r_FC" onclick=' + f + '>' + r + '</div>'
		html += '</div></div></div>'
	} else if (state == 'icon') {
		var html = ''
		html += '<div class="mask">'
		html += '<div class="delAbsolute" onclick="del_mask()"></div>'
		html += '<div class="dialogbox f_15"><div>'
		html += '<div class="dialogbox_icon">'
		html +=
			'<i><svg class="icon" style="width:0.5rem;height:0.4rem;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1229 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2559"><path d="M601.183 41.659c-263.134 0-476.478 213.339-476.478 476.478s213.339 476.48 476.478 476.48c263.135 0 476.48-213.339 476.48-476.48-0.001-263.134-213.339-476.478-476.48-476.478v0zM804.422 670.562c14.014 14.014 14.014 36.806 0 50.82s-36.801 14.014-50.82 0l-152.426-152.437-152.423 152.426c-14.014 14.014-36.801 14.014-50.82 0s-14.023-36.806 0-50.82l152.426-152.426-152.426-152.426c-14.023-14.014-14.023-36.801 0-50.815 14.025-14.023 36.806-14.023 50.82 0l152.423 152.426 152.426-152.426c14.023-14.023 36.806-14.023 50.82 0 14.014 14.014 14.014 36.801 0 50.815l-152.426 152.426 152.426 152.437z" fill="#FC3964" p-id="2560"></path></svg>'
		html += '</i>' + t + '</div>'
		html += '</div>'
		html += '<div class="dialogbox_btn">'
		html += '<div class="dialogbox_btn_l" onclick="del_mask()">' + c + '</div>'
		html += '<div class="dialogbox_btn_r c_r_FC" onclick=' + r + '>' + l + '</div>'
		html += '</div></div></div>'
	} else if (state == 'Qtext') {
		/* 强提醒 */
		var html = ''
		html += '<div class="mask">'
		html += '<div class="delAbsolute" onclick="del_mask()"></div>'
		html += '<div class="dialogbox f_15"><div>'
		html += '<div class="c_h_33 dialogbox_title">' + t + '</div>'
		html += '</div>'
		html += '<div class="dialogbox_btn">'
		html += '<div class="dialogbox_btn_r c_r_FC" onclick="del_mask()">' + c + '</div>'
		html += '</div></div></div>'
	}
	$('body').addClass('body_no')
	$('body').append(html);
	$('.mask').fadeIn();
	$('.dialogbox').fadeIn(1000);
}
/*对话框end*/
// $(".selectInput").on('input oninput', function() {
// 	$(this).val().length > 0 ? $('.inserticon_del').fadeIn() : $('.inserticon_del').fadeOut('slow');
// })
// $(".inserticon_del").on('click', function() {
// 	$(".selectInput").val('');
// 	$('.selectInput').trigger('oninput')
// 	$(this).fadeOut('slow');
// })

function textTip(str, t, callBack) {
	$('.text-tip').remove();
	t = t || 2000;
	var dom = document.createElement("p");
	dom.setAttribute('class', 'text-tip');
	document.body.appendChild(dom);
	var mytip = document.querySelector('.text-tip')

	mytip.style.display = "block";
	mytip.innerHTML = str;

	setTimeout(function() {
		mytip.style.display = "none";
		// mytip.parentNode.removeChild(mytip);
		if (callBack) {
			callBack();
		}
	}, t);
}

class Hero{
	constructor(options) {
		this.m = 1;
		this.HeroArr; //放传入数组用的
		this.HeroMonitorArr = []; //放处理数组用的  放sonid
		this.structure = []; //放父di，子id,名称
		this.choiceinput; //放点击时的input id	value:"9"
		this.mostnum; //最多存放数据
		this.SelectManyName=[];//放name名字的
		this.SelectManyOld=[]//放外部数组用的
		this.selectvalue=[]//放数组value值用的
		this.selectnum;//限制选择次数
		this.SelectManyInput;
		
	}



/* treeSelect  stare */
Heroinitialization(num,name) {
	console.log(this.m)
	name = name || '分类选择'
	$('body').addClass('body_no')
	var html = `<div class="Hero_maxBox_choice" style="display: none;" id="Hero_maxBox_choice"><div class="Bottom_pop_up" onclick="HeroFun.Hero_Close()"></div><div class="Hero_popup Hero-popup--bottom Hero-action-Box Hero-popup--round"><div class="Hero_header f_18 title_left">${name}<span class="c_h_99 f_12" style="margin-left: 0.1rem;font-weight:normal">最多可选${num}个</span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"  class="Hero_icon"  onclick="HeroFun.Hero_Close()"><defs><style>.cls-1 {fill: #333;fill-rule: evenodd;}</style></defs><path id="圆角矩形_992_拷贝" data-name="圆角矩形 992 拷贝" class="cls-1" d="M5972.88,2503l10.71,10.71a1.33,1.33,0,1,1-1.88,1.88L5971,2504.88l-10.71,10.71a1.337,1.337,0,0,1-2.25-.59,1.34,1.34,0,0,1,.36-1.29l10.71-10.71-10.71-10.71a1.358,1.358,0,0,1-.36-1.3,1.33,1.33,0,0,1,2.25-.58l10.71,10.7,10.71-10.7a1.33,1.33,0,1,1,1.88,1.88Z" transform="translate(-5958 -2490)"/></svg></div><div class="content"><div class="flex" style="padding: 0 0.4rem;align-items: flex-start;"><div class="f_16 c_h_99" style="width:1rem;">已选</div><div class="flex_1 HeroSelectBox"></div></div><div class="max_box_z flex_align" style="height: 4.6rem;background: #F6F6F6;padding-right: 0rem;overflow: hidden;"><div class="choice_left "></div><div class="choice_right flex_1 c_bg_FF of_y " style="height:100%;padding: 0 0.6rem;"></div></div><div class="h_65 max_box flex_align box_shadow"><button type="button" class="MaxBtn c_bg_FC f_15" onclick="HeroFun.choice_on()">确定</button></div></div></div></div>`
	$('#Hero_maxBox_choice').remove();
	$('body').append(html);
	$('#Hero_maxBox_choice').fadeIn();
}

 Hero_Close() {
	$('#Hero_maxBox_choice').fadeOut(200);
	$('body').removeClass()
}
//数据格式[{type:"名字",son[{name:"子名字1",value:"9"},{name:"子名字2",value:"1"}]}]
//注意，子名字不能有重复的

handleArr(temp,t,num,name) {
	name = name || '分类选择'
	/* 处理数据 */
	this.mostnum = num || 6;
	// 初始化 弹窗数据
	this.Heroinitialization(this.mostnum,name)
	/* $('.choice_left').html('')
    $('.HeroSelectBox').html('') */
	this.choiceinput = "";
	this.HeroMonitorArr = [];
	this.structure = []
	this.HeroArr = []
	// console.log(this.choiceinput,"this.choiceinput",this.HeroMonitorArr,"this.HeroMonitorArr",this.structure,"this.structure",this.HeroArr,"this.HeroArr")
	// console.log($(t).data("all"),$(t).data("value"))
	this.choiceinput = t; //将当前指项储存
	if ($(t).data("value") != null && $(t).data("value") != undefined && $(t).data("value") != "") {
		//这里做回显
		this.structure = this.deepClone($(t).data("all"))
		this.HeroMonitorArr = this.deepClone($(t).data("value"))
		let arr = $(t).data('all')
		// console.log(arr,"arr")
		arr.filter(k => {
			let card = '<div class="HeroSeclctText c_bg_ffeaef c_r_FC" data-fid="' + k.fid + '" data-son="' + k
				.son + '" onclick="HeroFun.removrSelf(this)">' + k.name + '</div>'
			$('.HeroSelectBox').append(card)
		})
	}
	this.HeroArr = temp;
	let thatHeroMonitorArr;
	 thatHeroMonitorArr=this.HeroMonitorArr;
	this.HeroArr.filter((k, v) => {
		let num = k.son.filter(function(n) {
			console.log(this)
			return thatHeroMonitorArr.indexOf(parseInt(n.value)) != -1
		});
		if (num.length > 0) {
			let html = '';
			html += '<div class="c_h_99 leftChoiceBox" data-fid="' + k.value +
				'" onclick="HeroFun.choiceSelect(this,' + v + ')">'
			html += '<div>' + k.type + '</div><div class="tipsNumber c_bg_FC" style="display: block;">' + num
				.length + '</div>'
			html += '</div>'
			$('.choice_left').append(html)
		} else {
			let html = '';
			html += '<div class="c_h_99 leftChoiceBox" data-fid="' + k.value +
				'" onclick="HeroFun.choiceSelect(this,' + v + ')">'
			html += '<div>' + k.type + '</div><div class="tipsNumber c_bg_FC">' + num.length + '</div>'
			html += '</div>'
			$('.choice_left').append(html)
		}

	})
	//默认选中第一个
	/* choiceSelect(this,0) */
	$('.leftChoiceBox').eq(0).trigger('click');
	$('.choice_left').children().eq(0).addClass('c_bg_FF')
}

choiceSelect(t, index) {
	let fid = $(t).data('fid') //获取点击时的父级id
	$('.leftChoiceBox').removeClass('c_bg_FF');
	$(t).addClass('c_bg_FF')
	//开始处理详细数据
	//清空html,
	//根据选择数组做数据回显
	//
	$('.choice_right').html('')
	this.HeroArr[index].son.forEach((k, v) => {
		if (this.HeroMonitorArr.includes(parseInt(k.value))) {
			let html = '';
			html += '<div class="h_45 f_16 c_h_66 flex_align reason" data-fid="' + fid + '"  data-son="' + k
				.value + '"  onclick="HeroFun.HeroSelect(this)">'
			html += '<div class="flex_1 flex_align c_r_FC">' + k.name +
				'</div> <div class="honggo" style="display: block;"></div>'
			html += '</div>'
			$('.choice_right').append(html)
		} else {
			let html = '';
			html += '<div class="h_45 f_16 c_h_66 flex_align reason" data-fid="' + fid + '" data-son="' + k
				.value + '" onclick="HeroFun.HeroSelect(this)">'
			html += '<div class="flex_1 flex_align">' + k.name + '</div> <div class="honggo"></div>'
			html += '</div>'
			$('.choice_right').append(html)
		}
	})
}

HeroSelect(t) {
	let son = $(t).data("son"); //当前子id
	let fid = $(t).data("fid"); //当前父id
	let name = $(t).children().text()
	let state = this.HeroMonitorArr.includes(parseInt(son))
	if (!state && this.HeroMonitorArr.length < this.mostnum) {
		let a = $(".leftChoiceBox[data-fid=" + fid + "]")
		this.HeroMonitorArr.push(son)
		// this.HeroMonitorArr.push('233333')
		$(t).children().eq(0).addClass('c_r_FC');
		$(t).children().eq(1).show()
		let num = $(".leftChoiceBox[data-fid=" + fid + "]").children().eq(1).show().text()
		num++;
		$(".leftChoiceBox[data-fid=" + fid + "]").children().eq(1).show().text(num)
		let card = '<div class="HeroSeclctText c_bg_ffeaef c_r_FC" data-fid="' + fid + '" data-son="' + son +
			'" onclick="HeroFun.removrSelf(this)">' + name + '</div>'
		$('.HeroSelectBox').append(card)

		let temp = {}
		temp.name = name;
		temp.fid = fid;
		temp.son = son;
		this.structure.push(temp)
	} else if (state) {
		this.structure = this.structure.filter((k, v) => {
			if (son != k.son) {
				return k
			}
		})

		this.HeroMonitorArr.splice(this.HeroMonitorArr.indexOf(parseInt(son)), 1)
		$(t).children().eq(0).removeClass('c_r_FC');
		$(t).children().eq(1).hide()
		let num = $(".leftChoiceBox[data-fid=" + fid + "]").children().eq(1).show().text()
		num--;
		$(".leftChoiceBox[data-fid=" + fid + "]").children().eq(1).show().text(num)
		num == 0 ? $(".leftChoiceBox[data-fid=" + fid + "]").children().eq(1).hide() : "";
		$(".HeroSeclctText[data-son=" + son + "]").remove();

	}
}

removrSelf(t) {
	let son = $(t).data("son"); //当前子id
	let fid = $(t).data("fid"); //当前父id
	let num = $(".leftChoiceBox[data-fid=" + fid + "]").children().eq(1).show().text()
	num--;
	$(".leftChoiceBox[data-fid=" + fid + "]").children().eq(1).show().text(num)
	num == 0 ? $(".leftChoiceBox[data-fid=" + fid + "]").children().eq(1).hide() : "";
	$(".reason[data-son=" + son + "]").children().eq(0).removeClass('c_r_FC')
	$(".reason[data-son=" + son + "]").children().eq(1).hide();
	this.structure = this.structure.filter((k, v) => {
		if (son != k.son) {
			return k
		}
	})
	$(t).remove();
	this.HeroMonitorArr.splice(this.HeroMonitorArr.indexOf(parseInt(son)), 1)
}

/* 	$('.choice_on').on('click', function() {

    }) */

choice_on() {

	$(this.choiceinput).data('all', this.structure)
	$(this.choiceinput).data('value', this.HeroMonitorArr)
	let nameArr = [];
	this.structure.filter((k, v) => {
		nameArr.push(k.name)
	})

	$(this.choiceinput).val(nameArr.toString().replace(/,/g, "/"))
	$('.Hero_maxBox_choice').fadeOut(200);
	$('body').removeClass()

}
/* treeSelect  end */
/* textarea 文字计算 */
textareaFun(t) {
	let num = $(t).val().length;
	$(t).next().text(num + '/200')
	if (num == 200) {
		$(t).next().css('color', '#FC3964')
	} else {
		$(t).next().css('color', '#8c8c8c')
	}
}
/* textarea 文字计算 */

deepClone(o) {
	// 判断如果不是引用类型，直接返回数据即可
	if (typeof o === 'string' || typeof o === 'number' || typeof o === 'boolean' || typeof o === 'undefined') {
		return o
	} else if (Array.isArray(o)) { // 如果是数组，则定义一个新数组，完成复制后返回
		// 注意，这里判断数组不能用typeof，因为typeof Array 返回的是object
		//console.log(typeof [])  // --> object
		var _arr = []
		o.forEach(item => { _arr.push(item) })
		return _arr
	} else if (typeof o === 'object') {
		var _o = {}
		for (let key in o) {
			_o[key] = this.deepClone(o[key])
		}
		return _o
	}
}
addtimeAndSlideBox(name){
	name = name ||'选择器';
	$('body').addClass('body_no')
	let html=`<div class="HeroMax" style="display: none;" id="HeroMax"><div class="Bottom_pop_up" onclick="HeroFun.clean_up_mui()"></div><div class="Hero_popup Hero-popup--bottom Hero-action-Box Hero-popup--round"><div class="Hero_header f_18 title_left"><span class="f_18">${name}</span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" class="Hero_icon close_icon" onclick="HeroFun.clean_up_mui()"><defs><style>.cls-1 {fill: #333;fill-rule: evenodd;}</style></defs><path id="圆角矩形_992_拷贝" data-name="圆角矩形 992 拷贝" class="cls-1" d="M5972.88,2503l10.71,10.71a1.33,1.33,0,1,1-1.88,1.88L5971,2504.88l-10.71,10.71a1.337,1.337,0,0,1-2.25-.59,1.34,1.34,0,0,1,.36-1.29l10.71-10.71-10.71-10.71a1.358,1.358,0,0,1-.36-1.3,1.33,1.33,0,0,1,2.25-.58l10.71,10.7,10.71-10.7a1.33,1.33,0,1,1,1.88,1.88Z" transform="translate(-5958 -2490)"/></svg></div><div class="content" style="height: 232px;"></div></div></div>`
	$('#HeroMax').remove();
	$('body').append(html);
	$('#HeroMax').fadeIn();
}
clean_up_mui(){
	//去除复用mui时在页面越来越多的问题
	$('.HeroMax').fadeOut(200);
	$('.mui-dtpicker').remove();
	$('.mui-backdrop').remove();
	$('.mui-poppicker').remove();
	$('body').removeClass();
}
/* ================================带搜索的多个滑动选择器================================== */
addSlidingSearch(name){
	name = name ||'选择器';
	$('body').addClass('body_no')
	let html=`<div class="Hero_maxBoxSelectMany" id="Hero_maxBoxSelectMany" style="display: none;"><div class="Bottom_pop_up" onclick="HeroFun.Hero_maxBoxSelectManyDel()"></div><div class="Hero_popup Hero-popup--bottom Hero-action-Box Hero-popup--round"><div class="Hero_header f_18 title_left" style="font-weight: bold;"><span id="selectManyTitle">${name}</span><span style="position: relative;"><input placeholder="请输入搜索内容" class="selectInput" oninput="HeroFun.selectArrfilter(this)"/><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"  class="inserticon"><path id="圆角矩形_1129" data-name="圆角矩形 1129" d="M3475.586,5070.74c-.247.257-.52.12-.766-.129l-2.393-2.45a5.641,5.641,0,0,1-3.754,1.479,5.836,5.836,0,0,1-5.781-4.492,5.9,5.9,0,0,1,3.1-6.669,5.79,5.79,0,0,1,7.118,1.612,5.926,5.926,0,0,1-.022,7.365l2.409,2.467a.55.55,0,0,1,.093.817Zm-6.913-11.786a4.81,4.81,0,0,0-4.486,2.957,4.892,4.892,0,0,0,1,5.313,4.777,4.777,0,0,0,5.25,1.08,4.857,4.857,0,0,0,2.983-4.493,4.808,4.808,0,0,0-4.751-4.857Z" transform="translate(-3462.726 -5057.877)" fill="#b9b9b9" fill-rule="evenodd"/></svg><svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve"  class="inserticon_del" onclick="HeroFun.closeChaIcon(this)"><style type="text/css">.st0{opacity:0.3;fill-rule:evenodd;clip-rule:evenodd;enable-background:new    ;}.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style><path class="st0" d="M15,0c8.3,0,15,6.7,15,15s-6.7,15-15,15S0,23.3,0,15S6.7,0,15,0L15,0z"/><path class="st1" d="M21.8,20.8L16,15l5.8-5.8C22,9,22,8.8,22,8.5c0-0.1-0.1-0.3-0.2-0.3c-0.3-0.3-0.7-0.3-1,0L15,14L9.2,8.2C9,8,8.8,7.9,8.5,8C8.3,8.1,8.1,8.3,8,8.5C7.9,8.8,8,9,8.2,9.2L14,15l-5.8,5.8C8,20.9,7.9,21.2,8,21.5c0.1,0.2,0.3,0.4,0.5,0.5c0.3,0,0.5,0,0.7-0.2L15,16l5.8,5.8c0.3,0.3,0.7,0.3,1,0C22.3,21.3,21.8,20.8,21.8,20.8z"/></svg></span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" class="Hero_icon" style="margin-top: 0.15rem;" onclick="HeroFun.Hero_maxBoxSelectManyDel()"><defs><style>.cls-1 {fill: #333;fill-rule: evenodd;}</style></defs><path id="圆角矩形_992_拷贝" data-name="圆角矩形 992 拷贝" class="cls-1" d="M5972.88,2503l10.71,10.71a1.33,1.33,0,1,1-1.88,1.88L5971,2504.88l-10.71,10.71a1.337,1.337,0,0,1-2.25-.59,1.34,1.34,0,0,1,.36-1.29l10.71-10.71-10.71-10.71a1.358,1.358,0,0,1-.36-1.3,1.33,1.33,0,0,1,2.25-.58l10.71,10.7,10.71-10.7a1.33,1.33,0,1,1,1.88,1.88Z" transform="translate(-5958 -2490)"/></svg></div><div class="content"><div class="flex" style="padding: 0 0.4rem;align-items: flex-start;"><div class="f_16 c_h_99" style="width:1rem;">已选</div><div class="flex_1 SelectManyBox flex_wrap"></div></div><div class="max_box of_y SelectMany" style="height:4rem;padding: 0"></div>'<div class="h_65 max_box flex_align box_shadow"><button type="button" class="MaxBtn c_bg_FC f_15" onclick="HeroFun.Hero_maxBoxSelectManyOn()">确定</button></div></div></div></div>`
	$('#Hero_maxBoxSelectMany').remove();
	$('body').append(html);
	$('#Hero_maxBoxSelectMany').fadeIn();
}

Hero_maxBoxSelectManyOn(){
	$(this.SelectManyInput).data('value',this.selectvalue)
	$(this.SelectManyInput).data('name',this.SelectManyName)
	$(this.SelectManyInput).val(this.SelectManyName.toString().replace(/,/g, "/"))
	$('#Hero_maxBoxSelectMany').fadeOut()
	$('body').removeClass()
}
Hero_maxBoxSelectManyDel(){
	$('#Hero_maxBoxSelectMany').fadeOut(200);
	$('body').removeClass();
}


//带搜索的弹出层stare

HeroSelectManyFun(name,arr,t,num){
	this.addSlidingSearch(name);//初始化
	num==undefined?num=6:num==num;
	this.SelectManyOld=arr;
	this.selectnum=num;
	this.SelectManyName=[];
	this.selectvalue=[];
	this.SelectManyInput='';
	this.SelectManyInput=t;
	if($(t).data('value')!=undefined && $(t).data('value')!=null && $(t).data('value')!=""){
		this.selectvalue= this.deepClone($(t).data("value"))
		this.SelectManyName=this.deepClone($(t).data('name'))
	}

	/* 	$('#selectManyTitle').text(name) */


	arr.filter((k,v)=>{
		if (this.selectvalue.includes(parseInt(k.value))) {
			let card='<div class="HeroSeclctText c_bg_ffeaef c_r_FC" data-value="'+k.value+'" onclick="HeroFun.selectRemovrSelf(this)">'+k.name+'</div>'
			$('.SelectManyBox').append(card)

			let html='';
			html +='<div class="h_45 f_15 c_h_66 flex_align reason reason_red" data-value="'+k.value+'" style="padding: 0rem 0.3rem;" onclick="HeroFun.selectmanyFun(this,'+this.selectnum+')">'
			html +='<div class="flex_1 flex_align">'+k.name+'</div> <div class="honggo" style="display: block;"></div>'
			html +='</div>'
			$('.SelectMany').append(html)
		}else{
			let html='';
			html +='<div class="h_45 f_15 c_h_66 flex_align reason" style="padding: 0rem 0.3rem;" data-value="'+k.value+'" onclick="HeroFun.selectmanyFun(this,'+num+')">'
			html +='<div class="flex_1 flex_align">'+k.name+'</div> <div class="honggo"></div>'
			html +='</div>'
			$('.SelectMany').append(html)
		}
	})
}
selectmanyFun(t,num){
	let value = $(t).data('value')
	let temp=$(t).children().eq(0).text()
	let state = this.SelectManyName.includes(temp)
	if(!state && this.SelectManyName.length<num){
		this.SelectManyName.push(temp)
		this.selectvalue.push(value)
		$(t).toggleClass('reason_red')
		$(t).children('.honggo').show()
		let card='<div class="HeroSeclctText c_bg_ffeaef c_r_FC" data-value="'+value+'" onclick="HeroFun.selectRemovrSelf(this)">'+temp+'</div>'
		$('.SelectManyBox').append(card)
	}else if(state){
		this.SelectManyName.splice(this.SelectManyName.indexOf(temp), 1)
		this.selectvalue.splice(this.selectvalue.indexOf(parseInt(value)), 1)
		$(t).toggleClass('reason_red')
		$(t).children('.honggo').hide()
		for(let i=0;i<$('.SelectManyBox').children().length;i++){
			if($('.SelectManyBox').children().eq(i).text()==temp){
				$('.SelectManyBox').children().eq(i).remove();
			}
		}
	}
}
selectRemovrSelf(t){
	let value=$(t).data("value")
	this.selectvalue.splice(this.selectvalue.indexOf(parseInt(value)), 1)
	let Tname=$(t).text();
	let count=$('.SelectMany').children().length;
	for (let i = 0; i < count; i++) {
		if($('.SelectMany').children().eq(i).children().eq(0).text()==Tname){
			$('.SelectMany').children().eq(i).toggleClass('reason_red')
			$('.SelectMany').children().eq(i).children().eq(1).hide()
		}
	}
	$(t).remove();
	this.SelectManyName.splice(this.SelectManyName.indexOf($(t).text()), 1)
}
selectArrfilter(t){
	$(t).val().length > 0 ? $('.inserticon_del').fadeIn() : $('.inserticon_del').fadeOut('slow');
	let selectname=$(t).val();
	let temp = this.SelectManyOld.filter( array  => array.name.match ( selectname ))
	$('.SelectMany').html('')
	temp.filter((k,v)=>{
		if(this.SelectManyName.includes(k.name)){
			let html='';
			html +='<div class="h_45 f_15 c_h_66 flex_align reason reason_red" data-value="'+k.value+'" style="padding: 0rem 0.3rem;" onclick="HeroFun.selectmanyFun(this,'+this.selectnum+')">'
			html +='<div class="flex_1 flex_align">'+k.name+'</div> <div class="honggo" style="display: block;"></div>'
			html +='</div>'
			$('.SelectMany').append(html)
		}else{
			let html='';
			html +='<div class="h_45 f_15 c_h_66 flex_align reason" style="padding: 0rem 0.3rem;" data-value="'+k.value+'" onclick="HeroFun.selectmanyFun(this,'+this.selectnum+')">'
			html +='<div class="flex_1 flex_align">'+k.name+'</div> <div class="honggo"></div>'
			html +='</div>'
			$('.SelectMany').append(html)
		}
	})

}
closeChaIcon(t){
	$(t).prev().prev().val('');
	$(t).prev().prev().trigger('oninput')
	$(t).fadeOut('slow');
}

//带搜索的弹出层end
/* 全局颜色 */
// let option={
// 	themeColor:"",
// 	themeColorStatus:false,//标题是否开启渐变色
// 	GradientStare:"",//渐变色开始颜色
// 	GradientEnd:"",//渐变色结束颜色
// }
globalTheme(list){
	console.log(list)
}

getBase64(url, callback) {
	var Img = new Image(),
		dataURL = '';
	Img.src = url + '?v=' + Math.random();
	Img.setAttribute('crossOrigin', 'Anonymous');
	Img.onload = function() {
		var canvas = document.createElement('canvas'),
			width = Img.width,
			height = Img.height;
		canvas.width = width;
		canvas.height = height;
		canvas.getContext('2d').drawImage(Img, 0, 0, width, height);
		dataURL = canvas.toDataURL('image/jpeg');
		return callback ? callback(dataURL) : null;
	};
}
// 使用方法
//  let imgUrl=‘https://www.baidu.com/img/bd_logo1.png’
//  HeroFun.getBase64(imgUrl, dataURL => {
//  console.log(dataURL:就是base64了)
//  });
}
const HeroFun =new Hero();
