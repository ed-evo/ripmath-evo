# [Segno di espressioni quoziente di due espressioni elementari]{.text-red-darken-1}

Vediamo di ragionare su un esempio pratico. Consideriamo un'espressione del tipo:

$$
\textcolor{red}{\frac{x - 2}{x - 4} < 0}
$$

Voglio trovare l'insieme dei valori che posso assegnare alla $$x$$ perché l'espressione sia minore di zero.

Essendo questa espressione quoziente di due termini sarà minore di zero quando i due termini che la compongono hanno segno diverso, cioè uno maggiore di zero e l'altra minore oppure viceversa.

> per il segno di un quoziente valgono le stesse regole che per il prodotto:
> più diviso più uguale più
> più diviso meno uguale meno
> meno diviso più uguale meno
> meno diviso meno uguale più

Quindi dovrei risolvere i due sistemi:

$$
\textcolor{red}{\begin{cases} x - 2 > 0 \\ x - 4 < 0 \end{cases}} \quad \textcolor{red}{\begin{cases} x - 2 < 0 \\ x - 4 > 0 \end{cases}}
$$

Capisci che questo sarebbe un metodo molto pesante, soprattutto se invece del prodotto di due termini l'espressione fosse il prodotto di $$3, 4, 5 \dots$$ termini.

Allora mettiamo in un grafico il segno di ognuno dei termini e poi scegliamo gli intervalli dove i segni sono concordi (entrambi positivi od entrambi negativi).

> Poniamo sempre tutti i fattori componenti maggiori di zero per trovare i segni, indicando poi su un grafico dove sono positivi e dove negativi; poi se dovremo risolvere una disequazione positiva prenderemo gli intervalli dove il quoziente è positivo; se dobbiamo cercare dove la disequazione è negativa prenderemo gli intervalli dove il prodotto dei fattori diventa negativo.

Risolvo la prima disequazione:
$$\textcolor{red}{x - 2 > 0}$$ $$\implies$$ $$\textcolor{red}{x > 2}$$ (il primo fattore è positivo per $$x$$ maggiore di due).

Risolvo la seconda:
$$\textcolor{red}{x - 4 > 0}$$ $$\implies$$ $$\textcolor{red}{x > 4}$$ (il secondo fattore è positivo per $$x$$ maggiore di quattro).

Faccio lo schema (Hai bisogno di aiuto per fare lo schema?):

$$\textcolor{red}{x > 2 \implies \text{---- (2) +++++++++++++++}}$$
$$\textcolor{red}{x > 4 \implies \text{------------ (4) +++++++++}}$$
$$\textcolor{blue}{\text{Espressione} \implies \text{++++ (2) ----- (4) +++++++++}}$$

L'espressione è negativa dove i due fattori sono uno positivo ed uno negativo, quindi avremo:

$$
\textcolor{blue}{2 < x < 4}
$$

oppure in altra notazione:

(Immagine di rappresentazione grafica della disequazione $$2 < x < 4$$)

***

Ricapitolando:

Se devi risolvere una disequazione fratta:
- Poni il numeratore ed il denominatore maggiori di zero.
- Costruisci un grafico dove metti tutti i valori positivi e negativi trovati.
- In fondo al grafico fai il calcolo dei segni del quoziente fra i singoli fattori.
- Se la disequazione è maggiore di zero consideri come soluzione i valori in cui il quoziente dei fattori è positivo.
- Se la disequazione è minore di zero consideri come soluzione i valori in cui il quoziente dei fattori è negativo.

***

Vediamo alcuni esercizi:

- $$
\textcolor{blue}{\frac{x - 3}{x + 1} > 0}
$$ [Soluzione]{.text-small}

- $$
\textcolor{blue}{\frac{x - 4}{x + 2} \le 0}
$$ [Soluzione]{.text-small}

- $$
\textcolor{blue}{\frac{x^2 - 3x - 10}{x - 1} \ge 0}
$$ [Soluzione]{.text-small}

- $$
\textcolor{blue}{\frac{x^2 - 5x + 6}{x^2 - 4x - 5} \ge 0}
$$ [Soluzione]{.text-small}