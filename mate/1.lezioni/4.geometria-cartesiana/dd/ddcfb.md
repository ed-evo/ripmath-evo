# Equazioni delle tangenti condotte da un punto esterno ad una circonferenza

Abbiamo visto che quando una retta è tangente ad una circonferenza ha con essa $$2$$ punti coincidenti in comune, cioè facendo il sistema fra la retta e la circonferenza il discriminante del sistema è uguale a zero.

Ma allora, se considero il fascio di rette che esce dal punto e fra tutte le rette scelgo quelle che in sistema con la circonferenza hanno il $$\Delta$$ uguale a zero troverò le rette tangenti.

> **Nota:** in pratica ho ribaltato la frittata:
> retta tangente $$\Rightarrow \Delta = 0$$
> $$\Delta = 0 \Rightarrow$$ retta tangente

Per trovare le rette tangenti condotte da un punto ad una circonferenza:
- considero il fascio di rette passanti per il punto (dipendente da un parametro) e faccio il sistema fra il fascio di rette e la circonferenza (questo sistema mi rappresenta tutte le intersezioni fra il fascio di rette e la circonferenza);
- risolvo il sistema ed ottengo un'equazione detta equazione risolvente;
- pongo il discriminante dell'equazione risolvente uguale a zero, ottengo un'equazione con il parametro come incognita;
- risolvendo l'ultima equazione trovo i valori del parametro corrispondenti alle rette tangenti.

Vediamo di capire meglio il metodo con un esempio pratico:

Trovare le tangenti alla circonferenza
$$\textcolor{red}{x^2 + y^2 - 10y + 16 = 0}$$
condotte dall'origine $$\textcolor{red}{O(0,0)}$$.
È la circonferenza di centro $$C(0,5)$$ e raggio $$3$$.

> **Nota:** è una circonferenza che abbiamo già incontrato.

Per trovare l'equazione delle rette tangenti considero il fascio di rette con centro l'origine:
$$\textcolor{red}{y = mx}$$

Faccio il sistema fra la circonferenza ed il fascio di rette:
$$
\begin{cases}
\textcolor{red}{x^2 + y^2 - 10y + 16 = 0} \\
\textcolor{red}{y = mx}
\end{cases}
$$

Sostituisco:
$$
\begin{cases}
\textcolor{red}{x^2 + (mx)^2 - 10(mx) + 16 = 0} \\
\textcolor{red}{y = mx}
\end{cases}
$$

Calcolo:
$$
\begin{cases}
\textcolor{red}{x^2 + m^2x^2 - 10mx + 16 = 0}
\end{cases}
$$

Raccolgo i termini con $$x^2$$, con $$x$$ ed i termini noti ed ottengo l'equazione risolvente:
$$\textcolor{red}{x^2(1 + m^2) - 10mx + 16 = 0}$$

Ora calcolo il discriminante (delta) $$b^2 - 4ac$$ e lo pongo uguale a zero, in tal modo determino i valori di $$m$$ per cui le rette del fascio sono tangenti:
$$\textcolor{red}{9m^2 - 16 = 0}$$
$$\textcolor{red}{m^2 = 16/9}$$
$$\textcolor{red}{m = \pm \sqrt{16/9} = \pm 4/3}$$

Le due rette tangenti sono:
$$\textcolor{red}{y = 4/3x \quad y = -4/3x}$$

Vediamo insieme un esercizio.