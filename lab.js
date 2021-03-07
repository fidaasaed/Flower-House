// 
var order =prompt("what do you want flowers or bags");
while (order !="flowers" && order !="bags")
{ 
    order =prompt("what do you want flowers or bags?");
}

var itemorder ='';
if (order== "flowers")
{ 
    itemorder = '<img src="https://thumbs.dreamstime.com/z/purple-one-tulip-flower-gift-bouquet-neutral-ivory-background-spring-season-flowers-110974216.jpg" />';            
}
else
{
    itemorder = '<img src="https://www.cardfactory.co.uk/dw/image/v2/BCXP_PRD/on/demandware.static/-/Sites-cardfactory-UK-master/default/dw590af06a/images/26532_PRIMARY.jpg?sw=656&sh=656"/>';
}

var numof = prompt(" how many do you want ?");
var result = '';
for(var i=0 ; i < numof ; i++ )
{
    result = result + itemorder ;

}
document.write(result);