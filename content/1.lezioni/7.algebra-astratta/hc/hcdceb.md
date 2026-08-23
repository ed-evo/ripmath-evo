# [Insieme dei resti modulo 4 (o relazione di congruenza modulo 4)]{.text-red}

Per vedere i calcoli ferma il mouse sul numero della tabella che ti interessa.

Vediamo prima il gruppo additivo $$(r_4, \oplus)$$.

| $$\oplus$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ |
| :---: | :---: | :---: | :---: | :---: |
| $$0$$ | [$$0$$]{.text-red} | [$$1$$]{.text-red} | [$$2$$]{.text-red} | [$$3$$]{.text-red} |
| $$1$$ | [$$1$$]{.text-red} | [$$2$$]{.text-red} | [$$3$$]{.text-red} | [$$0$$]{.text-red} |
| $$2$$ | [$$2$$]{.text-red} | [$$3$$]{.text-red} | [$$0$$]{.text-red} | [$$1$$]{.text-red} |
| $$3$$ | [$$3$$]{.text-red} | [$$0$$]{.text-red} | [$$1$$]{.text-red} | [$$2$$]{.text-red} |

Dalla tabella puoi vedere che:
- $$0$$ è l'elemento neutro (sommandolo agli altri non li cambia).
- Per trovare l'inverso basta guardare quando i risultati sono $$0$$: gli $$0$$ sono all'incrocio di elementi inversi, quindi:
  - $$1$$ è l'opposto di $$3$$ e viceversa.
  - $$2$$ è l'opposto di se stesso.

> **Nota:** Quando abbiamo un gruppo additivo l'elemento inverso si chiama anche opposto.

---

Vediamo quindi la tabella di Cayley per $$(r_4, \otimes)$$.

| $$\otimes$$ | $$0$$ | $$1$$ | $$2$$ | $$3$$ |
| :---: | :---: | :---: | :---: | :---: |
| $$0$$ | [$$0$$]{.text-red} | [$$0$$]{.text-red} | [$$0$$]{.text-red} | [$$0$$]{.text-red} |
| $$1$$ | [$$0$$]{.text-red} | [$$1$$]{.text-red} | [$$2$$]{.text-red} | [$$3$$]{.text-red} |
| $$2$$ | [$$0$$]{.text-red} | [$$2$$]{.text-red} | [$$0$$]{.text-red} | [$$2$$]{.text-red} |
| $$3$$ | [$$0$$]{.text-red} | [$$3$$]{.text-red} | [$$2$$]{.text-red} | [$$1$$]{.text-red} |

Dalla tabella puoi vedere che:
- $$0$$ è l'elemento assorbente: moltiplicandolo per gli altri li rende $$0$$ (li assorbe).
- Qui non puoi avere la struttura di gruppo nemmeno togliendo lo zero, $$(r_4 - \{0\}, \otimes)$$, perché il valore $$2$$ è un divisore dello zero: $$2 \otimes 2 = 0$$.
- $$1$$ è l'elemento neutro (moltiplicandolo per gli altri non li cambia).
- Per trovare l'inverso basta guardare quando i risultati sono $$1$$: gli $$1$$ sono all'incrocio di elementi inversi, quindi:
  - $$0$$ non ha inverso.
  - $$2$$ non ha inverso.
  - $$1$$ è l'inverso di se stesso.
  - $$3$$ è l'inverso di se stesso.

> **Nota:** Da notare che troveremo un numero divisore dello zero quando il numero $$p$$ di $$r_p$$ non è primo, cioè troveremo divisori dello zero in $$r_4, r_6, r_8, r_9, \dots$$. Inoltre il numero per se stesso darà $$0$$ quando $$p$$ è un quadrato perfetto, cioè in $$r_4, r_9, r_{16}, \dots$$.