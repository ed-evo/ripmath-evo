# <span class="text-red-600">esercizio</span>

risolvere la seguente equazione:

$x^2 + x\sqrt{3} + x + \sqrt{3} = 0$

Prima devo metterla in forma di equazione, con un solo termine $x^2$, un solo termine in $x$ ed un solo termine noto: raccolgo la $x$ per indicare che faccio la somma

$\textcolor{blue}{x^2 + x(1 + \sqrt{3}) + \sqrt{3} = 0}$

prendiamo la formula risolutiva

$$
\textcolor{blue}{x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}
$$

abbiamo:

$\textcolor{blue}{a = 1}$
$\textcolor{blue}{b = 1 + \sqrt{3}}$
$\textcolor{blue}{c = \sqrt{3}}$

sostituiamo nella formula

$$
\textcolor{blue}{x_{1,2} = \frac{-1 - \sqrt{3} \pm \sqrt{(-1 - \sqrt{3})^2 - 4(1)(\sqrt{3})}}{2(1)}}
$$

facciamo i calcoli dentro radice

$$
\textcolor{blue}{= \frac{-1 - \sqrt{3} \pm \sqrt{1 + 3 + 2\sqrt{3} - 4\sqrt{3}}}{2}}
$$

***

adesso posso scegliere due strade:

- eseguire i calcoli e poi, per estrarre di radice, applicare la formula dei [radicali doppi](../ak/akea.html)
- oppure (metodo consigliato) controllo, senza sommare, se posso individuare un quadrato senza scomodare la formula dei radicali doppi. Questo metodo può sempre essere applicato, e basta un po' di esercizio per diventare veloci [per approfondire](../ak/akeb.html)

***

> Potresti anche notare che facendo la somma entro radice cambia di segno solamente il doppio prodotto, quindi...

***

vediamo entrambi i metodi

***

1. con i radicali doppi
2. [ragionando sul quadrato](#secondo)

***

per usare i radicali doppi continuiamo i calcoli

$$
\textcolor{blue}{= \frac{-1 - \sqrt{3} \pm \sqrt{4 - 2\sqrt{3}}}{2}}
$$

calcoliamo il radicale doppio

$\textcolor{blue}{\sqrt{4 - 2\sqrt{3}} =}$

prima devo portare il $2$ dentro radice

$\textcolor{blue}{= \sqrt{4 - \sqrt{12}} =}$

applico la [formula](../ak/akea.html) dei radicali doppi

$$
\textcolor{blue}{= \sqrt{\frac{4 + \sqrt{16-12}}{2}} - \sqrt{\frac{4 - \sqrt{16-12}}{2}}}
$$

$$
\textcolor{blue}{= \sqrt{\frac{4 + \sqrt{4}}{2}} - \sqrt{\frac{4 - \sqrt{4}}{2}}}
$$

$$
\textcolor{blue}{= \sqrt{\frac{4 + 2}{2}} - \sqrt{\frac{4 - 2}{2}}}
$$

$\textcolor{blue}{= \sqrt{3} - 1}$

quindi posso scrivere

$$
\textcolor{blue}{x_{1,2} = \frac{-1 - \sqrt{3} \pm (\sqrt{3} - 1)}{2}}
$$

> **Nota:** nota che ho messo la parentesi perché quando prenderò il segno meno cambierà di segno anche l'1 dentro parentesi

considero il più

$$
\textcolor{blue}{x_1 = \frac{-1 - \sqrt{3} + \sqrt{3} - 1}{2} = \frac{-2}{2} = -1}
$$

considero il meno

$$
\textcolor{blue}{x_2 = \frac{-1 - \sqrt{3} - (\sqrt{3} - 1)}{2} = \frac{-1 - \sqrt{3} - \sqrt{3} + 1}{2} = \frac{-2\sqrt{3}}{2} = -\sqrt{3}}
$$

ottengo quindi le soluzioni

$x_1 = -1$
$x_2 = -\sqrt{3}$

***

[torna su](#su)

## Ragionare sul quadrato

dobbiamo trasformare l'espressione:

$\textcolor{blue}{\sqrt{4 - 2\sqrt{3}} =}$

devo trasformare l'espressione in somma di radicali semplici.

Per farlo il termine dentro radice deve essere un quadrato cioè $4 - 2\sqrt{3}$ è il quadrato di un binomio in cui i due quadrati sono stati sommati: il doppio prodotto vale $2\sqrt{3}$ (e quindi il prodotto è $\sqrt{3}$) e la somma dei due quadrati deve essere $4$.

se il prodotto è $\sqrt{3}$ i termini saranno $\sqrt{3}$ ed $1$ ed infatti il loro quadrato è $3 + 1 = 4$

quindi posso scrivere

$\textcolor{blue}{\sqrt{4 - 2\sqrt{3}} =}$

so che $4 = 3 + 1$

$\textcolor{blue}{= \sqrt{3 + 1 - 2\sqrt{3}} =}$

scompongo il trinomio in un quadrato

$\textcolor{blue}{= \sqrt{(\sqrt{3} - 1)^2} =}$

e semplificando il radicale esterno con il quadrato ottengo

$\textcolor{blue}{= \sqrt{3} - 1}$

***

> Siccome il quadrato trasforma tutti i segni in segni positivi, tornando indietro potrei fare $\sqrt{3} - 1$ ma anche $1 - \sqrt{3}$ allora dovrai avere l'avvertenza, quando in mezzo c'è il segno meno, di mettere al primo posto il termine di valore maggiore

quindi posso scrivere

$$
\textcolor{blue}{x_{1,2} = \frac{-1 - \sqrt{3} \pm (\sqrt{3} - 1)}{2}}
$$

> **Nota:** nota che ho messo la parentesi perché quando prenderò il segno meno cambierà di segno anche l'1 dentro parentesi

considero il più

$$
\textcolor{blue}{x_1 = \frac{-1 - \sqrt{3} + \sqrt{3} - 1}{2} = \frac{-2}{2} = -1}
$$

considero il meno

$$
\textcolor{blue}{x_2 = \frac{-1 - \sqrt{3} - (\sqrt{3} - 1)}{2} = \frac{-1 - \sqrt{3} - \sqrt{3} + 1}{2} = \frac{-2\sqrt{3}}{2} = -\sqrt{3}}
$$

ottengo quindi le soluzioni

$x_1 = -1$
$x_2 = -\sqrt{3}$