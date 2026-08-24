# Implicazione materiale

> Con l'implicazione materiale arriviamo a dei concetti non più corrispondenti al discorso ordinario.
> Infatti l'implicazione materiale è solo da considerare (per ora) come tabella cui corrispondono certi valori di verità e non come discorso di causa-effetto;
> per questo è detta "materiale" cioè legata alla materiale considerazione dei valori di verità:
> Possiamo cioè considerare anche proposizioni prive di senso tipo:
> "Ho più di due braccia"
> "Le rose sono blu"

L'implicazione materiale (**se..., allora**) è un'operazione di composizione binaria che si applica su due proposizioni $p, q$ restituendo la proposizione $r$ nel seguente modo:

$$
r = \text{se } p \text{ allora } q
$$

Si usa anche il simbolo $\rightarrow$ e restituisce i seguenti valori di verità:

| $p$ | $q$ | $p \rightarrow q$ |
| :---: | :---: | :---: |
| $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ |

Cioè la proposizione composta è falsa solo se la prima è vera e la seconda è falsa.

> Quindi non sottolineiamo nessun nesso di causa-effetto nelle parole **se ... allora** ma semplicemente un collegamento dato dalle tavole di verità.

Ritornando all'esempio preso sopra per esercizio vediamo la tavola di verità per due proposizioni:
- $p$ = ["Non ho più di due braccia"]{.text-red}
- $q$ = ["Le rose non sono blu"]{.text-red}

- "Se non ho più di due braccia allora le rose non sono blu"
  È la prima riga della tabella $v \rightarrow v = v$
- "Se non ho più di due braccia allora le rose sono blu"
  È la seconda riga della tabella $v \rightarrow f = f$
- "Se ho più di due braccia allora le rose non sono blu"
  È la terza riga della tabella $f \rightarrow v = v$
- "Se ho più di due braccia allora le rose sono blu"
  È la quarta riga della tabella $f \rightarrow f = v$

Come vedi è un po' difficile trovarvi un po' di senso comune.

Però siccome un nesso logico di causa-effetto serve introduciamo nella prossima pagina il concetto di **deduzione logica** che però non potrà essere collegato alle tavole di verità.

Per finire mostriamo che possiamo ottenere l'implicazione materiale utilizzando gli operatori logici fondamentali:

$$
p \rightarrow q \equiv (\neg p) \lor q
$$

O meglio in formule:

$$
p \rightarrow q \equiv \bar{p} \lor q
$$

Per dimostrarlo basta calcolare le tavole di verità per l'espressione prima dell'uguale e per l'espressione dopo l'uguale: se le due tavole sono uguali allora le espressioni sono equivalenti.
Prova a farlo per esercizio poi controlla la [soluzione](kbfa.html).