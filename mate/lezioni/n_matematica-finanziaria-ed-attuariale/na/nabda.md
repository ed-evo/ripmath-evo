# Passaggio dal numero al logaritmo

Vediamo alcuni esempi diversi
- Il numero è compreso fra $1$ e $10.000$
- Il numero è compreso fra $10.001$ e $11.500$
- Il numero è compreso fra $0$ e $1$
- Mi servono più cifre "decimali"

Il secondo caso è con logaritmi a $7$ decimali.

***

Cerchiamo
$\log 3256,4 =$
prima fisso la caratteristica: essendo il valore del logaritmo compreso fra $1000$ e $10.000$ il suo valore sarà compreso fra $3$ e $4$ e quindi la sua caratteristica sarà $3$.

Calcolo la mantissa
leggo sulle tavole
**$3256 \to 51268$**
**$3257 \to 51282$**

Quindi per trovare il mio valore dovrei fare l'interpolazione:

$$
\begin{aligned}
3256 &\to 51268 \\
3256,4 &\to 51268 + x \\
3257 &\to 51282
\end{aligned}
$$

$1 : 14 = 0,4 : x$

Ad un incremento $1$ del numero corrisponde un incremento $14$ della mantissa; ad un incremento di $0,4$ del numero corrisponde un incremento della mantissa che devo trovare e chiamo $x$.

**$x = 14 \cdot 0,4 = 5,6$**
**$51268 + 5,6 = 512736$** (la virgola è virtuale e ti indica solamente dove fare la somma)

quindi
**$\log 3256,4 = 3,512736$**

Le tavole però sono predisposte per farti calcolare il risultato nel più breve tempo possibile e quindi l'interpolazione è già risolta: osserva le tavole.

$$
\begin{aligned}
3256 &\to 51268 \\
&\text{(differenza: 14)} \\
3257 &\to 51282
\end{aligned}
$$

Di fianco ai due risultati trovi il numero $14$ che corrisponde alla differenza fra i due valori della mantissa.

Se poi guardi la pagina dei logaritmi trovi una tabellina con intestazione $14$: questi sono i risultati della proporzione con i vari decimali che basta leggere e aggiungere alla mantissa: a $4$ corrisponde $5,6$.

**$51268 + 5,6 = 512736$**

e, come già visto
**$\log 3256,4 = 3,512736$**

> Naturalmente nessuno mi impedisce di calcolare logaritmi superiori a quelli indicati, ad esempio il logaritmo di $32.564$ sarà $4,512736$, cioè caratteristica $4$ e mantissa uguale al logaritmo trovato prima, però essendo logaritmi a $5$ decimali l'errore è piuttosto elevato per parecchie applicazioni.

***

Cerchiamo
**$\log 10256,4 =$**
Vedremo poi che corrisponde ad un tasso del $2,2564\%$.
Qui ci servono i logaritmi a $7$ decimali in modo da avere un errore di circa $1$ su un milione (cioè dell'ordine di un centesimo su diecimila euro).

prima fisso la caratteristica: essendo il valore del logaritmo compreso fra $10000$ e $100.000$ il suo valore sarà compreso fra $4$ e $5$ e quindi la sua caratteristica sarà $4$.

Calcolo la mantissa
leggo sulle tavole
**$10256 \to 0109780$**
**$10257 \to 0110204$**

Senza fare l'interpolazione utilizziamo le tavole:

$$
\begin{aligned}
10256 &\to 0109780 \\
&\text{(differenza: 424)} \\
10257 &\to 0110204
\end{aligned}
$$

Cerco la tabellina con intestazione $424$ e vedo che al decimale $4$ corrisponde $169,6$ e quindi
**$0109780 + 169,6 = 01099496$** (la virgola è virtuale e ti indica solamente dove fare la somma)

e quindi
**$\log 10256,4 = 4,01099496$**
od anche
**$10256,4 = 10^{4,01099496}$**

> Se lo facevo con la calcolatrice ottenevo $\log 10256,4 = 4,01099495$, quindi con un margine di errore molto piccolo.

***

Vediamo su un esempio cosa succede con numeri inferiori a $1$.
**$\log 0,000034256$**

prima fisso la caratteristica: essendo il valore del logaritmo compreso fra $\frac{1}{10.000} (10^{-4})$ e $\frac{1}{100.000} (10^{-5})$ il suo valore sarà compreso fra $-4$ e $-5$, però abbiamo un problema: la mantissa non può mai essere negativa, quindi, dovendo aggiungere una quantità positiva considereremo il valore più basso ($10^{-5}$), e, per ricordare che caratteristica e mantissa hanno segno diverso, metteremo una barra sopra il valore della caratteristica così: $\bar{5}$.

Come regola mnemonica devi scrivere come caratteristica il numero di zeri che vedi scritti prima della prima cifra significativa del numero (nel nostro caso $5$ zeri) e metterci sopra la barra.

Calcolo la mantissa per $3425,6$:

$$
\begin{aligned}
3425 &\to 53466 \\
&\text{(differenza: 13)} \\
3426 &\to 53479
\end{aligned}
$$

Cerco la tabellina con intestazione $13$ e vedo che al decimale $6$ corrisponde $7,8$ e quindi
**$53466 + 6,8 = 534728$** (la virgola è virtuale e ti indica solamente dove fare la somma)

e quindi
**$\log 0,000034256 = \bar{5},534728$**

> Per fare le somme ricordati che il numero trovato è formato da $-5$ negativo e $0,534728$ positivo.
>
> Purtroppo ho notato che, a seconda del provider, il trattino sopra il numero tende a spostarsi: tenetene conto nel leggere le pagine.

***

Se voglio più cifre oltre quelle che trovo sulle tavole
**$\log 35,67825$**

prima fisso la caratteristica: essendo il valore del logaritmo compreso fra $10 (10^{1})$ e $100 (10^{2})$ il suo valore sarà compreso fra $1$ e $2$, quindi prendo $1$.

Calcolo la mantissa per $3567,827$:

$$
\begin{aligned}
3567 &\to 55230 \\
&\text{(differenza: 12)} \\
3568 &\to 55242
\end{aligned}
$$

Cerco la tabellina con intestazione $12$ e vedo che:
al decimale $8$ corrisponde $9,6$
al decimale $2$ corrisponde $2,4$
al decimale $7$ corrisponde $8,4$

e quindi, ricordandomi che ogni decimale successivo va spostato di un posto, essendo il primo un decimale, il secondo un centesimale, il terzo un millesimale...

$$
\begin{aligned}
& \phantom{+} 55230 & + \\
& \phantom{+} 9,6 & + \\
& \phantom{+} 2,4 & + \\
& \phantom{+} 8,4 & = \\
\hline
& 55239924 &
\end{aligned}
$$

e quindi
**$\log 35,67825 = 1,55239924$**
od anche
**$35,67825 = 10^{1,55239924}$**

> Fai attenzione però: per l'errore dovuto all'interpolazione di solito si considerano al più due cifre oltre quelle presenti sulle tavole.