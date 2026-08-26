# esercizio

Dimostriamo che vale l'implicazione materiale si può definire mediante gli operatori fondamentali

$$
p \rightarrow q \equiv \neg p \lor q
$$

Calcoliamo le tavole di verità del termine prima dell'uguale e del termine dopo l'uguale

La tavola di verità del termine prima dell'uguale è quella dell'implicazione materiale:

| $p$ | $q$ | $p \rightarrow q$ |
| :---: | :---: | :---: |
| [v]{.text-red} | [v]{.text-red} | [v]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [v]{.text-red} |
| [f]{.text-red} | [f]{.text-red} | [v]{.text-red} |

Tavole di verità del termine dopo l'uguale

| $p$ | $q$ | $\neg p$ | $\neg p \lor q$ |
| :---: | :---: | :---: | :---: |
| [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [v]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [v]{.text-red} |
| [f]{.text-red} | [f]{.text-red} | [v]{.text-red} | [v]{.text-red} |

> Siccome le due colonne finali hanno gli stessi valori di verità ne segue che il termine prima ed il termine dopo l'uguale sono equivalenti (o meglio, come vedremo più avanti, le due proposizioni sono **equiveridiche**)