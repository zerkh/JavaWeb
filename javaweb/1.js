var msg = "这是一个跑马灯"
var interval = 100;
var spacelen = 120;
var space10 = " ";
var seq = 0;
function Scroll()
{
    len = msg.length;
    window.status = msg.substring(0, seq+1);
    seq++;
    if(seq >= len)
    {
	seq = spacelen;
	window.setTimeout("Scroll2();", interval);
    }
    else
    {
	window.setTimeout("Scroll();", interval);
    }
}

function Scroll2()
{
    var out = "";
    for(i = 1; i <= spacelen/space10.length; i++)
    {
	out += space10;
    }
    out = out + msg;
    len = out.length;
    window.status = out.substring(seq, len);
    seq++;
    if(seq >= len)
    {
	seq = 0;
    }
    window.setTimeout("Scroll2();", interval);
}

Scroll();
