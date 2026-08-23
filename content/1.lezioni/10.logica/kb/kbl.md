# Tautologia e contraddizione

Date due proposizioni semplici $$p$$ e $$q$$ chiameremo **tautologia** la proposizione composta che è sempre vera.

| $$p$$ | $$q$$ | tautologia |
| :---: | :---: | :---: |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ |

Potremo sempre avere una tautologia se consideriamo:
**"O è vera $$p$$ oppure è vera non $$p$$"**
cioè
$$p \text{ aut } \overline{p}$$

Questo esprime il **principio del terzo escluso**: o una proposizione è vera oppure è falsa, non c'è una terza alternativa: "Tertium non datur".

| $$p$$ | $$\overline{p}$$ | $$p \text{ aut } \overline{p}$$ |
| :---: | :---: | :---: |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |

La seconda colonna è la negazione di $$p$$: il vero diventa falso ed il falso diventa vero.
La terza colonna è la disgiunzione esclusiva tra $$p$$ e **non $$p$$**, che è vera solo se una sola delle due componenti è vera.

***

Date due proposizioni semplici $$p$$ e $$q$$ chiameremo **contraddizione** la proposizione composta che è sempre falsa.

| $$p$$ | $$q$$ | contraddizione |
| :---: | :---: | :---: |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ |

Potremo sempre avere una contraddizione se consideriamo:
**"$$p$$ è vera e contemporaneamente è vera non $$p$$"**
cioè
$$p \land \overline{p}$$

Per dimostrarla facciamo vedere che la sua negazione è una tautologia (sempre vera):
**è sempre vero che una proposizione non è contemporaneamente vera e falsa**

Questo esprime il **principio di non contraddizione**: una proposizione non può essere contemporaneamente vera e falsa.

> **Nota:** In generale ogni volta che vorremo dimostrare qualcosa mostreremo che è una tautologia.

| $$p$$ | $$\overline{p}$$ | $$p \land \overline{p}$$ | $$\overline{p \land \overline{p}}$$ |
| :---: | :---: | :---: | :---: |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ |

La seconda colonna è la negazione di $$p$$: il vero diventa falso ed il falso diventa vero.
La terza colonna è la congiunzione logica tra $$p$$ e **non $$p$$**, che è vera solo se entrambe le componenti sono vere.
La quarta colonna è la negazione della precedente: il vero diventa falso ed il falso diventa vero.

Mentre la precedente pone l'accento sulla mancanza di una terza alternativa, questa si limita a mostrare che una proposizione non può essere contemporaneamente vera e falsa.