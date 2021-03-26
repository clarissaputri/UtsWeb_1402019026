function check(){
	var c=0;
	var q1=document.kuis.no1.value;
	var q2=document.kuis.no2.value;
	var q3=document.kuis.no3.value;
	var q4=document.kuis.no4.value;
	var q5=document.kuis.no5.value;
		var result=document.getElementById('result');
		var kuis=document.getElementById('kuis')
	if (q1 =="31 Desember 2019"){c++}
	if (q2 =="Corona Virus Disease"){c++}
	if (q3 =="China"){c++}
	if (q4 =="Malas bercuci tangan"){c++}
	if (q5 =="Demam"){c++}
			kuis.style.display="none";
		if (c<=4) {
			result.textContent=`Hasil nilai kamu ${c}. silahkan coba kembali.`
		}else{
			result.textContent=`Hasil nilai kamu ${c}. selamat.`
		}
		
}