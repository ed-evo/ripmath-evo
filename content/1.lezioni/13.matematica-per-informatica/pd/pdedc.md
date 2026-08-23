# [Implicazione diretta]{.text-red}

È l'implicazione diretta $$a + b'$$

corrisponde alla [implicazione diretta in logica](../../k/kb/kblac.html)

in forma normale disgiuntiva completa possiamo pensarla come:

$$
a + b' = ab + ab' + a'b'
$$

per esercizio dimostriamolo algebricamente:

$$
a + b' = (a + b')(a + a') =
$$
> Moltiplico per $$a + a' = 1$$ per la [prima legge del complemento](../pc/pcd.html)

$$
= aa + aa' + ab' + a'b' =
$$
> Sviluppo; $$aa = a$$ per la [seconda legge dell'idempotenza](../pc/pcg.html) e $$aa' = 0$$ per la [seconda legge del complemento](../pc/pcd.html)

$$
= a + ab' + a'b' =
$$
> So che $$a + ab' = a$$ per la [prima legge di assorbimento](../pc/pcg.html)

$$
= a + a'b' = a(b + b') + a'b' =
$$
> Moltiplico per $$b + b' = 1$$ il primo termine ed ottengo

$$
= ab + ab' + a'b'
$$
come volevamo.