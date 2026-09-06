# <span class="text-red-600">esercizio</span>

risolvere la seguente equazione:

$x^2 - 6x + 9 = 0$

---

Possiamo risolverla
<a name="su"></a>

1. Con la formula normale
2. [con la formula ridotta](#secondo)
3. [Con un'osservazione](#terzo) (meglio)

se devi scegliere è meglio risolvere con un'osservazione, se questo non è possibile è preferibile usare la formula ridotta piuttosto che la formula completa, anche perché, come potrai vedere confrontando i metodi, con la formula ridotta le operazioni vengono, di solito, semplificate

---

consideriamo la formula risolutiva normale

$$
\textcolor{blue}{x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}
$$

abbiamo:

$\textcolor{blue}{a = 1}$
$\textcolor{blue}{b = -6}$
$\textcolor{blue}{c = 9}$

sostituiamo nella formula

$$
\textcolor{blue}{x_{1,2} = \frac{+6 \pm \sqrt{6^2 - 4(1)(9)}}{2(1)} =}
$$

facciamo i calcoli dentro radice

$$
\textcolor{blue}{= \frac{6 \pm \sqrt{36 - 36}}{2} =}
$$

$$
\textcolor{blue}{= \frac{+6 \pm \sqrt{0}}{2} =}
$$

$$
\textcolor{blue}{= \frac{6 \pm 0}{2}}
$$

adesso devo prendere una volta il più ed una volta il meno, ma essendo il secondo termine $0$ non cambia nulla

$$
\textcolor{blue}{= \frac{6 + 0}{2} = 3}
$$

$$
\textcolor{blue}{= \frac{6 - 0}{2} = 3}
$$

Ho quindi le due soluzioni

$x_1 = 3$ \quad $x_2 = 3$

essendo il [discriminante](afccc.html) dell'equazione uguale a zero abbiamo due radici reali e coincidenti

---
<a name="secondo"></a>
[torna su](#su)

consideriamo la formula risolutiva ridotta ricordando che $\mathcal{B} = b/2$

$$
\textcolor{blue}{x_{1,2} = \frac{-\mathcal{B} \pm \sqrt{\mathcal{B}^2 - ac}}{a}}
$$

abbiamo:

$\textcolor{blue}{a = 1}$
$\textcolor{blue}{b = -6} \quad \textcolor{blue}{\mathcal{B} = -3}$
$\textcolor{blue}{c = 9}$

sostituiamo nella formula

$$
\textcolor{blue}{x_{1,2} = \frac{+3 \pm \sqrt{3^2 - (1)(9)}}{1} =}
$$

facciamo i calcoli dentro radice

$$
\textcolor{blue}{= 3 \pm \sqrt{9 - 9} =}
$$

$$
\textcolor{blue}{= 3 \pm \sqrt{0} =}
$$

$$
\textcolor{blue}{= 3 \pm 0}
$$

adesso devo prendere una volta il più ed una volta il meno, ma essendo il secondo addendo $0$ non cambia nulla

$\textcolor{blue}{3 + 0 = 3}$

$\textcolor{blue}{3 - 0 = 3}$

Ho quindi le due soluzioni

$x_1 = 3$ \quad $x_2 = 3$

essendo il [discriminante](afccc.html) dell'equazione uguale a zero abbiamo due radici reali e coincidenti

---
<a name="terzo"></a>
[torna su](#su)

Osserviamo l'equazione:

$x^2 - 6x + 9 = 0$

il polinomio $x^2 - 6x + 9$ è [scomponibile](../ad/ad6g.html) come quadrato di un binomio

$x^2 - 6x + 9 = (x-3)^2$

quindi possiamo risolvere l'equazione

$(x-3)^2 = 0$

che si scompone nelle due equazioni

$x - 3 = 0 \quad x - 3 = 0$

ed abbiamo come risultato

$x_1 = 3$ \quad $x_2 = 3$

Da notare che questo ragionamento (del quadrato di un binomio) si può fare ogni volta che il discriminante dell'equazione vale zero, cioè:

> <span class="text-purple-600">Se il discriminante vale zero il polinomio associato all'equazione è un quadrato perfetto. Viceversa se il polinomio associato all'equazione è un quadrato perfetto il discriminante vale zero</span>

[torna su](#su)

---