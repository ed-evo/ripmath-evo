# Successione infinitesima

Diremo che la successione
**$a_1, a_2, a_3, \dots, a_n, \dots$**
è **infinitesima** se ammette come limite **$0$**

cioè se preso un numero $\epsilon$ piccolo a piacere, tutti i termini della successione distano da $0$ per meno di $\epsilon$ per ogni $n$ superiore ad un numero $k_\epsilon \in \mathbb{N}$ dipendente da $\epsilon$.

In simboli:

$$
\lim_{n \to \infty} a_n = 0 \iff |a_n| < \epsilon \implies n > k_\epsilon
$$

> **Esempio:**
> Verifico che la successione
> $\frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \dots, \frac{1}{2^n}, \dots$
> tende a zero;
> Se considero un numero piccolissimo $\epsilon$, devo mostrare che esiste un legame fra $\epsilon$ e l'indice $n$ tale che più diminuisce $\epsilon$ più aumenta $n$.
> Dimostriamo che da un certo momento in poi, se $n$ è grande, vale:
> $$
> \left| \frac{1}{2^n} \right| < \epsilon
> $$
> Tolgo il modulo essendo l'altro termine certamente positivo come potenza di un numero positivo e l'espressione precedente equivale a:
> $$
> \frac{1}{2^n} < \epsilon
> $$
> m.c.m. e tolgo il denominatore: essendo tutti i numeri positivi la disuguaglianza conserva il verso; ottengo:
> $$
> 1 < \epsilon \cdot 2^n
> $$
> Ricavo $n$:
> $$
> 2^n > \frac{1}{\epsilon}
> $$
> Per ricavare l'esponente passo ai logaritmi:
> $$
> n = \log_2 \frac{1}{\epsilon}
> $$
> Questa espressione è equivalente alla prima.
> Essendo $\epsilon$ molto piccolo segue che $\frac{1}{\epsilon}$ è molto grande e anche il logaritmo in base due di un numero molto grande è molto grande e più diminuisce $\epsilon$ più aumenta il valore del logaritmo.
> Come volevamo.

Senza farne la dimostrazione diciamo che vale la seguente affermazione:

**Se la successione**
$a_1, a_2, a_3, a_4, \dots, a_n, \dots$
**converge al valore $a$, allora la successione**
$a_1 - a, a_2 - a, a_3 - a, a_4 - a, \dots, a_n - a, \dots$
**è infinitesima**

e vale anche il viceversa:

**Se la successione**
$a_1 - a, a_2 - a, a_3 - a, a_4 - a, \dots, a_n - a, \dots$
**è infinitesima allora la successione**
$a_1, a_2, a_3, a_4, \dots, a_n, \dots$
**converge al valore $a$**