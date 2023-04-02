 //odd even 
  //get the modulus of the in out if modulus (%) !== 0 it is odd else even
  function oddOrEven(){
    
    const oddOrEvenInput = document.getElementById('oddOrEvenInput');
    if((oddOrEvenInput.valueAsNumber % 2) === 0){
        oddOrEvenInput.classList.add('on');
        oddOrEvenInput.classList.remove('off');

    }else{
        oddOrEvenInput.classList.add('off');
        oddOrEvenInput.classList.remove('on');

    }
}
  //confirm
  // use window.confirm() return a true or false e.g let isConfirmed = window.confirm('click okay for true');
  //if is confirmed do something else do something else 
  // number truthy falsy same thing as .valueAsNumber

  const confirmInput = document.getElementById('confirmInput');
 confirmInput.onclick = function(){
    if( window.confirm("click yes or no")=== true){
      document.getElementById('confirmOutput').textContent = 'Confirmed';
  
    }
    else{
       document.getElementById('confirmOutput').textContent = 'Unconfirmed';
  
    }
    }


//text truthy falsy 

const textTFInput = document.getElementById('textTFInput');

textTFInput.onchange = function(){
  const textTFOutput = document.getElementById('textTFOutput');
  if(textTFInput.value){
    textTFOutput.textContent = 'this is considered true (truthy)';
  }
  else{
    textTFOutput.textContent = 'this is considered false (falsy)';
  }
  }
  // number truthy falsy same thing as .valueAsNumber

  const numTFInput = document.getElementById('numTFInput');
  numTFInput.onchange = function(){
  const numTFOutput = document.getElementById('numTFOutput');
  if(numTFInput.valueAsNumber){
    numTFOutput.textContent = 'this is considered true (truthy)';
  }
  else{
    numTFOutput.textContent = 'this is considered false (falsy)';
  }
  }

  //am/pm 
  // do together
  // make new date object and check if .getHour < 12


const dayOrNightInput = document.getElementById('dayOrNightInput');
dayOrNightInput.onclick = function(){
 const day = new Date();
if(day.getHours() >= 12){
document.getElementById('dayOrNightOutput').textContent = 'It is PM';
}else{
  document.getElementById('dayOrNightOutput').textContent = 'It is AM';

}
}
  // logical AND 
  function logicalAndCheck(){
    const isValueOneChecked = document.getElementById('andCondition1').checked;
    const isValueTwoChecked =  document.getElementById('andCondition3').checked;
    const logicalAndOutput = document.getElementById('logicalAndOutput')
    if(isValueOneChecked && isValueTwoChecked)
    {
      logicalAndOutput.textContent = 'This is true'
    }
    else{
       logicalAndOutput.textContent = 'This is false'
    }
    
  }





  //logical OR 
function logicalOrCheck(){
  const isValueOneChecked = document.getElementById('orCondition1').checked;
  const isValueTwoChecked =  document.getElementById('orCondition3').checked;
  const logicalOrOutput = document.getElementById('logicalOrOutput')
  if(isValueOneChecked || isValueTwoChecked)
  {
    logicalOrOutput.textContent = 'This is true'
  }
  else{
     logicalOrOutput.textContent = 'This is false'
  }
  





}

  //switch do together 

  const switchDropDownEle = document.getElementById('switchDropDown');

 const switchInputEle = document.getElementById('switchInput');

 switchInputEle.onchange = function(){
  switch(switchDropDownEle.value){
    case'consoleLog':
    console.log(switchInputEle.value);
    break;
    case'alert':
    alert(switchInputEle.value);
    break;

  }

 }



