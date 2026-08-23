#[Somma]{.text-red}

---

Se utilizziamo la proprietà che nei logaritmi un prodotto può essere trasformato in una somma, dovremo poi, una volta trasformati gli addendi in logaritmi, eseguire tale somma. Vediamo come comportarci con un esempio: partiamo da un prodotto da calcolare (così facciamo un po' di esercizio), comunque per evidenziare la parte che qui ci interessa la scriveremo in carattere più grande.

Calcolare:
**$$3576,8 \cdot 0,00062345 =$$**

Trasformo in logaritmo $$3576,8$$
Prima fisso la caratteristica: essendo il valore del logaritmo compreso fra $$1000$$ e $$10\,000$$, il suo valore sarà compreso fra $$3$$ e $$4$$ e quindi la sua caratteristica sarà $$3$$.

Leggo sulle tavole:
$$
3576 \to 55340
$$
$$
3577 \to 55352
$$

Di fianco ai due risultati trovi il numero $$12$$ che corrisponde alla differenza fra i due valori della mantissa.

Se poi guardi la pagina dei logaritmi trovi una tabellina con intestazione $$12$$: questi sono i risultati della proporzione con i vari decimali che basta leggere ed aggiungere alla mantissa: a $$8$$ corrisponde $$9,6$$.

$$
55340 + 9,6 = 553496
$$

E, come già visto:
**$$\log 3576,8 = 3,553496$$**

Trasformo in logaritmo $$0,00062345$$
Prima fisso la caratteristica: il numero è compreso fra $$\frac{1}{1000}$$ ($$10^{-3}$$) ed $$\frac{1}{10\,000}$$ ($$10^{-4}$$) e la sua caratteristica è tra $$-3$$ e $$-4$$ e devo prendere il minore $$-4$$ (essendo la mantissa sempre positiva) oppure, regola mnemonica, ci sono $$4$$ zeri prima della prima cifra significativa quindi la sua caratteristica sarà $$\bar{4}$$.

Considero le prime $$4$$ cifre $$6234$$ e considero l'ultima cifra $$5$$ come decimale.
Leggo sulle tavole:
$$
6234 \to 79477
$$
$$
6235 \to 79484
$$

Di fianco ai due risultati trovi il numero $$7$$ che corrisponde alla differenza fra i due valori della mantissa.

Se poi guardi la pagina dei logaritmi trovi una tabellina con intestazione $$7$$: questi sono i risultati della proporzione con i vari decimali che basta leggere ed aggiungere alla mantissa: a $$5$$ corrisponde $$3,5$$.

$$
79477 + 3,5 = 794805
$$

> **Nota:** la virgola è virtuale e ti indica solamente dove fare la somma.

E quindi:
**$$\log 0,00062345 = \bar{4},794805$$**

Quindi ora abbiamo:
**$$\log(3576,8 \cdot 0,00062345) =$$**
**$$= \log 3576,8 + \log 0,00062345 =$$**
**$$= 3,553496 + \bar{4},794805 =$$**

Sommo normalmente incolonnando secondo la virgola e ricordando che $$\bar{4}$$ è negativo:

$$
\begin{array}{r@{\quad}l}
3,553496 & + \\
\bar{4},794805 & = \\
\hline
0,348301 &
\end{array}
$$

**$$= 0,348301$$**

Prima della virgola ottengo $$0$$ perché devo sommare $$\bar{4}$$ ($$-4$$) con $$+3$$ e con $$+1$$ di riporto.

---