var Links = 
{
    setColor:function (color) 
    {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length)
    // {
    // alist[i].style.color = color;
    // i = i + 1; 
    // }
    $('a').css('color', color);
    }
}


var Body = 
{
    setColor:function (color)
    {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color)
    }
    ,
    setBackgroundColor : function (color)
    {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color)
    }
}


function darkmodehandler(self)
{
    var target = document.querySelector('body');
if 
   (self.value == '다크on')
    {
        Body.setColor('white');
        Body.setBackgroundColor('black');
        self.value = '다크off';
    
    
    Links.setColor('powderblue');
    }
    
else 
{
        {
        Body.setColor('black');
        Body.setBackgroundColor('white');
        self.value = '다크on';

        Links.setColor('blue');
        }
}
}