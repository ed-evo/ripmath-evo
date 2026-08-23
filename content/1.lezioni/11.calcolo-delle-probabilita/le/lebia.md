# [Distribuzione uniforme]{.text-red}

> Più che un'effettiva probabilità si tratta di una probabilità "didattica" o meglio di un tipo di probabilità che ci permette di capire meglio tutto l'impianto

Consideriamo la variabile casuale $$X$$ che assume tutti i valori nell'intervallo $$[a;b]$$ con funzione densità
$$f(x) = k$$
Essendo la probabilità totale su $$[a;b]$$ uguale ad $$1$$ possiamo trovare il valore di $$k$$ impostando l'equazione

$$
\int_a^b k \, dx = 1
$$

l'integrale è immediato e otteniamo

$$
| kx |_a^b = 1
$$

risolvendo

$$
kb - ka = 1
$$

raccogliendo $$k$$

$$
k(b-a) = 1
$$

$$
k = \frac{1}{b-a}
$$

quindi la nostra funzione densità è

$$
f(x) = \frac{1}{b-a}
$$

Il grafico di tale funzione, essendo una funzione costante, è un segmento orizzontale da $$x=a$$ ad $$x=b$$ di altezza sull'asse delle $$x$$ uguale a $$1/(b-a)$$ e l'area sottesa (la parte grigia) vale $$1$$.

Otterremo la funzione di ripartizione calcolando l'integrale da $$a$$ ad $$x$$ della funzione densità

$$
F(x) = \int_a^x \frac{1}{b-a} \, dt = \frac{1}{b-a} \int_a^x dt = \frac{1}{b-a} |t|_a^x = \frac{x-a}{b-a}
$$

quindi abbiamo la funzione di ripartizione

$$
F(x) = \begin{cases} 0 & \text{se } x \le a \\ \frac{x-a}{b-a} & \text{se } a \le x \le b \\ 1 & \text{se } x \ge b \end{cases}
$$

a destra la sua rappresentazione grafica.

Calcoliamo ora il valore medio

$$
M(X) = \int_a^b x f(x) \, dx = \int_a^b x \frac{1}{b-a} \, dx = \frac{1}{b-a} \int_a^b x \, dx = \frac{1}{b-a} \left| \frac{x^2}{2} \right|_a^b = \frac{1}{b-a} \cdot \frac{b^2 - a^2}{2} = \frac{(b+a)(b-a)}{2(b-a)} = \frac{b+a}{2}
$$

Quindi il valore medio è quello che divide a metà verticalmente la funzione densità, o meglio la media aritmetica fra gli estremi $$a$$ e $$b$$.

Calcoliamo ancora la varianza.
Prima calcolo il valore medio del quadrato della variabile aleatoria

$$
M(X^2) = \int_a^b x^2 f(x) \, dx = \int_a^b x^2 \frac{1}{b-a} \, dx = \frac{1}{b-a} \int_a^b x^2 \, dx = \frac{1}{b-a} \left| \frac{x^3}{3} \right|_a^b = \frac{1}{b-a} \cdot \frac{b^3 - a^3}{3} = \frac{(b-a)(b^2 + ab + a^2)}{3(b-a)} = \frac{b^2 + ab + a^2}{3}
$$

Adesso, per trovare la varianza da questo valore sottraggo il quadrato del valore medio

$$
\sigma^2(X) = M(X^2) - [M(X)]^2 = \frac{b^2 + ab + a^2}{3} - \frac{(b+a)^2}{4}
$$

faccio il minimo comune multiplo

$$
\sigma^2(X) = \frac{4(b^2 + ab + a^2) - 3(b^2 + 2ab + a^2)}{12} = \frac{4b^2 + 4ab + 4a^2 - 3b^2 - 6ab - 3a^2}{12} = \frac{b^2 - 2ab + a^2}{12} = \frac{(b-a)^2}{12}
$$

Infine calcoliamo lo scarto quadratico medio.
Basta applicare la radice al risultato precedente

$$
\sigma = \sqrt{\frac{(b-a)^2}{12} }
$$

quindi

$$
\sigma = \frac{b-a}{2\sqrt{3}} \approx 0,288675 (b-a)
$$