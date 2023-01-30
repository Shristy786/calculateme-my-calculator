
var input=document.querySelector(".input-txt");
var buttons=document.querySelectorAll(".btn");
var clear=document.querySelector(".btn-clear");
var equal=document.querySelector(".btn-equal");

buttons.forEach(function(button)
{
    button.addEventListener('click',function(e)
    {
        let data=e.target.dataset.num;
        input.value+=data;
        console.log(input.value);
    })
});
equal.addEventListener('click',function()
{
    if(input.value==="")
    {
        input.value="please enter";
    }
    else{
        let answer=eval(input.value);
        input.value=answer;
    }
})
clear.addEventListener('click',function(e)
{
    input.value="";
})
