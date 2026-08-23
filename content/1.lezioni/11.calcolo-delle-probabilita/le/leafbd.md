# Esempi di applicazione

Vediamo un paio di esempi

---

## Trovare le probabilità di uscita per la prima volta del numero $$3$$ nel lancio di un dado al primo, al secondo, all'$$n$$-esimo lancio e rappresentarla mediante la distribuzione geometrica

**p** probabilità di uscita del numero $$3 = 1/6$$
**q** probabilità di non uscita del numero $$3 = 5/6$$
la variabile aleatoria **Z** sarà

| [Z]{.text-red} | [1]{.text-red} | [2]{.text-red} | [3]{.text-red} | [4]{.text-red} | [.........]{.text-red} | [n]{.text-red} |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| [Pr]{.text-red} | $$1/6$$ | $$5/6 \cdot 1/6$$ | $$(5/6)^2 \cdot 1/6$$ | $$(5/6)^3 \cdot 1/6$$ | $$.........$$ | $$(5/6)^{n-1} \cdot 1/6$$ |

Cioè

| [Z]{.text-red} | [1]{.text-red} | [2]{.text-red} | [3]{.text-red} | [4]{.text-red} | [.........]{.text-red} |
| :--- | :---: | :---: | :---: | :---: | :---: |
| [Pr]{.text-red} | $$1/6$$ | $$5/36$$ | $$25/216$$ | $$125/1296$$ | $$.........$$ |

---

ed avremo come rappresentazione grafica della distribuzione geometrica

i vari valori di probabilità all'aumentare delle prove diminuiranno sempre fino a ridursi a valori vicinissimi a zero

---

> **Nota:** Notiamo anche qui che, siccome l'area di tutti i rettangoli vale $$1$$ (evento certo) e l'area del primo rettangolo vale $$1/6$$ e gli altri valgono meno, l'evento è sempre più probabile che succeda alla prima prova (è più probabile che esca $$3$$ per la prima volta alla prima prova piuttosto che esca $$3$$ per la prima volta al millesimo lancio)

---

## Trovare le probabilità della prima uscita del numero $$1$$ sulla ruota di Bari alla prima, alla seconda, alla $$n$$-esima estrazione e rappresentarla mediante la distribuzione geometrica

Sulla ruota di Bari vengono estratti $$5$$ numeri su $$90$$ possibili ([semplifichiamo un poco i calcoli](leafbda.html)) quindi

**p** probabilità di uscita del numero $$1 = 5/90 = 1/18$$
**q** probabilità di non uscita del numero $$85/90 = 17/18$$
la variabile aleatoria **Z** sarà

| [Z]{.text-red} | [1]{.text-red} | [2]{.text-red} | [3]{.text-red} | [.........]{.text-red} | [n]{.text-red} |
| :--- | :---: | :---: | :---: | :---: | :---: |
| [Pr]{.text-red} | $$1/18$$ | $$17/18 \cdot 1/18$$ | $$(17/18)^2 \cdot 1/18$$ | $$.........$$ | $$(17/18)^{n-1} \cdot 1/18$$ |

Cioè

| [Z]{.text-red} | [1]{.text-red} | [2]{.text-red} | [3]{.text-red} | [4]{.text-red} | [.........]{.text-red} |
| :--- | :---: | :---: | :---: | :---: | :---: |
| [Pr]{.text-red} | $$1/18$$ | $$17/324$$ | $$289/5832$$ | $$4913/104976$$ | $$.........$$ |

---

ed avremo come rappresentazione grafica della distribuzione geometrica

> **Nota:** Nota che, in questo caso, all'aumentare del valore della probabilità contraria l'area dei rettangoli tende a zero meno velocemente (gli scalini degradano più dolcemente)