Determinare i punti di massimo, minimo per la seguente funzione in tutto l'intervallo di definizione:

[$\textcolor{red}{y = x \ln^2 x}$]{.text-red}

Invece di scrivere $\ln x$ scriverò $\log x$ intendendo con ciò il logaritmo naturale di $x$.

> **Nota:** Un errore abbastanza comune è confondere $\log^2 x$ con $\log x^2$: sono due cose del tutto diverse:
> - $\log^2 x = \log x \cdot \log x = (\log x)^2$
> - $\log x^2 = \log (x \cdot x) = 2 \log x$

L'intervallo di definizione è tutto $R$ eccetto dove l'argomento del logaritmo è minore od uguale a zero (ove il logaritmo non è definito), cioè devo considerare accettabili i valori per cui [$\textcolor{red}{x > 0}$]{.text-red}

quindi:
[$\textcolor{red}{C.E. = (0, +\infty)}$]{.text-red}

Trovo la derivata prima (derivata di un prodotto) e la pongo uguale a zero:

$$
\textcolor{red}{y' = \log^2 x + x \cdot 2\log x \cdot \frac{1}{x}}
$$

$$
\textcolor{red}{y' = \log^2 x + 2\log x}
$$

$$
\textcolor{red}{\log^2 x + 2\log x = 0}
$$

$$
\textcolor{red}{\log x(\log x + 2) = 0}
$$

La spezzo nelle due equazioni:

- [$\textcolor{red}{\log x + 2 = 0 \implies \log x = -2}$]{.text-red} accettabile: corrisponde ad [$\textcolor{red}{x = e^{-2}}$]{.text-red}
- [$\textcolor{red}{\log x = 0 \implies x = 1}$]{.text-red} accettabile

Trovo i valori della $y$ corrispondente sostituendo prima $e^{-2}$ e poi $1$ al posto di $x$ nell'equazione di partenza:

$$
\textcolor{red}{y(1) = 1 \log^2 1 = 0}
$$

$$
\textcolor{red}{y(e^{-2}) = e^{-2} \log^2 e^{-2} = e^{-2} (-2)^2 = 4e^{-2}}
$$

Nei punti [$\textcolor{red}{A(e^{-2}, 4e^{-2})}$]{.text-red} e [$\textcolor{red}{B(1, 0)}$]{.text-red} potrei avere un massimo, un minimo o un flesso. Per sapere se abbiamo un massimo, un minimo o un flesso calcoliamo la derivata seconda:

$$
\textcolor{red}{y'' = 2\log x \cdot \frac{1}{x} + 2 \cdot \frac{1}{x}}
$$

$$
\textcolor{red}{y'' = \frac{2}{x}\log x + \frac{2}{x} = \frac{2}{x}(1 + \log x)}
$$

- Sostituisco ad $x$ il valore $e^{-2}$:
  $$
  \textcolor{red}{y''(e^{-2}) = \frac{2}{e^{-2}}(1 + \log e^{-2}) = \frac{2}{e^{-2}}(1 - 2) < 0}
  $$
  Il punto [$\textcolor{red}{A(e^{-2}, 4e^{-2})}$]{.text-red} è un punto di massimo.

- Sostituisco ad $x$ il valore $1$:
  $$
  \textcolor{red}{y''(1) = \frac{2}{1}(1 + \log 1) = \frac{2}{1}(1 + 0) > 0}
  $$
  Il punto [$\textcolor{red}{B(1, 0)}$]{.text-red} è un punto di minimo.