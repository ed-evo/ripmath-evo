# Funzioni proposizionali

Se considero espressioni del tipo
$$
\textcolor{red}{r \equiv \text{non}(p \text{ et } q)}
$$
oppure
$$
\textcolor{red}{s \equiv (\overline{p} \wedge q) \vee r}
$$
sono espressioni che assumono valori di verità dipendenti dai valori di verità delle espressioni componenti.

Siccome il valore di verità di tutta l'espressione varia secondo i valori di verità delle espressioni componenti, tutta l'espressione viene chiamata **funzione proposizionale**.

***

Come esempio troviamo i valori di verità delle funzioni proposizionali considerate sopra.

1) $$
\textcolor{red}{r \equiv \text{non}(p \text{ et } q)}
$$
Costruisco la tavola di verità di $$r$$ partendo dalle proposizioni elementari.

| $$p$$ | $$q$$ | $$p \text{ et } q$$ | $$r = \text{non}(p \text{ et } q)$$ |
| :---: | :---: | :---: | :---: |
| v | v | v | f |
| v | f | f | v |
| f | v | f | v |
| f | f | f | v |

- Prima scrivo i valori possibili di $$p$$ e $$q$$; per fare in fretta: in $$p$$: due veri e due falsi; in $$q$$: vero, falso, vero, falso alternati.
- Nella terza colonna la congiunzione logica di $$p$$ e $$q$$: vero solo se entrambe sono vere.
- Ed infine nell'ultima colonna la negazione della precedente: vero diventa falso e falso diventa vero.

***

2) $$
\textcolor{red}{s \equiv (\overline{p} \wedge q) \vee r}
$$
Costruisco la tavola di verità di $$s$$ partendo dalle proposizioni elementari $$p$$, $$q$$ ed $$r$$.

| $$p$$ | $$q$$ | $$r$$ | $$\overline{p}$$ | $$(\overline{p} \wedge q)$$ | $$s = (\overline{p} \wedge q) \vee r$$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| v | v | v | f | f | v |
| v | v | f | f | f | f |
| v | f | v | f | f | v |
| v | f | f | f | f | f |
| f | v | v | v | v | v |
| f | v | f | v | v | v |
| f | f | v | v | f | v |
| f | f | f | v | f | f |

- Prima scrivo i valori possibili di $$p$$, $$q$$ ed $$r$$; per fare in fretta: in $$p$$: quattro veri e quattro falsi; in $$q$$: due veri, due falsi, due veri e due falsi; in $$r$$: vero, falso, vero, falso... alternati.
- Nella quarta colonna la negazione di $$p$$: vero diventa falso e falso diventa vero.
- Nella quinta la congiunzione logica fra $$\overline{p}$$ e $$q$$: il risultato è vero solamente se le componenti sono entrambe vere.
- Ed infine nell'ultima colonna la disgiunzione inclusiva fra i valori trovati ed $$r$$: basta che una componente sia vera perché tutta l'espressione sia vera.

***

> Sopra ho usato nella prima la notazione discorsiva e nella seconda la notazione mediante simboli: abituati ad usarle entrambe: la prima ti serve per leggere le espressioni e la seconda, preferibilmente, per scriverle; ad esempio la seconda si legge **non $$p$$ et $$q$$, vel $$r$$**.