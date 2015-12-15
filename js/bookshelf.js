window.onload =function (){
	//����������
	jsScroll('book_body','18');
	var book_body = document.getElementById("book_body");
	var book_body = document.getElementById("scrollBar");
	var ua = navigator.userAgent.toLowerCase();
    if(/ipad/i.test(ua)) {//�ж��Ƿ�ΪIPAD�������IPAD����JS��������ʹ���Դ�������
        book_body.style.overflow = "auto";        
        scrollBar.style.display ="none";
    }
    if(/midp/i.test(ua)) {//�ж��Ƿ�Ϊ�ƶ��豸�����������JS��������ʹ���Դ�������
        book_body.style.overflow = "auto";
        scrollBar.style.display ="none";
    }
	//�ȼ������л� left_sidebar 
	var next_btn = document.getElementById("level_next");
	var prev_btn = document.getElementById("level_prev");
	var X_Z = document.getElementById("X_Z");//x_z��ul
	var T_W = document.getElementById("T_W");//T_W��ul
	var A_C = document.getElementById("A_C");//A_C��ul
	var D_G = document.getElementById("D_G");//D_G��ul
	var classify = document.getElementById("classify_menu").getElementsByTagName("a");
	var alphabet_ul = document.getElementById("alphabet").getElementsByTagName("ul");//��ĸDIV�е�UL
	var btn_pd = 1;
	var menu_left = {		//7���ȼ�����
		Advanced:classify[0],
		Proficient:classify[1],
		Independent:classify[2],
		Intermediate:classify[3],
		Developing:classify[4],
		Emerging:classify[5],
		Beginner:classify[6]
	};
	
	//alphabet��24����ĸ���� 
	//1-3:a-z;
	//4-7:t-w;
	//8-11:p-s;
	//12-15:l-o;
	//16-19:h-k;
	//20-23:d-g;
	//24-26:a-c;
	var alphabet=[];
	for (var i = 0; i < alphabet_ul.length; i++) {	//��ȡ����UL��LI����alphabet����	
		all_li(alphabet_ul[i].getElementsByTagName("li"))
	};	
	function all_li(arg){
		for (var i = 0; i < arg.length; i++) {	//��ȡ����arg��LI����alphabet����	
			alphabet.push(arg[i])
		};
	}
	
	for (var k = 0; k < alphabet.length; k++) {
		alphabet[k].index = k;
		alphabet[k].onclick = function(){ //�����ʾ���ʱ�ȼ�
			for (var j = 0; j < alphabet.length; j++) {
				alphabet[j].className = alphabet[j].className.replace(/now_level/,"")
			}

			if(this.className.indexOf('now_level') == -1){
				this.className = this.className.concat(" now_level")
			}				
			bak_letter('1');
			bak_letter('2');
			function style_sc(num1,num2,stn){				
				for(var i=0;i<num2;i++){
					bak_letter(stn,classify[i]);	
				}
				for(var i=num1;i<=6;i++){
					case_style(classify[i],1);
				}
			}
			function style_sc1(num1,num2,stn){				
				for(var i=0;i<num1;i++){
					bak_letter(stn,classify[i]);	
				}
				for(var i=num2;i<=6;i++){
					case_style(classify[i],2);
				}
			}
			if(btn_pd == 1){							
				switch(this.index){
					case 25: //A
					case 24: //B
					case 23: //C 6		
					style_sc(6,5,2)//��ǰ���֣���ǰ���������ݣ���ʽ����1||2							
					break;
					case 22: //d
					case 21: //e
					case 20: //f
					case 19: //g 5
					style_sc(5,4,2)
					break;
					case 18: //k
					case 17: //j
					case 16: //i
					case 15: //h 4			
					style_sc(4,3,2)			
					break;
					case 14: //0
					case 13: //m
					case 12: //n
					case 11: //l 3								
					style_sc(3,2,2)									
					break;
					case 10: //s
					case 9: //r
					case 8: //q
					case 7: //p 2
					style_sc(0,0,2)	
					break;

				}
			}
			if(btn_pd == 2){							
				switch(this.index){
				case 18: //k
				case 17: //j
				case 16: //i
				case 15: //h 4			
				// Advanced:classify[0],
				// Proficient:classify[1],
				// Independent:classify[2],
				// Intermediate:classify[3],
				// Developing:classify[4],
				// Emerging:classify[5],
				// Beginner:classify[6]	
				style_sc1(5,4,1)				
				break;
				case 14: //0
				case 13: //m
				case 12: //n
				case 11: //l   ����3						
				style_sc1(4,3,1)												
				break;
				case 10: //s
				case 9: //r
				case 8: //q
				case 7: //p   ����2
				style_sc1(1,2,1)								
				break;
				case 6: //w
				case 5: //v
				case 4: //u
				case 3: //t   ����1				
				style_sc1(0,1,1)					
				break;
				case 2: //y
				case 1: //x
				case 0: //z  ����0							
				style_sc1(0,0,1)															
				break;
			}
		}
	}
}

	function case_style(obj,stn){	//���ò�����˵���ʽ
		
		var con = ' ' + obj.getElementsByTagName('span')[0].innerHTML + "_origin" + stn;
		if(obj.className.indexOf(con) == -1){
			obj.className = obj.className.concat(con);
		}		
	}	
	
	function case_style_num(num,stn){	
	//���ò��������  
	//num�ǵ�ǰ������Ĳ��� 1-7
	//stn����ʽobj_origin+ 1||2		
	bak_letter('1');
	bak_letter('2');	
	}

	function bak_letter(arg,obj){ //��ԭ���������λ��
		for (var i in menu_left){ 
			var replace_con1 = i + "_origin" + arg;
			menu_left[i].className = menu_left[i].className.replace(replace_con1,"")
			if(obj){
				obj.className = obj.className.replace(replace_con1,"")
			}			
		}
	}

	//��ť��ʼ��
	next_btn.style.cursor = "default";
	prev_btn.style.cursor = "pointer";

	//���A-C,D-G���أ�T-w,X-Z��ʾ
	prev_btn.onclick = function(){ 
		
		if(btn_pd == 1){
			T_W.className = "T_W";
			X_Z.className = "X_Z";
			A_C.className = "A_C none";
			D_G.className = "D_G none";
			style_f(prev_btn,next_btn);	
			bak_letter('1');
		}	
		btn_pd = 2;
	}

	//���A-C,D-G��ʾ��T-w,X-Z����
	next_btn.onclick = function(){ 
		if(btn_pd == 2){
			T_W.className = "T_W none";
			X_Z.className = "X_Z none";
			A_C.className = "A_C";
			D_G.className = "D_G";
			style_f(next_btn,prev_btn);	
			bak_letter('2');		
		}	
		btn_pd = 1;
	}


	//��ť��ʽ�޸�
	function style_f(btn1,btn2){ 	
		btn1.style.cursor = "default";
		btn1.style.opacity = "0.5";
		btn2.style.opacity = "1";
		btn2.style.cursor = "pointer";
	}
	
	//���˵��л�
	var menu = document.getElementById("menu_list").getElementsByTagName("li");
	for(var i=0; i<menu.length;i++){
		menu[i].onclick = function(){			
			for(var i=0; i<menu.length;i++){menu[i].className ="";}
				this.className ="in";
		}
	}

}