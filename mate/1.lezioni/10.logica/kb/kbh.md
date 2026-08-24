# Coimplicazione

> Anche la **coimplicazione** è solo da considerare come tabella cui corrispondono certi valori di verità e non come discorso logico;

La coimplicazione è un'operazione di composizione binaria che si applica su due proposizioni $$p$$, $$q$$ restituendo la proposizione $$r$$ nel seguente modo:

$$r = p \text{ coimplica } q$$

si usa anche il simbolo $$\leftrightarrow$$ e restituisce i seguenti valori di verità:

| $$p$$ | $$q$$ | $$p \leftrightarrow q$$ |
| :---: | :---: | :---: |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ |

> **Cioè:** la proposizione composta è falsa se solamente una delle proposizioni componenti è falsa.

Anche qui non esiste (per ora) nessun nesso di causa-effetto nelle parole **coimplica** ma semplicemente un collegamento dato dalle tavole di verità.

Vediamo come esempio la tavola di verità per due proposizioni:
$$p = \textcolor{red}{\text{"il cane morde"}}$$
$$q = \textcolor{red}{\text{"l'acqua è chiara"}}$$

- "il cane morde coimplica che l'acqua è chiara"
  $$v \leftrightarrow v = v$$
- "il cane morde coimplica che l'acqua non è chiara"
  $$v \leftrightarrow f = f$$
- "il cane non morde coimplica che l'acqua è chiara"
  $$f \leftrightarrow v = f$$
- "il cane non morde coimplica che l'acqua non è chiara"
  $$f \leftrightarrow f = v$$

Come vedi anche qui è un po' difficile trovarvi un po' di senso comune.

> Però siccome anche qui un nesso logico di causa-effetto serve, introduciamo nella prossima pagina il concetto di **doppia deduzione logica**.

Per finire mostriamo che possiamo ottenere la coimplicazione utilizzando gli operatori logici fondamentali:

$$p \leftrightarrow q \equiv (p \text{ and } q) \text{ vel } ((\text{non } p) \text{ and } (\text{non } q))$$

o meglio in formule:

$$
p \leftrightarrow q \equiv (p \wedge q) \vee (\bar{p} \wedge \bar{q})
$$

Per dimostrarlo basta calcolare le tavole di verità per l'espressione prima dell'uguale e per l'espressione dopo l'uguale: se le due tavole sono uguali allora le espressioni sono equivalenti.
Prova a farlo per esercizio poi controlla la [soluzione](kbha.html).