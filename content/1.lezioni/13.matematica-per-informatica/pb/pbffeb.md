# esercizio

Eseguire il seguente quoziente fra numeri binari:
**$$100010001 : 11011 =$$**

$$
\begin{array}{rll}
100010001 & : & 11011 = 1010 \\
\underline{- 11011} & & \\
11100 & & \\
\underline{- 11011} & & \\
11 & & \text{(resto)}
\end{array}
$$

Ti spiego passo passo come si procede:
le cifre del divisore ($$11011$$) sono $$5$$ quindi considero $$5$$ cifre del dividendo ($$10001$$): vedo che le $$5$$ cifre del divisore danno un numero di valore superiore al valore delle cinque cifre del dividendo, cioè $$11011$$ in $$10001$$ non ci sta, quindi considero anche la sesta cifra del dividendo ed ottengo $$100010$$.

Ora $$11011$$ in $$100010$$ ci sta, quindi scrivo $$1$$ nel quoziente e scrivo $$11011$$ sotto le cifre considerate del dividendo (partendo da destra), ed eseguo la sottrazione: ottengo $$111$$.

aggiungo una cifra del dividendo ed ottengo $$1110$$;
$$11011$$ in $$1110$$ non ci sta, quindi scrivo $$0$$ nel quoziente ed abbasso un'altra cifra; ottengo $$11100$$.

$$11011$$ in $$11100$$ ci sta, quindi scrivo $$1$$ nel divisore e scrivo $$11011$$ sotto le cifre considerate (partendo da destra), ed eseguo la sottrazione: ottengo $$1$$.

e abbasso l'ultima cifra, ottengo $$11$$.
$$11011$$ in $$11$$ non ci sta una volta, scrivo $$0$$ nel quoziente ed ho terminato le cifre, quindi $$11$$ è il resto.

ho ottenuto
**$$100010001 : 11011$$ dà $$1010$$ con resto $$11$$**

> Trasformando in decimale è **$$273 : 27$$ dà $$9$$ con resto di $$3$$**