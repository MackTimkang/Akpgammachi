var modbtn = document.querySelector('.modbtn');
var modbg = document.querySelector('.modalbg');
var user = document.getElementById('user');
var pass = document.getElementById('pass');

modbtn.onclick = function()
{
    if((user.value == 'akp') && (pass.value == '021104'))
    {
        modbg.style.visibility = 'hidden';
        alert('Welcome back!');
    }
    else if((user.value == "") && (pass.value == ""))
    {
        alert('No input!');
    }
    else{
        alert('wrong credentials!');
        user.value = "";
        pass.value = "";
    }
    
};