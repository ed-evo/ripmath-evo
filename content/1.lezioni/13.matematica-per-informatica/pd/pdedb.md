# [Somma]{.text-red}

È la [somma](../../p/pc/pce.html) definita nell'algebra di Boole $$a+b$$

corrisponde alla [disgiunzione inclusiva in logica](../../k/kb/kblab.html)

Possiamo rappresentarlo con il circuito

infatti abbiamo le 4 possibilità

In forma normale disgiuntiva completa possiamo pensarla come

$$
a+b = a'b + ab' + ab
$$

Per esercizio dimostriamolo algebricamente

> $$a+b = (a+b)(a+a') =$$ [moltiplico per $$(a+a')=1$$ per la [prima legge del complemento](../pc/pcd.html)]
>
> $$= aa + aa' + ab + ab' =$$ [sviluppo; $$aa=a$$ per la [seconda legge dell'idempotenza](../pc/pcg.html) e $$aa'=0$$ per la [seconda legge del complemento](../pc/pcd.html)]
>
> $$= a + ab + a'b =$$ [so che $$a+ab=a$$ per la [prima legge di assorbimento](../pc/pcg.html)]
>
> $$= a + a'b =$$
>
> $$= a(b+b') + a'b =$$ [moltiplico per $$(b+b')=1$$ il primo termine ed ottengo]
>
> $$= ab + ab' + a'b$$
>
> cioè ordinando come avevamo già visto nella pagina della tabella
>
> $$
> a+b = a'b + ab' + ab
> $$