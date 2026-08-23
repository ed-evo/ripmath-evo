# [Insieme dei resti modulo $$9$$ (o relazione di congruenza modulo $$9$$)]{.text-red}

> **Nota:** Per vedere i calcoli ferma il mouse sul numero della tabella che ti interessa.

## Vediamo prima il gruppo additivo $$(r_9, \oplus)$$

| $$\oplus$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ | $$7$$ | $$8$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$$0$$** | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ | $$7$$ | $$8$$ |
| **$$1$$** | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ | $$7$$ | $$8$$ | $$0$$ |
| **$$2$$** | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ | $$7$$ | $$8$$ | $$0$$ | $$1$$ |
| **$$3$$** | $$3$$ | $$4$$ | $$5$$ | $$6$$ | $$7$$ | $$8$$ | $$0$$ | $$1$$ | $$2$$ |
| **$$4$$** | $$4$$ | $$5$$ | $$6$$ | $$7$$ | $$8$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ |
| **$$5$$** | $$5$$ | $$6$$ | $$7$$ | $$8$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ |
| **$$6$$** | $$6$$ | $$7$$ | $$8$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ |
| **$$7$$** | $$7$$ | $$8$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ |
| **$$8$$** | $$8$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ | $$7$$ |

> Dalla tabella puoi vedere che:
> - $$0$$ è l'elemento neutro (sommandolo agli altri non li cambia).
> 
> Per trovare l'inverso basta guardare quando i risultati sono $$0$$: gli $$0$$ sono all'incrocio di elementi inversi, quindi:
> - $$1$$ è l'opposto di $$8$$ e viceversa
> - $$2$$ è l'opposto di $$7$$ e viceversa
> - $$3$$ è l'opposto di $$6$$ e viceversa
> - $$4$$ è l'opposto di $$5$$ e viceversa
> - $$0$$ è l'opposto di sé stesso
> 
> Quando abbiamo un gruppo additivo l'elemento inverso si chiama anche opposto.

---

## Vediamo quindi la tabella di Cayley per $$(r_9, \otimes)$$

| $$\otimes$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ | $$7$$ | $$8$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$$0$$** | $$0$$ | $$0$$ | $$0$$ | $$0$$ | $$0$$ | $$0$$ | $$0$$ | $$0$$ | $$0$$ |
| **$$1$$** | $$0$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ | $$7$$ | $$8$$ |
| **$$2$$** | $$0$$ | $$2$$ | $$4$$ | $$6$$ | $$8$$ | $$1$$ | $$3$$ | $$5$$ | $$7$$ |
| **$$3$$** | $$0$$ | $$3$$ | $$6$$ | $$0$$ | $$3$$ | $$6$$ | $$0$$ | $$3$$ | $$6$$ |
| **$$4$$** | $$0$$ | $$4$$ | $$8$$ | $$3$$ | $$7$$ | $$2$$ | $$6$$ | $$1$$ | $$5$$ |
| **$$5$$** | $$0$$ | $$5$$ | $$1$$ | $$6$$ | $$2$$ | $$7$$ | $$3$$ | $$8$$ | $$4$$ |
| **$$6$$** | $$0$$ | $$6$$ | $$3$$ | $$0$$ | $$6$$ | $$3$$ | $$0$$ | $$6$$ | $$3$$ |
| **$$7$$** | $$0$$ | $$7$$ | $$5$$ | $$3$$ | $$1$$ | $$8$$ | $$6$$ | $$4$$ | $$2$$ |
| **$$8$$** | $$0$$ | $$8$$ | $$7$$ | $$6$$ | $$5$$ | $$4$$ | $$3$$ | $$2$$ | $$1$$ |

> Dalla tabella puoi vedere che:
> - $$0$$ è l'elemento assorbente (moltiplicandolo per gli altri li fa diventare $$0$$, cioè li assorbe); anche togliendo lo zero stavolta non hai strutture di gruppo.
> - $$1$$ è l'elemento neutro (moltiplicandolo per gli altri non li cambia).
> 
> Per trovare l'inverso basta guardare quando i risultati sono $$1$$: gli $$1$$ sono all'incrocio di elementi inversi, quindi:
> - $$2$$ è l'inverso di $$5$$
> - $$4$$ è l'inverso di $$7$$
> - $$3$$ è divisore dello zero e non ha inverso
> - $$6$$ è divisore dello zero e non ha inverso
> - $$0$$ non ha inverso
> - $$1$$ è l'inverso di sé stesso
> - $$8$$ è l'inverso di sé stesso