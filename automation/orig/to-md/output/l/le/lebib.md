# [Distribuzione esponenziale]{.text-red}

> Anche questa è interessante soprattutto per i calcoli che ci introducono poi alla distribuzione più "gettonata" (legge di Gauss)

Consideriamo la variabile casuale $X$ che assume tutti i valori nell'intervallo $[0; +\infty]$ con funzione densità:

$$
f(x) = k e^{-\alpha x}
$$

con $\alpha$ valore dato e $k$ valore da determinare. Essendo la probabilità totale su $[0; +\infty]$ uguale ad $1$, possiamo trovare il valore di $k$ impostando l'equazione:

$$
\int_{0}^{+\infty} k e^{-\alpha x} dx = 1
$$

Otteniamo:

$$
\frac{k}{-\alpha} \left[ e^{-\alpha x} \right]_{0}^{+\infty} = 1
$$

$$
\frac{k}{-\alpha} (0 - 1) = 1
$$

$$
\frac{k}{\alpha} = 1
$$

$$
k = \alpha
$$

Quindi la nostra funzione densità è:

$$
f(x) = \alpha e^{-\alpha x}
$$

Il grafico di tale funzione, essendo una funzione di tipo esponenziale con esponente negativo, parte dal valore $\alpha$ sull'asse $y$ (infatti ponendo $x = 0$ abbiamo $y = \alpha e^{0} = \alpha \cdot 1 = \alpha$) e si avvicina asintoticamente all'asse delle $x$ (per $x \to +\infty$ abbiamo $y \to \alpha e^{-\infty} = \alpha \cdot 0 = 0$).

***

Otterremo la funzione di ripartizione calcolando l'integrale da $0$ a $x$ della funzione densità:

$$
F(x) = \int_{0}^{x} \alpha e^{-\alpha t} dt = \left[ -e^{-\alpha t} \right]_{0}^{x} = -e^{-\alpha x} + 1 = 1 - e^{-\alpha x}
$$

Quindi abbiamo la funzione di ripartizione:

$$
F(x) = \begin{cases} 0 & \text{se } x < 0 \\ 1 - e^{-\alpha x} & \text{se } x \geq 0 \end{cases}
$$

***

Calcoliamo ora il valore medio:

$$
M(X) = \int_{0}^{+\infty} x \alpha e^{-\alpha x} dx = \alpha \int_{0}^{+\infty} x e^{-\alpha x} dx
$$

Questo è un integrale per parti che ha soluzione:

$$
M(X) = -\alpha \left[ \frac{x e^{-\alpha x}}{\alpha} \right]_{0}^{+\infty} - \left[ \frac{e^{-\alpha x}}{\alpha} \right]_{0}^{+\infty}
$$

$$
M(X) = \frac{1}{\alpha}
$$

***

Calcoliamo ancora la varianza. Prima calcolo il valore medio del quadrato della variabile aleatoria:

$$
M(X^2) = \int_{0}^{+\infty} x^2 \alpha e^{-\alpha x} dx
$$

Anche questo è un integrale per parti che ha soluzione:

$$
M(X^2) = \frac{2}{\alpha^2}
$$

Adesso, per trovare la varianza, da questo valore sottraggo il quadrato del valore medio:

$$
\sigma^2(X) = M(X^2) - [M(X)]^2 = \frac{2}{\alpha^2} - \frac{1}{\alpha^2} = \frac{1}{\alpha^2}
$$

***

Infine calcoliamo lo scarto quadratico medio. Basta applicare la radice al risultato precedente: otteniamo:

$$
\sigma = \sqrt{\frac{1}{\alpha^2}} = \frac{1}{\alpha}
$$

Quindi, nella variabile casuale con distribuzione esponenziale lo scarto quadratico medio coincide con il valore medio.