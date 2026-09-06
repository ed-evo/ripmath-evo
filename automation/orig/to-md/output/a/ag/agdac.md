# Delta del polinomio minore di zero

Se il [discriminante](../af/afccc.html) dell'equazione è minore di zero allora non ho nessuna soluzione quindi non posso fare riferimento ad $x_1$ ed $x_2$.
Allora per vedere il segno del trinomio

$$
ax^2 + bx + c
$$

devo riferirmi a qualcos'altro: in matematica io so che un quadrato ha sempre il segno positivo, quindi cerco di isolare parte del trinomio facendola diventare un quadrato:
come prima cosa metto in evidenza $a$ fra i vari termini

$$
ax^2 + bx + c =
$$

Ma se $a$ non c'è in tutti i termini come si fa a metterla in evidenza? Per metterla in evidenza basta prima farla comparire moltiplicando i termini senza $a$ per $a/a$ (è come moltiplicarli per $1$)

$$
ax^2 + \frac{abx}{a} + \frac{ac}{a} =
$$

ora posso mettere in evidenza la $a$ raccogliendo quella al numeratore

$$
a(x^2 + \frac{bx}{a} + \frac{c}{a}) =
$$

ora il primo termine entro parentesi è quadrato, posso considerare il secondo come doppio prodotto.
il [termine da aggiungere (e togliere)](agdac1.html) perché venga un quadrato è

$$
\frac{b^2}{4a^2}
$$

eseguo

$$
a(x^2 + \frac{bx}{a} + \frac{b^2}{4a^2} - \frac{b^2}{4a^2} + \frac{c}{a}) =
$$

Scrivo i primi tre termini come quadrato e negli ultimi due faccio il minimo comune multiplo

$$
a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2 - 4ac}{4a^2}\right]
$$

e questa è un'espressione di cui conosciamo il segno, infatti:

- il quadrato è positivo
- il termine sopra il segno di frazione $b^2 - 4ac$ corrisponde al $\Delta$ ed è negativo, quindi con il meno davanti diventa positivo
- il termine al denominatore $4a^2$ è positivo perché è quadrato

tutta l'espressione è positiva
quindi posso dire:
Se il $\Delta$ è minore di zero il trinomio è sempre positivo per tutti i valori della $x$

**Condizione:** $\Delta < 0$ e $a > 0$

- $ax^2 + bx + c > 0 \rightarrow$ <span class="text-red-500">sempre verificato per ogni valore di $x$</span>
- $ax^2 + bx + c < 0 \rightarrow$ <span class="text-red-500">mai verificato</span>