# Implicazione diretta

È l'implicazione diretta $$a + b'$$

corrisponde alla [implicazione diretta in logica](../../k/kb/kblac.html)

in forma normale disgiuntiva completa possiamo pensarla come:

$$
a + b' = ab + ab' + àb'
$$

per esercizio dimostriamolo algebricamente:

$$
a + b' = (a + b')(a + à) =
$$
> Moltiplico per $$a + à = 1$$ per la [prima legge del complemento](../pc/pcd.html)

$$
= aa + aà + ab' + àb' =
$$
> Sviluppo; $$aa = a$$ per la [seconda legge dell'idempotenza](../pc/pcg.html) e $$aà = 0$$ per la [seconda legge del complemento](../pc/pcd.html)

$$
= a + ab' + àb' =
$$
> So che $$a + ab' = a$$ per la [prima legge di assorbimento](../pc/pcg.html)

$$
= a + àb' = a(b + b') + àb' =
$$
> Moltiplico per $$b + b' = 1$$ il primo termine ed ottengo

$$
= ab + ab' + àb'
$$
come volevamo.