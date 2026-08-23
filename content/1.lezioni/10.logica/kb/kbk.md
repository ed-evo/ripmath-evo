# [Funzioni proposizionali equiveridiche]{.text-red}

Come in tutte le discipline la prima cosa che introduciamo è l'equivalente dell'uguaglianza.

Diremo che due funzioni proposizionali sono **equiveridiche** se le loro tavole di verità hanno gli stessi valori.

Vediamo un esempio: considero le due espressioni

$$
\textcolor{red}{\overline{p \wedge q}} \quad \textcolor{red}{\overline{p} \vee \overline{q}}
$$

costruisco le loro tavole di verità di $$r$$ partendo dalle proposizioni elementari $$p$$ e $$q$$:

1)

| $$p$$ | $$q$$ | $$p \wedge q$$ | $$\overline{p \wedge q}$$ |
| :---: | :---: | :---: | :---: |
| v | v | v | f |
| v | f | f | v |
| f | v | f | v |
| f | f | f | v |

- prima scrivo i valori possibili di $$p$$ e $$q$$; per fare in fretta:
  - in $$p$$: due veri e due falsi
  - in $$q$$: vero, falso, vero, falso alternati
- nella terza colonna la congiunzione logica di $$p$$ e $$q$$: vero solo se entrambe sono vere
- ed infine nell'ultima colonna la negazione della precedente: vero diventa falso e falso diventa vero

***

2)

| $$p$$ | $$q$$ | $$\overline{p}$$ | $$\overline{q}$$ | $$\overline{p} \vee \overline{q}$$ |
| :---: | :---: | :---: | :---: | :---: |
| v | v | f | f | f |
| v | f | f | v | v |
| f | v | v | f | v |
| f | f | v | v | v |

- prima scrivo i valori possibili di $$p$$ e $$q$$; per fare in fretta:
  - in $$p$$: due veri e due falsi
  - in $$q$$: vero, falso, vero, falso alternati
- nella terza colonna la negazione di $$p$$: vero diventa falso e falso diventa vero
- nella quarta colonna la negazione di $$q$$: vero diventa falso e falso diventa vero
- ed infine nell'ultima colonna la disgiunzione inclusiva delle due precedenti: vero se almeno una delle componenti è vera

***

Se controlli i risultati vedi che le due proposizioni considerate sono **equiveridiche** e scriveremo:

$$
\textcolor{red}{\overline{p \wedge q} \equiv \overline{p} \vee \overline{q}}
$$

> **Nota:** Naturalmente per controllare se proposizioni date sono equiveridiche devi sempre dare gli stessi valori di verità alle proposizioni componenti, cioè se lavori con $$2$$ proposizioni elementari $$p$$ e $$q$$ le prime due colonne delle differenti tabelle devono essere identiche.

La relazione scritta sopra è la **seconda legge di De Morgan** nel linguaggio della logica (ti ricordo che l'abbiamo già vista in teoria degli insiemi).

Similmente vale la **prima legge di De Morgan** che ti consiglio di dimostrare per esercizio:

$$
\textcolor{red}{\overline{p \vee q} \equiv \overline{p} \wedge \overline{q}}
$$

Se vuoi controllare se hai fatto giusto.