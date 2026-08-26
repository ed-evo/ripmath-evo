# Somma

È la [somma](../../p/pc/pce.html) definita nell'algebra di Boole $a+b$

corrisponde alla [disgiunzione inclusiva in logica](../../k/kb/kblab.html)

Possiamo rappresentarlo con il circuito

infatti abbiamo le 4 possibilità

In forma normale disgiuntiva completa possiamo pensarla come

$$
a+b = àb + ab' + ab
$$

Per esercizio dimostriamolo algebricamente

> $a+b = (a+b)(a+à) =$ [moltiplico per $(a+à)=1$ per la [prima legge del complemento](../pc/pcd.html)]
>
> $= aa + aà + ab + ab' =$ [sviluppo; $aa=a$ per la [seconda legge dell'idempotenza](../pc/pcg.html) e $aà=0$ per la [seconda legge del complemento](../pc/pcd.html)]
>
> $= a + ab + àb =$ [so che $a+ab=a$ per la [prima legge di assorbimento](../pc/pcg.html)]
>
> $= a + àb =$
>
> $= a(b+b') + àb =$ [moltiplico per $(b+b')=1$ il primo termine ed ottengo]
>
> $= ab + ab' + àb$
>
> cioè ordinando come avevamo già visto nella pagina della tabella
>
> $$
> a+b = àb + ab' + ab
> $$