# REGOLA DI NEWTON

Se ora volessimo calcolare
$(a+b)^8 =$
potremmo sempre calcolarlo in ordine facendo tutte le potenze precedenti, ma pensa che noia se dovessi calcolare ad esempio
$(a+b)^{20} =$
ci vorrebbero ore!

Un grande Matematico Newton ha trovato il modo per calcolare la potenza senza calcolare tutte le potenze precedenti: il metodo è un po' laborioso ma, visto il tempo che ci fa risparmiare, ne vale certo la pena.
Vediamolo assieme, passaggio per passaggio, sei pronto?

Proviamo a calcolare
$(a+b)^8 =$

Prima di tutto osserviamo che il primo termine del risultato sarà
$$
1a^8
$$

**Per il secondo termine**
consideriamo il primo termine e facciamo il prodotto fra il coefficiente del primo termine
$$
1
$$
e l'esponente della potenza di $a$ nel primo termine
$$
8
$$
e dividiamo il risultato per il posto che occupa il termine considerato.
Essendo il primo termine devo dividere per $1$, il risultato è
$$
(1 \cdot 8)/1 = 8
$$
allora il secondo termine sarà
$$
8a^7b
$$

proseguendo faccio sempre lo stesso:

**Per il terzo termine**
consideriamo il secondo termine e facciamo il prodotto fra il coefficiente del secondo termine
$$
8
$$
e l'esponente della potenza di $a$ nel secondo termine
$$
7
$$
e dividiamo il risultato per il posto che occupa il termine considerato.
Essendo il secondo termine devo dividere per $2$, il risultato è
$$
(8 \cdot 7)/2 = 28
$$
allora il terzo termine sarà
$$
28a^6b^2
$$

**Per il quarto termine**
consideriamo il terzo termine e facciamo il prodotto fra il coefficiente del terzo termine
$$
28
$$
e l'esponente della potenza di $a$ nel terzo termine
$$
6
$$
e dividiamo il risultato per il posto che occupa il termine considerato.
Essendo il terzo termine devo dividere per $3$, il risultato è
$$
(28 \cdot 6)/3 = 56
$$
allora il quarto termine sarà
$$
56a^5b^3
$$

**Per il quinto termine**
consideriamo il quarto termine e facciamo il prodotto fra il coefficiente del quarto termine
$$
56
$$
e l'esponente della potenza di $a$ nel quarto termine
$$
5
$$
e dividiamo il risultato per il posto che occupa il termine considerato.
Essendo il quarto termine devo dividere per $4$, il risultato è
$$
(56 \cdot 5)/4 = 70
$$
allora il quinto termine sarà
$$
70a^4b^4
$$

**Per il sesto termine**
consideriamo il quinto termine e facciamo il prodotto fra il coefficiente del quinto termine
$$
70
$$
e l'esponente della potenza di $a$ nel quinto termine
$$
4
$$
e dividiamo il risultato per il posto che occupa il termine considerato.
Essendo il quinto termine devo dividere per $5$, il risultato è
$$
(70 \cdot 4)/5 = 56
$$
allora il sesto termine sarà
$$
56a^3b^5
$$

**Per il settimo termine**
consideriamo il sesto termine e facciamo il prodotto fra il coefficiente del sesto termine
$$
56
$$
e l'esponente della potenza di $a$ nel sesto termine
$$
3
$$
e dividiamo il risultato per il posto che occupa il termine considerato.
Essendo il sesto termine devo dividere per $6$, il risultato è
$$
(56 \cdot 3)/6 = 28
$$
allora il settimo termine sarà
$$
28a^2b^6
$$

**Per l'ottavo termine**
consideriamo il settimo termine e facciamo il prodotto fra il coefficiente del settimo termine
$$
28
$$
e l'esponente della potenza di $a$ nel settimo termine
$$
2
$$
e dividiamo il risultato per il posto che occupa il termine considerato.
Essendo il settimo termine devo dividere per $7$, il risultato è
$$
(28 \cdot 2)/7 = 8
$$
allora l'ottavo termine sarà
$$
8a^1b^7
$$

**Per il nono termine**
consideriamo l'ottavo termine e facciamo il prodotto fra il coefficiente dell'ottavo termine
$$
8
$$
e l'esponente della potenza di $a$ nell'ottavo termine
$$
1
$$
e dividiamo il risultato per il posto che occupa il termine considerato.
Essendo l'ottavo termine devo dividere per $8$, il risultato è
$$
(8 \cdot 1)/8 = 1
$$
allora il nono termine sarà
$$
1a^0b^8 = b^8
$$

e non posso più proseguire.

***

Difficile? forse no, ma complicato sì ed anche molto, consoliamoci pensando che per calcolare
$$
(a+b)^8 = a^8 + 8a^7b + 28a^6b^2 + 56a^5b^3 + 70a^4b^4 + 56a^3b^5 + 28a^2b^6 + 8ab^7 + b^8
$$
avrei dovuto fare
$(a+b)^7 =$
$(a+b)^6 =$
$(a+b)^5 =$
eccetera eccetera

[Pagina iniziale](../../../index.html) | [Indice di algebra](../../a.html) | [Pagina successiva](ad50.html) | [Pagina precedente](ad4cfa.html)