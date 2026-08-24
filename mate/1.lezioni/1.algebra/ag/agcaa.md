## Segno di espressioni prodotto di due o più espressioni elementari

Vediamo di ragionare su un esempio pratico.
Consideriamo un'espressione del tipo:

$$
\textcolor{red}{x^2 - 6x + 8 > 0}
$$

Voglio trovare l'insieme dei valori che posso assegnare a $$x$$ perché l'espressione sia maggiore di zero.
Considero l'equazione associata:

$$
\textcolor{red}{x^2 - 6x + 8 = 0}
$$

Risolvo:

$$
\textcolor{red}{x_{1,2} = \frac{6 \pm \sqrt{6^2 - 4 \cdot 1 \cdot 8}}{2}}
$$

$$
\textcolor{red}{x_1 = 2}
$$
$$
\textcolor{red}{x_2 = 4}
$$

Allora posso sostituire la disequazione di partenza con l'espressione equivalente:

$$
\textcolor{red}{(x-2)(x-4) > 0}
$$

Essendo questa espressione prodotto di due termini, sarà maggiore di zero quando i due termini che la compongono hanno lo stesso segno, cioè entrambi maggiori di zero oppure entrambi minori di zero. Quindi dovrei risolvere i due sistemi:

$$
\textcolor{red}{\begin{cases} x - 2 > 0 \\ x - 4 > 0 \end{cases}} \quad \text{oppure} \quad \textcolor{red}{\begin{cases} x - 2 < 0 \\ x - 4 < 0 \end{cases}}
$$

Capisci che questo sarebbe un metodo molto pesante, soprattutto se invece del prodotto di due termini l'espressione fosse il prodotto di $$3, 4, 5...$$ termini.
Allora mettiamo in un grafico il segno di ognuno dei termini e poi scegliamo gli intervalli dove i segni sono concordi (entrambi positivi o entrambi negativi).

> Poniamo sempre tutti i fattori componenti maggiori di zero per trovare i segni, indicando poi su un grafico dove sono positivi e dove negativi; poi se dovremo risolvere una disequazione positiva prenderemo gli intervalli dove il prodotto è positivo; se dobbiamo cercare dove la disequazione è negativa prenderemo gli intervalli dove il prodotto dei fattori diventa negativo.

Risolvo la prima disequazione:
$$\textcolor{red}{x - 2 > 0} \implies \textcolor{red}{x > 2}$$ (il primo fattore è positivo per $$x$$ maggiore di due)

Risolvo la seconda:
$$\textcolor{red}{x - 4 > 0} \implies \textcolor{red}{x > 4}$$ (il secondo fattore è positivo per $$x$$ maggiore di quattro)

Faccio lo schema:

$$\textcolor{red}{x > 2} \quad \text{--- (2) + + + + + + + + + + + + + + +}$$
$$\textcolor{red}{x > 4} \quad \text{--- --- --- --- --- --- (4) + + + + + + + + +}$$
$$\textcolor{blue}{\text{Espressione}} \quad \text{+ + + + (2) --- --- --- --- (4) + + + + + + + + +}$$

L'espressione è positiva dove i due fattori sono entrambi positivi ed anche dove sono entrambi negativi, quindi avremo:

$$
\textcolor{blue}{x < 2 \lor x > 4}
$$

Oppure in altra notazione:
(In tal caso si intende positivo dove si indica con la linea intera e negativo ove la linea manca, oppure qualche professore preferisce farla tratteggiata).
Invece di SOL (soluzione) di solito si preferisce mettere $$f(x)$$.

***

**Ricapitolando: Se devi risolvere una disequazione di grado superiore**

- Devi considerare l'equazione associata e risolverla per trovare le soluzioni
- Devi poi scomporre la disequazione in prodotto di fattori di primo grado
- Poni tutti i fattori di primo grado maggiori di zero
- Costruisci un grafico dove metti tutti i valori positivi e negativi trovati
- In fondo al grafico fai il calcolo dei segni del prodotto fra i singoli fattori
- Se la disequazione è maggiore di zero consideri come soluzione i valori in cui il prodotto dei fattori è positivo
- Se la disequazione è minore di zero consideri come soluzione i valori in cui il prodotto dei fattori è negativo

> Più avanti, quando avremo visto le regole per risolvere le disequazioni di secondo grado, scomporremo le disequazioni di grado superiore come prodotto di fattori composti da equazioni (polinomi) sia di primo che di secondo grado.

### Approfondimento per disequazioni con $$\ge$$ o con $$\le$$ e con un termine di grado superiore ad $$1$$

Se abbiamo disequazioni dove dobbiamo studiare anche il caso di uguaglianza a zero, è necessario distinguere fra l'equazione e la disequazione e risolvere sia l'equazione che la disequazione e quindi considerare entrambi i risultati.

Normalmente, se abbiamo tutti fattori di primo grado, si procede senza farci troppo caso (in questo modo risolvo gli esercizi $$2, 3$$ e $$4$$).
Invece, nell'esercizio $$5$$, la presenza del fattore $$x^2$$ può generare errore ed è effettivamente necessario dividere l'equazione e la disequazione.

***

Vediamo alcuni esercizi:

1. $$\textcolor{blue}{x^2 - x - 6 < 0}$$
2. $$\textcolor{blue}{x^2 + 2x - 3 \le 0}$$
3. $$\textcolor{blue}{x^2 - 3x - 10 \ge 0}$$
4. $$\textcolor{blue}{x^4 - 5x^2 + 4 \ge 0}$$
5. $$\textcolor{blue}{x^2(x-1) \ge 0}$$