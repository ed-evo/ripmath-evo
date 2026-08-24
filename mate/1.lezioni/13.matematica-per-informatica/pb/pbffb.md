# La differenza come somma complementare

Vediamo come è possibile, con l'uso dei complementari, trasformare l'operazione di sottrazione in un'operazione di somma, senza quindi dover ricorrere a prestiti dalle colonne precedenti.

Consideriamo di avere due numeri $$a$$ e $$b$$ ad esempio di $$4$$ cifre con $$a < b$$ e consideriamo la sottrazione $$a - b$$.
Posso scrivere:

$$
a - b = a - b + (9999 + 1 - 10000) =
$$

cioè aggiungo e tolgo $$10000$$ e quindi il valore non varia: infatti $$9999 + 1 = 10000$$.
Adesso faccio cadere le parentesi:

$$
= a - b + 9999 + 1 - 10000 =
$$

posso anche scrivere:

$$
= a + (9999 - b + 1) - 10000 =
$$

evidenzio l'operazione di complementare:

$$
= a + [(9999 - b) + 1] - 10000 =
$$

Il termine $$(9999 - b)$$ è il complementare di $$b$$, inoltre il numero $$10000$$ non interviene nel risultato che per l'$$1$$ che sta davanti al risultato, quindi potremmo eliminarlo tranquillamente e la mia operazione da differenza è diventata una somma. Questo metodo si chiama *end-around carry*.

## Esempio

Eseguire la differenza:
$$
8765 - 3210 =
$$

Scrivo il complemento a $$9$$ di $$3210$$: basta mettere al posto di ogni cifra quello che manca per arrivare a $$9$$, quindi ottengo:
complemento a $$9$$ di $$3210 = 6789$$

Scrivo in colonna:

$$
\begin{array}{r@{\quad}l}
8765 & + \\
6789 & = \\
\hline
15554 &
\end{array}
$$

Adesso tolgo l'$$1$$ da davanti (equivale a fare $$-10000$$) e lo aggiungo alla cifra delle unità ed ottengo il risultato:

$$
\begin{array}{r@{\quad}l}
8765 & + \\
6789 & = \\
\hline
15554 & \\
\rightarrow & 1 \\
\hline
5555 &
\end{array}
$$

---

Come abbiamo fatto con la sottrazione decimale possiamo fare con la sottrazione binaria.
Eseguire la differenza binaria:
$$
110010101 - 10110110 =
$$

Scrivo il complemento a $$2$$ di $$10110110$$: basta mettere al posto di ogni cifra quello che manca per arrivare a $$1$$, quindi ottengo:
complemento a $$2$$ di $$10110110 = 01001001$$

> **Nota:** Lascio lo $$0$$ iniziale per mostrartelo meglio.

Scrivo in colonna:

$$
\begin{array}{r@{\quad}l}
110010101 & + \\
01001001 & = \\
\hline
110011110 &
\end{array}
$$

Adesso tolgo l'$$1$$ da davanti e lo aggiungo alla cifra delle unità ed ottengo il risultato:

$$
\begin{array}{r@{\quad}l}
110010101 & + \\
01001001 & = \\
\hline
111011110 & \\
\rightarrow & 1 \\
\hline
11011111 &
\end{array}
$$

> Se trasformi in decimale si tratta della sottrazione $$405 - 182 = 223$$.
> Questo è il modo in cui funziona la tua calcolatrice tascabile quando fai una sottrazione.