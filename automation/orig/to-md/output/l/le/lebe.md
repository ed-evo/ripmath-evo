# [Alcune relazioni notevoli]{.text-red}

ora possiamo definire la funzione di ripartizione su $\mathbb{R}$ come

$$
F(x) = \begin{cases} 0 & \text{se } t \le a \\ \int_a^x f(t) dt & \text{se } a \le t \le b \\ 1 & \text{se } t \ge b \end{cases}
$$

ed abbiamo che vale sempre

$$
\int_a^b f(t) dt = 1
$$

---

Esempio:
Determinare il valore della costante $k$ in modo che la funzione $y = kx$ sia la funzione densità di una variabile casuale continua che assume tutti i valori compresi nell'intervallo $[0; 4]$.
Per calcolare il valore di $k$ basterà trovare l'integrale definito da $0$ a $4$ della funzione densità e porre il risultato uguale a $1$ (probabilità certa).

$$
\int_a^x f(t) dt = \int_0^4 kx dx = \left| \frac{1}{2} k x^2 \right|_0^4 = 8k - 0 = 8k
$$

pongo il valore dell'integrale uguale a $1$

$$
8k = 1
$$
$$
k = 1/8
$$

quindi la funzione densità è:

$$
f(x) = \frac{x}{8}
$$

Mentre la funzione di ripartizione è il risultato dell'integrale cioè:

$$
F(x) = \frac{x^2}{4}
$$

Possiamo dare una rappresentazione della variabile casuale continua ponendo in ascissa i valori della variabile aleatoria $X$ e in ordinata i valori $f(x)$ della funzione densità; da notare che l'area sottesa fra $f(x)$ e l'asse delle ascisse vale sempre $1$.

> Nel grafico a destra, per ragioni di rappresentazione, ho usato unità di misura diverse per ascisse ed ordinate.

---

La variabile casuale continua viene anche rappresentata graficamente prendendo in ascissa i valori $X$ della variabile aleatoria ed in ordinata i valori $F(x)$ della funzione di ripartizione;

a destra un esempio dal nostro solito esercizio:
Variabile aleatoria $X$ continua sull'intervallo $[0; 4]$ con funzione di ripartizione

$$
F(x) = \frac{x^2}{4}
$$

È una parte di parabola con vertice l'origine e concavità verso l'alto.

> **Nota:** Consulta la sezione di approfondimento.

---

inoltre se abbiamo

$$
F(x_1) = \int_a^{x_1} f(t) dt \quad \text{e} \quad F(x_2) = \int_a^{x_2} f(t) dt \quad \text{con } x_1 \le x_2
$$

Ne segue

$$
Pr(x_1 \le X \le x_2) = F(x_2) - F(x_1) = \int_{x_1}^{x_2} f(x) dx
$$

Cioè:

> **La probabilità che la variabile aleatoria $X$ assuma un valore compreso fra $x_1$ ed $x_2$ è dato dall'integrale definito della funzione densità calcolato da $x_1$ ad $x_2$**

Quindi, d'ora in avanti, per calcolare una probabilità in un intervallo potremo calcolare un'area mediante il calcolo integrale.

---

Ad esempio calcoliamo ora la probabilità che la variabile aleatoria assuma valore tra $1$ e $2$

$$
\int_1^2 \frac{1}{8} x dx = \left| \frac{1}{16} x^2 \right|_1^2 = \frac{4}{16} - \frac{1}{16} = \frac{3}{16}
$$

È rappresentata in figura dall'area di colore grigio-scuro.

---