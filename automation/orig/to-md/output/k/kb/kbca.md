# [esercizio]{.text-red}

Dimostriamo che vale la proprietà distributiva della congiunzione logica rispetto alla disgiunzione inclusiva

$$
(p \lor q) \land r \equiv (p \land r) \lor (q \land r)
$$

Calcoliamo le tavole di verità del termine prima dell'uguale e del termine dopo l'uguale

### Tavole di verità del termine prima dell'uguale:

| $p$ | $q$ | $r$ | $p \lor q$ | $(p \lor q) \land r$ |
| :---: | :---: | :---: | :---: | :---: |
| [v]{.text-red} | [v]{.text-red} | [v]{.text-red} | [v]{.text-red} | [v]{.text-red} |
| [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [v]{.text-red} | [f]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [v]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [v]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [v]{.text-red} | [v]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [f]{.text-red} | [v]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [f]{.text-red} | [v]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} |

> prima scrivo i valori possibili di $p$, $q$ ed $r$; per fare in fretta:
> in $p$: quattro veri e quattro falsi
> in $q$: due veri, due falsi, due veri e due falsi
> in $r$: vero, falso, vero, falso,.... alternati
> 
> nella quarta colonna è la disgiunzione inclusiva tra $p$ e $q$, che è falsa solo se le componenti sono entrambe false
> la quinta colonna è la congiunzione logica tra $p \lor q$ e $r$, che è vera solo sono contemporaneamente vere la prima e la seconda

### Tavole di verità del termine dopo l'uguale

| $p$ | $q$ | $r$ | $p \land r$ | $q \land r$ | $(p \land r) \lor (q \land r)$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| [v]{.text-red} | [v]{.text-red} | [v]{.text-red} | [v]{.text-red} | [v]{.text-red} | [v]{.text-red} |
| [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [v]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [v]{.text-red} | [v]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [f]{.text-red} | [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} |

> prima scrivo i valori possibili di $p$, $q$ ed $r$ con la stessa disposizione della tabella precedente; per fare in fretta:
> in $p$: quattro veri e quattro falsi
> in $q$: due veri, due falsi, due veri e due falsi
> in $r$: vero, falso, vero, falso,.... alternati
> 
> nella quarta colonna è la congiunzione logica tra $p$ e $r$, che è vera solo sono contemporaneamente vere la prima e la seconda
> 
> nella quinta colonna è la congiunzione logica tra $q$ e $r$, che è vera solo sono contemporaneamente vere la prima e la seconda
> 
> la sesta colonna è la disgiunzione inclusiva tra $p \land r$ e $q \land r$, che è falsa solo se le componenti sono entrambe false

Siccome le due colonne finali hanno gli stessi valori di verità ne segue che il termine prima ed il termine dopo l'uguale sono equivalenti (o meglio, come vedremo più avanti, le due proposizioni sono **equiveridiche**)