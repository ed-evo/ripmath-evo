# Distribuzione di Poisson

Se vuoi vedere la [dimostrazione per calcolare](leafcba.html) la variabile aleatoria.

La distribuzione di Poisson è una distribuzione che assume i valori $0, 1, 2, 3, 4, \dots, x$ con probabilità

$$
\textcolor{red}{P_x = \frac{\mu^x}{x!} e^{-\mu}}
$$

essendo $\mu = p \cdot n$ con $p$ probabilità dell'evento ed $n$ numero dei casi possibili per l'evento.

Scriviamola come variabile aleatoria:

| Evento | $x = 0$ | $x = 1$ | $x = 2$ | $x = 3$ | $\dots$ | $x = x$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Probabilità | $\frac{\mu^0}{0!} e^{-\mu}$ | $\frac{\mu^1}{1!} e^{-\mu}$ | $\frac{\mu^2}{2!} e^{-\mu}$ | $\frac{\mu^3}{3!} e^{-\mu}$ | $\dots$ | $\frac{\mu^x}{x!} e^{-\mu}$ |

L'evento può accadere $0$ volte, $1$ volta, $2$ volte, eccetera.

---

Come esercizio riprendiamo l'esempio della pagina precedente (anche se un po' macabro) e prendiamo le tabelle di soldati morti in $10$ reggimenti prussiani in $20$ anni, cioè ci comportiamo come se fossero $200$ reggimenti controllati per un anno: abbiamo le frequenze:

| Morti per un calcio di mulo | nessuno | un morto | due morti | tre morti | quattro morti | cinque morti |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Numero reggimenti | $109$ | $65$ | $22$ | $3$ | $1$ | $0$ |

Cioè, per il calcio di un mulo, in un anno $109$ reggimenti non hanno avuto nessun morto, $65$ reggimenti hanno avuto un morto, $22$ reggimenti hanno avuto due morti ciascuno, $3$ reggimenti hanno avuto $3$ morti ed uno ha avuto $4$ morti; in totale i morti sono stati $122$.

Siccome i morti sono stati $122$, la frequenza di morte sarà data dal rapporto fra il numero di morti ed il numero dei reggimenti, cioè $122/200 = 0,61$.

Consideriamo allora tale frequenza come probabilità $p = 0,61$ ed avendo considerato una sola possibilità (morte):
$np = 1 \cdot 0,61 = 0,61$

Quindi abbiamo la distribuzione di Poisson sulla probabilità che ogni reggimento abbia $0, 1, 2, 3, 4, 5$ morti in un anno:

| Numero morti | $x = 0$ | $x = 1$ | $x = 2$ | $x = 3$ | $x = 4$ | $x = 5$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Probabilità per ogni reggimento | $\frac{0,61^0 \cdot e^{-0,61}}{0!}$ | $\frac{0,61^1 \cdot e^{-0,61}}{1!}$ | $\frac{0,61^2 \cdot e^{-0,61}}{2!}$ | $\frac{0,61^3 \cdot e^{-0,61}}{3!}$ | $\frac{0,61^4 \cdot e^{-0,61}}{4!}$ | $\frac{0,61^5 \cdot e^{-0,61}}{5!}$ |

E, con una buona calcolatrice otteniamo:

| Numero morti | $x = 0$ | $x = 1$ | $x = 2$ | $x = 3$ | $x = 4$ | $x = 5$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Probabilità per ogni reggimento | $0,54335$ | $0,33144$ | $0,10109$ | $0,02056$ | $0,00313$ | $0,00038$ |

Per ottenere la probabilità per i $200$ reggimenti basterà moltiplicare per $200$:

| Numero morti | $x = 0$ | $x = 1$ | $x = 2$ | $x = 3$ | $x = 4$ | $x = 5$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Probabilità moltiplicata per tutti i reggimenti | $108,71$ | $66,288$ | $20,218$ | $4,112$ | $0,626$ | $0,076$ |

Se ora la confrontiamo con la frequenza effettiva vediamo che abbiamo un'ottima approssimazione:

| Numero morti | $x = 0$ | $x = 1$ | $x = 2$ | $x = 3$ | $x = 4$ | $x = 5$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Probabilità per tutti i reggimenti | $108,71$ | $66,288$ | $20,218$ | $4,112$ | $0,626$ | $0,076$ |
| Frequenza | $109$ | $65$ | $22$ | $3$ | $1$ | $0$ |
| Morti effettivi | $0$ | $65$ | $44$ | $9$ | $4$ | $0$ |

---

> **Nota:** Intendiamoci: siamo partiti da una frequenza e quindi otteniamo dei valori logicamente compatibili con tale frequenza, però l'importante è che la distribuzione di Poisson dà la "tendenza" di un fenomeno raro e di applicazioni se ne avranno tantissime: dal progettare il mercato per farmaci di malattie rare al vedere la distribuzione di auto con $0, 1, 2, 3$ incidenti per anno e quindi fissare le tariffe bonus/malus, al programmare il numero di pezzi da mettere in una spedizione presupponendo che una piccolissima percentuale sia difettosa, al numero di telefonate che arrivano ad un centralino, alle auto che si fermano ad una stazione di servizio, ai clienti di uno sportello bancario, eccetera, eccetera...