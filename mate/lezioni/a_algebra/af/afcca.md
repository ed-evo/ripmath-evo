# <span class="text-red-600">Formula risolutiva dell'equazione di secondo grado</span>

Dobbiamo dimostrare come da

$$
ax^2 + bx + c = 0
$$

si giunga a

$$
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

---

$$
ax^2 + bx + c = 0
$$

Devo togliere di mezzo $x^2$ e farla diventare una $x$, l'unico sistema è di racchiudere le $x$ dentro un quadrato, facendo poi la radice avrò la $x$ a potenza $1$.

Perché $ax^2$ faccia parte di un quadrato dovrò moltiplicarlo per $a$.
Perché $bx$ sia il doppio prodotto dovrei moltiplicarlo per $2$;
siccome però quando moltiplico devo moltiplicare tutti i termini, il primo termine non sarebbe più un quadrato; allora moltiplicherò per $4$ così il primo termine diventa un quadrato ed il secondo un doppio prodotto.

Conclusione: moltiplico tutto per $4a$

$$
4a(ax^2 + bx + c) = 0
$$

$$
4a^2x^2 + 4abx + 4ac = 0
$$

Il primo termine è un quadrato, il secondo è un doppio prodotto quindi manca il quadrato del secondo, guardando il doppio prodotto vedo che l'unico termine che manca è $b$, quindi perché vi sia un quadrato devo aggiungere (e togliere per non cambiare il valore) $b^2$

$$
4a^2x^2 + 4abx + b^2 - b^2 + 4ac = 0
$$

raccolgo il quadrato

$$
(2ax + b)^2 - b^2 + 4ac = 0
$$

lascio il quadrato da solo prima dell'uguale

$$
(2ax + b)^2 = b^2 - 4ac
$$

Estraggo la radice da una parte e dall'altra

$$
\sqrt{(2ax + b)^2} = \pm \sqrt{b^2 - 4ac}
$$

$$
2ax + b = \pm \sqrt{b^2 - 4ac}
$$

ora è come un'equazione di primo grado quindi porto i termini senza $x$ dopo l'uguale

$$
2ax = -b \pm \sqrt{b^2 - 4ac}
$$

divido tutto per $2a$ in modo da lasciare la $x$ da sola

$$
\frac{2ax}{2a} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

e si ottiene la formula finale

$$
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

---

> A volte conviene applicare una formula più veloce: la formula ridotta che troverai nella prossima pagina.

[Pagina iniziale](../../../index.html) | [Indice di algebra](../../a.html) | [Pagina successiva](afccb.html) | [Pagina precedente](afcc.html)