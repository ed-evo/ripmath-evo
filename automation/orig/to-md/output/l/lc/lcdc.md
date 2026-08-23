# Esempi di calcolo delle probabilità utilizzando il calcolo combinatorio

Utilizzando il calcolo combinatorio è possibile risolvere problemi più complicati.

## Problema 1
Calcolare la probabilità lanciando $$3$$ dadi di ottenere sulle facce superiori tre numeri $$6$$.

Il caso favorevole è uno solo: quando ottengo $$6$$ su tutti e tre i dadi.
I casi possibili sono le disposizioni con ripetizione di $$6$$ oggetti presi $$3$$ a $$3$$, cioè $$D'_{6,3}$$.

[**p**]{.text-red}
$$
\textcolor{red}{p = \frac{1}{D'_{6,3}} = \frac{1}{216} = 0,00462963 \approx 0,46\%}
$$
[Calcoli](lcdcd.html)

---

## Problema 2
Un sacchetto contiene $$50$$ palline, $$20$$ bianche e $$30$$ rosse; calcolare la probabilità che, estraendo contemporaneamente due palline, esse siano entrambe rosse.

Siccome le palline vengono estratte contemporaneamente non conta l'ordine e quindi useremo le combinazioni. I casi possibili sono tutte le coppie che si possono formare con le $$50$$ palline: $$C_{50,2}$$.
I casi favorevoli sono tutte le coppie non ordinate che posso formare con le palline rosse: $$C_{30,2}$$.

[**p**]{.text-red}
$$
\textcolor{red}{p = \frac{C_{30,2}}{C_{50,2}} = \frac{87}{245} = 0,3551020419... \approx 35,51\%}
$$
[Calcoli](lcdcc.html)

---

## Problema 3
Un sacchetto contiene $$20$$ palline, $$6$$ bianche, $$12$$ rosse e $$2$$ verdi; calcolare la probabilità che, estraendo a caso contemporaneamente tre palline, esse siano tutte e tre rosse.

In pratica devo considerare le possibili terne che posso formare senza considerarne l'ordine, cioè combinazioni semplici.
I casi possibili sono le combinazioni di $$20$$ oggetti presi $$3$$ a $$3$$.
I casi favorevoli sono le combinazioni di $$12$$ oggetti presi $$3$$ a $$3$$.

[**p**]{.text-red}
$$
\textcolor{red}{p = \frac{C_{12,3}}{C_{20,3}} = \frac{11}{57} = 0,192982456... \approx 19,30\%}
$$
[Calcoli](lcdca.html)

> **Nota:** Per vedere come fare la percentuale fai click su calcoli. Ho usato il simbolo $$\sim$$ per indicare l'approssimazione.

---

## Problema 4
Calcolare la probabilità di ottenere un ambo al lotto giocando due numeri su una sola ruota.

Siccome in una ruota ci sono $$5$$ numeri, i casi favorevoli sono quelli in cui ho i due numeri giocati fissi e gli altri $$3$$ numeri variabili, cioè tutte le terne che posso formare con gli $$88$$ numeri restanti: $$C_{88,3}$$.
I casi possibili sono tutte le cinquine che posso formare con i $$90$$ numeri: $$C_{90,5}$$, quindi:

[**p**]{.text-red}
$$
\textcolor{red}{p = \frac{C_{88,3}}{C_{90,5}} = \frac{2}{801} = 0,002496879... \approx 0,25\%}
$$
[Calcoli](lcdcb.html)

Hai due probabilità a favore su $$801$$ probabilità possibili: cioè in media vinci una volta ogni quasi $$400$$ puntate; considerando che la vincita ti viene pagata $$250$$ volte la posta, pensa se ti conviene giocare; ma riprenderemo l'argomento nella teoria dei giochi.
Per esercizio prova a trovare le probabilità di fare terno, quaterna e cinquina.