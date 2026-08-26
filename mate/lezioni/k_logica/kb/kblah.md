Questa è la disgiunzione esclusiva detta anche contro-omologia ($p \text{ aut } q$);
equivale a

$$
(p \wedge \bar{q}) \vee (\bar{p} \wedge q)
$$

cioè la proposizione composta è vera solamente se sono vere la prima oppure la seconda, ma non contemporaneamente.

| $p$ | $q$ | $p \text{ aut } q$ |
| :---: | :---: | :---: |
| $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ |

Mostriamo, con le tavole di verità l'equivalenza delle due proposizioni

> **Nota:** diciamo equivalenza invece di usare l'orrendo termine equiveridicità

$p \text{ aut } q$ e $(p \wedge \bar{q}) \vee (\bar{p} \wedge q)$

| $p$ | $q$ | $p \text{ aut } q$ | $\bar{p}$ | $\bar{q}$ | $p \wedge \bar{q}$ | $\bar{p} \wedge q$ | $(p \wedge \bar{q}) \vee (\bar{p} \wedge q)$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ |

Da notare che la sua negazione è la coimplicazione

[se vuoi la pagina sulla disgiunzione esclusiva](kbe.html)