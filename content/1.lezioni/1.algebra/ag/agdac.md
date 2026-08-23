# Delta del polinomio minore di zero

Se il [discriminante](../af/afccc.html) dell'equazione è minore di zero allora non ho nessuna soluzione quindi non posso fare riferimento ad $$\textcolor{red}{x_1}$$ ed $$\textcolor{red}{x_2}$$.

Allora per vedere il segno del trinomio

$$
\textcolor{red}{ax^2 + bx + c}
$$

devo riferirmi a qualcos'altro: in matematica io so che un quadrato ha sempre il segno positivo, quindi cerco di isolare parte del trinomio facendola diventare un quadrato:

come prima cosa metto in evidenza $$a$$ fra i vari termini

$$
\textcolor{red}{ax^2 + bx + c =}
$$

Ma se $$a$$ non c'è in tutti i termini come si fa a metterla in evidenza? Per metterla in evidenza basta prima farla comparire moltiplicando i termini senza $$a$$ per $$a/a$$ (è come moltiplicarli per $$1$$)

$$
\textcolor{red}{ax^2 + \frac{abx}{a} + \frac{ac}{a} =}
$$

ora posso mettere in evidenza la $$a$$ raccogliendo quella al numeratore

$$
\textcolor{red}{a(x^2 + \frac{bx}{a} + \frac{c}{a}) =}
$$

ora il primo termine entro parentesi è quadrato, posso considerare il secondo come doppio prodotto.
il [termine da aggiungere (e togliere)](agdac1.html) perché venga un quadrato è

$$
\textcolor{red}{\frac{b^2}{4a^2}}
$$

eseguo

$$
\textcolor{red}{a(x^2 + \frac{bx}{a} + \frac{b^2}{4a^2} - \frac{b^2}{4a^2} + \frac{c}{a}) =}
$$

Scrivo i primi tre termini come quadrato e negli ultimi due faccio il minimo comune multiplo

$$
\textcolor{red}{a[(x + \frac{b}{2a})^2 - \frac{b^2 - 4ac}{4a^2}]}
$$

e questa è un'espressione di cui conosciamo il segno, infatti:

- il quadrato è positivo
- il termine sopra il segno di frazione $$b^2 - 4ac$$ corrisponde al Delta ed è negativo, quindi con il meno davanti diventa positivo
- il termine al denominatore $$4a^2$$ è positivo perché è quadrato

tutta l'espressione è positiva
quindi posso dire:

Se il delta è minore di zero il trinomio è sempre positivo per tutti i valori della $$x$$.

**Condizioni:**
$$\Delta < 0$$
$$a > 0$$

- $$ax^2 + bx + c \geq 0$$: [sempre verificato per ogni valore di $$x$$]{.text-red}
- $$ax^2 + bx + c < 0$$: [mai verificato]{.text-red}