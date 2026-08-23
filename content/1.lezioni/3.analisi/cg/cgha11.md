Quando scriverò $$\log x$$ intenderò $$\ln x$$ cioè il logaritmo naturale di $$x$$.

Determinare i punti di massimo e minimo per la seguente funzione nell'intervallo a fianco segnato:

$$
\textcolor{red}{y = \frac{x}{\log x}} \quad \textcolor{red}{0 \le x \le 2}
$$

***

La prima cosa da dire è che l'intervallo esatto è:
$$\textcolor{red}{0 < x \le 2 \text{ con } x \neq 1}$$
perché $$\log x$$ non è definito per $$x = 0$$ e il denominatore della funzione si annulla per $$x = 1$$.

***

Trovo la [derivata prima](cgha11a.html) e la pongo uguale a zero:

$$
\textcolor{red}{y' = \frac{\log x - 1}{\log^2 x}}
$$

$$\textcolor{red}{\log x - 1 = 0}$$
$$\textcolor{red}{\log x = 1}$$
$$\textcolor{red}{x = e}$$

Trovo il valore della $$y$$ corrispondente sostituendo $$e$$ al posto di $$x$$ nell'equazione di partenza:

$$
\textcolor{red}{y(e) = \frac{e}{\log e} = e}
$$

Il punto estremante è:
$$\textcolor{red}{A(e, e)}$$

Siccome io devo considerare i valori della funzione all'interno dell'intervallo $$\textcolor{red}{0 < x \le 2 \text{ con } x \neq 1}$$, non posso considerare il punto $$A$$ perché esterno (il numero $$e$$ vale circa $$2,7$$); quindi il massimo e il minimo della funzione saranno legati ai valori estremi dell'intervallo: $$0$$, $$1$$, $$2$$.

***

> **Nota:** C'è anche da dire che non appartenendo lo zero all'intervallo di definizione, in zero non avrò né massimo né minimo se non come limite.

***

Nel punto $$0$$ dovrò fare il limite destro, mentre nel punto $$2$$ trovo il valore della $$y$$ corrispondente sostituendo $$2$$ al posto di $$x$$ nell'equazione di partenza; infine, nel punto $$1$$ calcolerò il limite della funzione:

- $$
\textcolor{red}{\lim_{x \to 0^+} \frac{x}{\log x} = \frac{0}{-\infty} = 0}
$$
- $$
\textcolor{red}{y(2) = \frac{2}{\log 2}}
$$
- $$
\textcolor{red}{\lim_{x \to 1} \frac{x}{\log x} = \frac{1}{0} = \infty}
$$

Quest'ultimo limite però ha valori diversi a destra e a sinistra e precisamente:

    - limite sinistro:
      $$
      \textcolor{red}{\lim_{x \to 1^-} \frac{x}{\log x} = \frac{+}{-} = -\infty}
      $$
    - limite destro:
      $$
      \textcolor{red}{\lim_{x \to 1^+} \frac{x}{\log x} = \frac{+}{+} = +\infty}
      $$

Anche se per avere una visione corretta dovresti aver fatto gli asintoti, comunque un grafico molto intuitivo potrebbe essere quello che vedi qui a fianco.