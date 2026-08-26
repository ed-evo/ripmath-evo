# successione dei numeri dispari

> **Importante!**
> Per scrivere correttamente un numero dispari generico conviene prima scrivere un numero pari $2n$ e poi aumentarlo di $1$ scrivendo $2n+1$ (cioè usiamo il fatto che il successivo di qualunque numero pari è dispari)

Partiamo dalla successione dei numeri pari (quella che inizia da $0$) e, ad ogni termine, sommiamo $+1$

$$
0+1, 2+1, 4+1, \dots, 2n+1, 2n+2+1, \dots
$$

otteniamo la successione dei numeri dispari

La successione dei numeri dispari applica $N$ su una parte di se stessa $s: N \to N+N+1$, o meglio $s: N \to 2N+1$ facendo corrispondere ad ogni numero il suo doppio aumentato di uno;

Indichiamo la successione con

$$
1, 3, 5, \dots, 2n+1, 2(n+1)+1, \dots
$$

> Da notare che la successione dei numeri dispari è complementare, rispetto ad $N$ della successione dei numeri pari, nel senso che unendo la successione dei numeri pari con la successione dei numeri dispari otteniamo tutto $N$

Possiamo anche farla iniziare da un qualunque numero dispari positivo

$$
5, 7, 9, \dots, 5+2n, 5+2n+2, \dots
$$

Anche qui i puntini sono elastici e possono indicare indifferentemente quanti termini servono, inoltre, essendo $5$ dispari posso togliere il $+1$ dopo il $2n$ (la somma di un numero dispari e di uno pari è dispari)

Può anche iniziare da un numero dispari intero negativo, ma in tal caso l'applicazione è $s: N \to \mathbb{Z}$

$$
-7, -5, -3, \dots, -7+2n, -7+2n+2, \dots
$$

Queste successioni sono tutte divergenti