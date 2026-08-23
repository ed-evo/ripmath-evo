# [Combinazioni semplici]{.text-red}

Partiamo da un esempio pratico: troviamo tutte le terne **non ordinate** che posso formare con i $$4$$ oggetti (disposizioni semplici di $$4$$ oggetti presi $$3$$ a $$3$$):

$$\textcolor{red}{a} \quad \textcolor{red}{b} \quad \textcolor{red}{c} \quad \textcolor{red}{d}$$

Prima troviamo le disposizioni semplici (cioè le terne ordinate) poi togliamo l'ordine:

$$\textcolor{red}{abc} \quad \textcolor{red}{abd} \quad \textcolor{red}{acd} \quad \textcolor{red}{bcd}$$
$$\textcolor{red}{acb} \quad \textcolor{red}{adb} \quad \textcolor{red}{adc} \quad \textcolor{red}{bdc}$$
$$\textcolor{red}{bac} \quad \textcolor{red}{bad} \quad \textcolor{red}{cad} \quad \textcolor{red}{cbd}$$
$$\textcolor{red}{cab} \quad \textcolor{red}{dab} \quad \textcolor{red}{dac} \quad \textcolor{red}{dbc}$$
$$\textcolor{red}{bca} \quad \textcolor{red}{bda} \quad \textcolor{red}{cda} \quad \textcolor{red}{cdb}$$
$$\textcolor{red}{cba} \quad \textcolor{red}{dba} \quad \textcolor{red}{dca} \quad \textcolor{red}{dcb}$$

Ogni colonna contiene la stessa terna ordinata in modo diverso, quindi se considero le combinazioni ogni colonna mi corrisponde ad una sola terna, cioè:

$$\textcolor{red}{C_{4;3} = 4}$$

e precisamente le $$4$$ combinazioni sono:

$$\textcolor{red}{abc} \quad \textcolor{red}{abd} \quad \textcolor{red}{acd} \quad \textcolor{red}{bcd}$$

In pratica per trovare le combinazioni (che sono non ordinate) devo prendere le disposizioni (che sono ordinate) e dividerle per le permutazioni (che danno l'ordine), cioè:

$$
\textcolor{red}{C_{4;3} = \frac{D_{4;3}}{P_3} = \frac{4 \cdot \dots \cdot (4-3+1)}{3!}}
$$

***

Generalizziamo e ricaviamo la formula generale:

$$
\textcolor{red}{C_{n;k} = \frac{D_{n;k}}{P_k} = \frac{n \cdot (n-1) \cdot \dots \cdot (n-k+1)}{k!}}
$$

***

Come formula è un po' scomoda, cerchiamo di scriverla in modo diverso (legge dei tre fattoriali):

$$
\textcolor{blue}{\frac{n \cdot (n-1) \cdot \dots \cdot (n-k+1)}{k!}}
$$

Moltiplico sopra e sotto per $$(n-k)!$$:

$$
\textcolor{blue}{= \frac{n \cdot (n-1) \cdot \dots \cdot (n-k+1) \cdot (n-k)!}{k!(n-k)!}}
$$

ma il prodotto $$n \cdot (n-1) \cdot \dots \cdot (n-k+1) \cdot (n-k)!$$ corrisponde a $$n!$$, cioè il prodotto di $$n$$ per tutti i suoi antecedenti; infatti $$(n-k)!$$ è il prodotto di tutti gli antecedenti di $$(n-k+1)$$, quindi ottengo:

$$
\textcolor{blue}{= \frac{n!}{k!(n-k)!}}
$$

Inoltre, siccome dovremo usare spesso questa espressione, la indicheremo in breve con il simbolo:

$$
\textcolor{blue}{\binom{n}{k}}
$$

termine che sarà chiamato coefficiente binomiale.

***

Quindi fai attenzione perché potrai trovare tre notazioni diverse:

$$
\textcolor{black}{C_{n;k}} = \textcolor{black}{\frac{n \cdot (n-1) \cdot \dots \cdot (n-k+1)}{k!}} = \textcolor{blue}{\frac{n!}{k!(n-k)!}} = \textcolor{green}{\binom{n}{k}}
$$

Poniamo per definizione che vale:

$$
\binom{n}{0} = 1
$$

***

Nel gioco del lotto un terno si dice semplice se non conta l'ordine di uscita; troviamo quanti sono i possibili terni semplici che possiamo ottenere estraendo $$3$$ numeri.

Sono le combinazioni di $$90$$ oggetti presi $$3$$ a $$3$$ (di classe $$3$$):

$$
\textcolor{red}{C_{90;3} = \frac{90!}{3!(90-3)!} = \frac{90!}{3! 87!} = \frac{90 \cdot 89 \cdot 88}{3 \cdot 2 \cdot 1} = 117480}
$$

> **Nota:** ho usato la seconda formula e ho semplificato $$90!$$ con $$87!$$ perché:
> $$90! = 90 \cdot 89 \cdot 88 \cdot 87 \cdot 86 \cdot 85 \cdot 84 \cdot 83 \cdot 82 \dots 4 \cdot 3 \cdot 2 \cdot 1$$
> $$87! = 87 \cdot 86 \cdot 85 \cdot 84 \cdot 83 \cdot 82 \dots 4 \cdot 3 \cdot 2 \cdot 1$$
> quindi posso semplificare da $$87$$ in giù.