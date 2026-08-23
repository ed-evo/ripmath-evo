# Insieme dei resti modulo 8 (o relazione di congruenza modulo 8)

> Per vedere i calcoli ferma il mouse sul numero della tabella che ti interessa.

Vediamo prima il gruppo additivo $$(r_8, \oplus)$$

| $$\textcolor{red}{\oplus}$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ | $$7$$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $$0$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{7}$$ |
| $$1$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{7}$$ | $$\textcolor{red}{0}$$ |
| $$2$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{7}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ |
| $$3$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{7}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ |
| $$4$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{7}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ |
| $$5$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{7}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ |
| $$6$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{7}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ |
| $$7$$ | $$\textcolor{red}{7}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ |

Dalla tabella puoi vedere che:
- $$0$$ è l'elemento neutro (sommandolo agli altri non li cambia).

Per trovare l'inverso basta che guardi quando i risultati sono $$0$$: gli $$0$$ sono all'incrocio di elementi inversi, quindi:
- $$1$$ è l'opposto di $$7$$ e viceversa
- $$2$$ è l'opposto di $$6$$ e viceversa
- $$3$$ è l'opposto di $$5$$ e viceversa
- $$4$$ è l'opposto di sé stesso
- $$0$$ è l'opposto di sé stesso

> **Nota:** quando abbiamo un gruppo additivo l'elemento inverso si chiama anche opposto.

---

Vediamo quindi la tabella di Cayley per $$(r_8, \otimes)$$

| $$\textcolor{red}{\otimes}$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ | $$7$$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $$0$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ |
| $$1$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{7}$$ |
| $$2$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{6}$$ |
| $$3$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{7}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{5}$$ |
| $$4$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{4}$$ |
| $$5$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{7}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{3}$$ |
| $$6$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{2}$$ |
| $$7$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{7}$$ | $$\textcolor{red}{6}$$ | $$\textcolor{red}{5}$$ | $$\textcolor{red}{4}$$ | $$\textcolor{red}{3}$$ | $$\textcolor{red}{2}$$ | $$\textcolor{red}{1}$$ |

Dalla tabella puoi vedere che:
- $$0$$ è l'elemento assorbente (moltiplicandolo per gli altri li fa diventare $$0$$, li assorbe; anche togliendo lo zero stavolta non hai strutture di gruppo).
- $$1$$ è l'elemento neutro (moltiplicandolo per gli altri non li cambia).

Per trovare l'inverso basta che guardi quando i risultati sono $$1$$: gli $$1$$ sono all'incrocio di elementi inversi, quindi:
- $$2$$ non ha inverso
- $$4$$ non ha inverso
- $$6$$ non ha inverso
- $$0$$ non ha inverso
- $$1$$ è l'inverso di sé stesso
- $$3$$ è l'inverso di sé stesso
- $$5$$ è l'inverso di sé stesso
- $$7$$ è l'inverso di sé stesso