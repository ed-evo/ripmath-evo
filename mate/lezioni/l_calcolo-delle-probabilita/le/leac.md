# Valore medio di una variabile aleatoria

Talvolta i dati portati da una distribuzione di probabilità sono sovrabbondanti, nel senso che, per le applicazioni, può essere sufficiente conoscere qualche valore caratteristico, come in fisica, talvolta, per studiare il moto di un sistema è sufficiente studiarne il moto del baricentro: il valore medio (chiamato anche speranza matematica) è l'equivalente in teoria della probabilità del baricentro di un sistema in fisica.

Il valore medio, in particolare, è molto utile quando abbiamo un [elevato numero di dati](leaca.html) che siano abbastanza "raggruppati".

> **Definizione:**
> Il valore medio $M(X) = m$ della variabile aleatoria $X$ è la somma dei prodotti di ogni valore $X_i$ della variabile aleatoria per la rispettiva probabilità $p_i$.
>
> $$
> m = M(X) = X_1 p_1 + X_2 p_2 + X_3 p_3 + \dots + X_n p_n
> $$
>
> Qualche libro usa il simbolo $\mu$.

> **Significato:**
> Il valore medio di una variabile aleatoria rappresenta la previsione teorica del valore che mediamente tale variabile assumerà nell'ipotesi di eseguire un numero elevato di prove.

Prendiamo il solito esempio del lancio di un dado:

| $X$ | 1 | 2 | 3 | 4 | 5 | 6 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| $Pr$ | $1/6$ | $1/6$ | $1/6$ | $1/6$ | $1/6$ | $1/6$ |

Avremo:

$$
m = M(X) = 1 \cdot \frac{1}{6} + 2 \cdot \frac{1}{6} + 3 \cdot \frac{1}{6} + 4 \cdot \frac{1}{6} + 5 \cdot \frac{1}{6} + 6 \cdot \frac{1}{6} = \frac{21}{6} = \frac{7}{2} = 3,5
$$

In pratica il valore medio si stabilisce fra i valori $3$ e $4$ dei dadi: cioè se facessi un gran numero di lanci e considerassi la media di tutte le uscite troverei $3,5$.

Vediamo su un altro esempio già sviluppato perché il valore medio viene anche chiamato speranza matematica: estrarre una carta da un mazzo di 40.

**Eventi:**

- $X_1$: Perdo 1 euro se esce una carta diversa dalle seguenti (27 carte)
- $X_2$: Vinco 0 (riprendo la posta) se esce una carta di denari diversa dall'asso (9 carte)
- $X_3$: Vinco 1 euro se esce un asso diverso dall'asso di denari (sarebbero 2 ma ho pagato la posta) (3 carte)
- $X_4$: Vinco 21 euro se esce l'asso di denari (sarebbero 22 ma ho pagato la posta) (1 carta)

**Probabilità:**

- $p_1 = \text{probabilità di uscita di una carta diversa dalle precedenti} = 27/40$
- $p_2 = \text{probabilità di uscita di carta di denari non asso} = 9/40$
- $p_3 = \text{probabilità di uscita di asso non di denari} = 3/40$
- $p_4 = \text{probabilità di uscita dell'asso di denari} = 1/40$

La variabile aleatoria è:

| $X$ | -1 | 0 | 1 | 21 |
| :--- | :---: | :---: | :---: | :---: |
| $Pr$ | $27/40$ | $9/40$ | $3/40$ | $1/40$ |

Il valore medio è:

$$
m = M(X) = -1 \cdot \frac{27}{40} + 0 \cdot \frac{9}{40} + 1 \cdot \frac{3}{40} + 21 \cdot \frac{1}{40} = -\frac{3}{40}
$$

Come vedi il valore medio, in questo caso in cui abbiamo preso come $X$ le somme da vincere (perdere), corrisponde esattamente alla speranza matematica già trovata.

Guarda alla fine dell'esercizio che abbiamo già fatto [in fondo alla pagina](../ld/ldd.html).