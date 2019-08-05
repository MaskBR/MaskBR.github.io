const pxArry= document.querySelector('.pxArry');
const submit = document.querySelector('.submit');
const result = document.querySelector('.result');
const NumArry = document.querySelector('.NumArry');
submit.addEventListener('click',liangdeng);
function liangdeng(Num){
    abc = (NumArry.value).split('，');
    if(abc.length == 1){
        abc = (NumArry.value).split(',');
    }else{
        abc=abc;
    }
    Num= Number(pxArry.value);
    var numArry=[];
    for(j=1;j<=Num;j++){
    numArry.push(1);
    }
    var nArry=abc;
    console.log(nArry);
    for( var m=0;m<nArry.length;m++){
        a=nArry[m];
        for(i=0;i<numArry.length;i++){
            if((i+1)%a==0){
                if(numArry[i]==0){
                    numArry[i]=1;
                }else if(numArry[i]==1){
                    numArry[i]=0
                }
            }
        }
    }
    var liang = 0;
    for(k=0;k<Num;k++){
        if(numArry[k]==1){
            liang++;
        }
    }
    result.textContent = '剩余亮灯数量为：'+ liang;
}