# [Insieme dei resti modulo 7]{.text-red-darken-1}
## [(o relazione di congruenza modulo 7)]{.text-red-darken-1}

> **Nota:** Per vedere i calcoli ferma il mouse sul numero della tabella che ti interessa.

Vediamo prima il gruppo additivo $$(r_7, +)$$

| $$\textcolor{red}{+}$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ |
|---|---|---|---|---|---|---|---|
| $$0$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ |
| $$1$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{0}$$ |
| $$2$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ |
| $$3$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ |
| $$4$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ |
| $$5$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ |
| $$6$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ |

Dalla tabella puoi vedere che:
- $$0$$ è l'elemento neutro (sommandolo agli altri non li cambia).

Per trovare l'inverso basta guardare quando i risultati sono $$0$$: gli $$0$$ sono all'incrocio di elementi inversi, quindi:
- $$1$$ è l'opposto di $$6$$ e viceversa
- $$2$$ è l'opposto di $$5$$ e viceversa
- $$3$$ è l'opposto di $$4$$ e viceversa
- $$0$$ è l'opposto di sé stesso

> **Nota:** Quando abbiamo un gruppo additivo l'elemento inverso si chiama anche opposto.

---

Vediamo quindi la tabella di Cayley per $$(r_7, \cdot)$$

| $$\textcolor{red}{\cdot}$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ |
|---|---|---|---|---|---|---|---|
| $$0$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ |
| $$1$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ |
| $$2$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{5}$$ |
| $$3$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{4}$$ |
| $$4$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{3}$$ |
| $$5$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{2}$$ |
| $$6$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{1}$$ |

Dalla tabella puoi vedere che:
- $$0$$ è l'elemento assorbente (moltiplicandolo per gli altri li fa diventare $$0$$, li assorbe); per poter avere la struttura di gruppo dovresti togliere lo zero, $$(r_7 - \{0\}, \cdot)$$, perché lo zero non ha elemento inverso.
- $$1$$ è l'elemento neutro (moltiplicandolo per gli altri non li cambia).

Per trovare l'inverso basta guardare quando i risultati sono $$1$$: gli $$1$$ sono all'incrocio di elementi inversi, quindi:
- $$2$$ è l'inverso di $$4$$ e viceversa
- $$3$$ è l'inverso di $$5$$ e viceversa
- $$6$$ è l'inverso di sé stesso

> **Osservazione:** Queste tabelle ci suggeriscono una nuova struttura: l'anello.