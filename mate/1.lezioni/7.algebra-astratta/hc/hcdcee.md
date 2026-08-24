# Insieme dei resti modulo 6 (o relazione di congruenza modulo 6)

> **Nota:** Per vedere i calcoli ferma il mouse sul numero della tabella che ti interessa

Vediamo prima il gruppo additivo $$(r_6, \oplus)$$

| $$\textcolor{red}{\oplus}$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $$0$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ |
| $$1$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$0$$ |
| $$2$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$0$$ | $$1$$ |
| $$3$$ | $$3$$ | $$4$$ | $$5$$ | $$0$$ | $$1$$ | $$2$$ |
| $$4$$ | $$4$$ | $$5$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ |
| $$5$$ | $$5$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ |

Dalla tabella puoi vedere che:

- $$0$$ è l'elemento neutro (sommandolo per gli altri non li cambia).
- Per trovare l'inverso basta che guardi quando i risultati sono $$0$$: gli $$0$$ sono all'incrocio di elementi inversi, quindi:
    - $$1$$ è l'opposto di $$5$$ e viceversa.
    - $$2$$ è l'opposto di $$4$$ e viceversa.
    - $$3$$ è l'opposto di se stesso.
    - $$0$$ è l'opposto di se stesso.

> **Nota:** Quando abbiamo un gruppo additivo l'elemento inverso si chiama anche opposto.

***

Vediamo quindi la tabella di Cayley per $$(r_6, \otimes)$$

| $$\textcolor{red}{\otimes}$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $$0$$ | $$0$$ | $$0$$ | $$0$$ | $$0$$ | $$0$$ | $$0$$ |
| $$1$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ |
| $$2$$ | $$0$$ | $$2$$ | $$4$$ | $$0$$ | $$2$$ | $$4$$ |
| $$3$$ | $$0$$ | $$3$$ | $$0$$ | $$3$$ | $$0$$ | $$3$$ |
| $$4$$ | $$0$$ | $$4$$ | $$2$$ | $$0$$ | $$4$$ | $$2$$ |
| $$5$$ | $$0$$ | $$5$$ | $$4$$ | $$3$$ | $$2$$ | $$1$$ |

Dalla tabella puoi vedere che:

- $$0$$ è l'elemento assorbente (moltiplicandolo per gli altri li fa diventare $$0$$; li assorbe). Stavolta, anche togliendo lo $$0$$, non hai strutture di gruppo.
- $$1$$ è l'elemento neutro (moltiplicandolo per gli altri non li cambia).
- Per trovare l'inverso basta che guardi quando i risultati sono $$1$$: gli $$1$$ sono all'incrocio di elementi inversi, quindi:
    - $$2$$, $$3$$ e $$4$$ sono divisori dello zero e non hanno inversi.
    - $$1$$ è l'inverso di se stesso.
    - $$5$$ è l'inverso di se stesso.