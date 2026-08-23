Dimostriamo che:

$$
p \text{ aut } q \equiv \overline{[(p \land q) \lor (\overline{p} \land \overline{q})]}
$$

Calcoliamo le tavole di verità del termine prima dell'uguale e del termine dopo l'uguale.

La tavola di verità del termine prima dell'uguale è la disgiunzione esclusiva, quindi:

| $$p$$ | $$q$$ | $$p \text{ aut } q$$ |
| :---: | :---: | :---: |
| [v]{.text-red} | [v]{.text-red} | [f]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [v]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [v]{.text-red} |
| [f]{.text-red} | [f]{.text-red} | [f]{.text-red} |

La tavola di verità del termine dopo l'uguale è:

| $$p$$ | $$q$$ | $$\overline{p}$$ | $$\overline{q}$$ | $$p \land q$$ | $$\overline{p} \land \overline{q}$$ | $$(p \land q) \lor (\overline{p} \land \overline{q})$$ | $$\overline{[(p \land q) \lor (\overline{p} \land \overline{q})]}$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [v]{.text-red} | [f]{.text-red} | [v]{.text-red} | [f]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [v]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [v]{.text-red} |
| [f]{.text-red} | [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [f]{.text-red} |

> **Nota:** Per eseguire la tabella segui le tabelle delle operazioni elementari già fatte:
> - la terza colonna è la negazione di $$p$$
> - la quarta colonna è la negazione di $$q$$
> - la quinta colonna è la congiunzione logica tra $$p$$ e $$q$$, che è vera solo se entrambe sono vere
> - la sesta colonna è la congiunzione logica tra $$\text{non } p$$ e $$\text{non } q$$, che è vera solo se entrambe sono vere
> - la settima colonna è la disgiunzione inclusiva tra $$p \land q$$ e $$(\overline{p} \land \overline{q})$$, che è falsa solo se entrambe sono false
> - l'ultima colonna è la negazione della colonna precedente: il vero diventa falso ed il falso diventa vero

Siccome le due colonne finali hanno gli stessi valori di verità ne segue che il termine prima ed il termine dopo l'uguale sono equivalenti (o meglio, come vedremo più avanti, le due proposizioni sono **equiveridiche**).