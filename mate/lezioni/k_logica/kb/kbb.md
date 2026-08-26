# Congiunzione logica

La congiunzione logica (**e**) è un'operazione **binaria** perché si applica su due proposizioni ed è definita come l'operazione che applicata a $p$ e $q$ restituisce i seguenti valori di verità.
Oltre al termine **et** è utilizzato il simbolo $\land$ (et).

| $p$ | $q$ | $p \land q$ |
| :---: | :---: | :---: |
| [$v$]{.text-red-darken-1} | [$v$]{.text-red-darken-1} | [$v$]{.text-red-darken-1} |
| [$v$]{.text-red-darken-1} | [$f$]{.text-red-darken-1} | [$f$]{.text-red-darken-1} |
| [$f$]{.text-red-darken-1} | [$v$]{.text-red-darken-1} | [$f$]{.text-red-darken-1} |
| [$f$]{.text-red-darken-1} | [$f$]{.text-red-darken-1} | [$f$]{.text-red-darken-1} |

Cioè la proposizione composta è vera solo se sono entrambe vere le proposizioni componenti.
Cioè è vera la prima **e** è vera la seconda.

***

Anche se i concetti della logica non sempre trovano riscontro nel discorso normale, ove posso faccio un esempio per meglio fissare il concetto:

[**"Se sarai promosso ed avrai la media del $7$ ti comprerò il motorino"**]{.text-red}

è un esempio abbastanza calzante: infatti
- si può essere promossi e non avere la media del $7$
- si può avere la media del $7$ e non essere promossi (ad esempio avere $4$ in una materia e $10$ in una seconda e $7$ in tutte le altre)

perché la condizione si verifichi (sia vera) devi contemporaneamente essere promosso e avere la media del $7$

- Se sei promosso ed hai la media del $7$ ottieni il motorino
> È la prima riga della tabella $v \land v = v$
- Se sei promosso ma non hai la media del $7$ non ottieni il motorino
> È la seconda riga della tabella $v \land f = f$
- Se non sei promosso ed hai la media del $7$ non ottieni il motorino
> È la terza riga della tabella $f \land v = f$
- Se non sei promosso e non hai la media del $7$ non ottieni il motorino
> È la quarta riga della tabella $f \land f = f$

***

In matematica, vista l'importanza del concetto abbiamo la quasi equivalenza, all'interno delle proprie teorie, dei simboli:

- [$\cdot$]{.text-red} (prodotto) in aritmetica
- [$,$]{.text-red} (virgola) nel discorso
- $\cap$ (intersezione) in teoria degli insiemi
- $\land$ (et) in logica (ma anche and logico)
- $\text{AND}$ (and logico) in informatica