Dimostriamo che:

$$
p \leftrightarrow q \equiv (p \land q) \lor (\neg p \land \neg q)
$$

Calcoliamo le tavole di verità del termine prima dell'uguale e del termine dopo l'uguale.

La tavola di verità del termine prima dell'uguale è la coimplicazione quindi:

| $$p$$ | $$q$$ | $$p \leftrightarrow q$$ |
| :---: | :---: | :---: |
| [v]{.text-red} | [v]{.text-red} | [v]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [f]{.text-red} | [v]{.text-red} |

Le tavole di verità del termine dopo l'uguale sono:

| $$p$$ | $$q$$ | $$\neg p$$ | $$\neg q$$ | $$p \land q$$ | $$\neg p \land \neg q$$ | $$(p \land q) \lor (\neg p \land \neg q)$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [v]{.text-red} | [f]{.text-red} | [v]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [f]{.text-red} | [v]{.text-red} | [v]{.text-red} | [f]{.text-red} | [v]{.text-red} | [v]{.text-red} |

> Per eseguire la tabella segui le tabelle delle operazioni elementari già fatte:
> - la terza colonna è la negazione di $$p$$
> - la quarta colonna è la negazione di $$q$$
> - la quinta colonna è la congiunzione logica tra $$p$$ e $$q$$, che è vera solo se entrambe sono vere
> - la sesta colonna è la congiunzione logica tra $$\neg p$$ e $$\neg q$$, che è vera solo se entrambe sono vere
> - l'ultima colonna è la disgiunzione inclusiva tra $$p \land q$$ e $$(\neg p \land \neg q)$$, che è falsa solo se entrambe sono false

Siccome le due colonne finali hanno gli stessi valori di verità ne segue che il termine prima ed il termine dopo l'uguale sono equivalenti (o meglio, come vedremo più avanti, le due proposizioni sono **equiveridiche**).

Da notare che abbiamo come risultato i valori opposti della disgiunzione esclusiva.