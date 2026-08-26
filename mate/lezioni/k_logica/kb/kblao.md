Questa è la negazione della disgiunzione inclusiva detta congiunzione inversa:

$$
\text{no } (p \text{ od anche } q); \quad \overline{p \lor q}
$$

equivale a

$$
\bar{p} \land \bar{q}
$$

Basta che una delle due proposizioni sia vera (anche entrambe) perché il risultato sia falso; o meglio, è vera solamente se entrambe le proposizioni componenti sono false.

| $p$ | $q$ | $p \lor q$ | $\overline{p \lor q}$ |
| :---: | :---: | :---: | :---: |
| $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ |

Mostriamo, con le tavole di verità, l'equivalenza delle due proposizioni:

> **Nota:** diciamo equivalenza invece di usare l'orrendo termine equiveridicità.

$$
\overline{p \lor q} \quad \text{e} \quad \bar{p} \land \bar{q}
$$

| $p$ | $q$ | $p \lor q$ | $\overline{p \lor q}$ | $\bar{p}$ | $\bar{q}$ | $\bar{p} \land \bar{q}$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ |

[se vuoi la pagina sulla disgiunzione inclusiva](kbc.html)