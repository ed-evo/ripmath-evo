# RACCOGLIMENTO A FATTOR COMUNE TOTALE

È l'operazione contraria della moltiplicazione di un monomio per un polinomio:
cioè se ad esempio eseguiamo la seguente moltiplicazione
$3a(2a+5)$ otteniamo $6a^2+15a$

Il problema è ora come [tornare indietro](ad6aa.html): cioè come da
$6a^2+15a$ si può passare a $3a(2a+5)$

In pratica dobbiamo trovare il monomio che è contenuto in tutti i termini del polinomio e questo l'abbiamo già visto: si chiama
<span class="text-red-600">**MASSIMO COMUN DIVISORE**</span>

Quindi dovrò procedere nel modo seguente:
Considero il polinomio
$6a^2+15a$

Devo trovare cosa hanno in comune $6a^2$ e $15a$ cioè il loro $M.C.D.$
Tra $6$ e $15$ il $M.C.D.$ vale $3$
Tra $a^2$ e $a$ il $M.C.D.$ vale $a$

Quindi il $M.C.D.$ vale $3a$
allora scrivo $\textcolor{blue}{6a^2+15a = 3a (}$
poi considero il primo termine:
$6a^2$ quante volte contiene $3a$ cioè quanto fa $6a^2$ diviso $3a$
il risultato è $2a$
allora scrivo
$\textcolor{blue}{6a^2+15a = 3a (2a+}$

considero ora il secondo termine
$15a$ diviso $3a$ dà come risultato $5$
quindi scriverò

$$
\textcolor{blue}{6a^2 + 15a = 3a (2a+5)}
$$

Per finire verifico che eseguendo la moltiplicazione ritrovo il polinomio di partenza.

***

Facciamo un altro esempio:
$6a^2b^4 - 9ab^3 + 3ab =$
$M.C.D. = 3ab$
$6a^2b^4 : 3ab = 2ab^3$
$-9ab^3 : 3ab = -3b^2$
$+3ab : 3ab = +1$

ottengo:
$$
6a^2b^4 - 9ab^3 + 3ab = 3ab (2ab^3 - 3b^2 + 1)
$$

***

> **<span class="text-pink-500">Attenzione!</span>**
> Quando raccogli a fattor comune devi raccogliere TUTTO (cioè il $M.C.D.$) senza lasciare nulla di comune.
>
> Ad esempio è sbagliato fare:
> $\textcolor{magenta}{a^3 - a^2 = a (a^2 - a)}$
>
> mentre si deve fare
> $\textcolor{blue}{a^3 - a^2 = a^2 (a - 1)}$
>
> perché il $M.C.D.$ è $a^2$

***

[esercizi](../../../cdrom/cd/a0/ab/abe/abea/abeaa.html)