Risolvere la seguente disequazione esponenziale

$$
\textcolor{red}{2^{2x+1} - 3 \cdot 2^{x+2} < -10}
$$

Prima cerco di avere le potenze senza aggiunta di numeri 1 e 2 ricordando che vale $$2^{x+1} = 2^x \cdot 2^1 = 2 \cdot 2^x$$

$$
\textcolor{blue}{2^{2x} \cdot 2^1 - 3 \cdot 2^x \cdot 2^2 < -10}
$$

$$
\textcolor{blue}{2 \cdot 2^{2x} - 12 \cdot 2^x < -10}
$$

$$
\textcolor{blue}{2 \cdot 2^{2x} - 12 \cdot 2^x + 10 < 0}
$$

Posso dividere ogni termine per 2

$$
\textcolor{blue}{2^{2x} - 6 \cdot 2^x + 5 < 0}
$$

Ora siccome un termine ha potenza doppia rispetto all'altro pongo $$\textcolor{blue}{2^x = y}$$ e quindi $$\textcolor{blue}{2^{2x} = y^2}$$ ed ottengo:

$$
\textcolor{blue}{y^2 - 6y + 5 < 0}
$$

Questa è una normalissima disequazione di secondo grado: considero l'equazione associata

$$
\textcolor{blue}{y^2 - 6y + 5 = 0}
$$

Essa ha soluzioni

$$
\textcolor{blue}{y_1 = 1 \quad y_2 = 5}
$$

E siccome il discriminante è maggiore di zero e la disequazione minore di zero dovremo prendere per la disequazione i valori interni all'intervallo delle radici cioè

$$
\textcolor{blue}{1 < y < 5}
$$

Ora devo risolvere le due disequazioni $$\textcolor{blue}{1 < 2^x < 5}$$

Le risolvo una per volta:

- $$
\textcolor{blue}{2^x > 1}
$$
  $$
\textcolor{blue}{2^x > 2^0}
$$
  $$
\textcolor{blue}{x > 0}
$$

- $$
\textcolor{blue}{2^x < 5}
$$
  Siccome il 5 non si può ridurre a potenza del 2 applico il logaritmo ad entrambi i membri
  $$
\textcolor{blue}{\log 2^x < \log 5}
$$
  Per le proprietà dei logaritmi
  $$
\textcolor{blue}{x \log 2 < \log 5}
$$
  $$
\textcolor{blue}{x < \frac{\log 5}{\log 2}}
$$

Quindi il risultato finale è

$$
\textcolor{red}{0 < x < \frac{\log 5}{\log 2}}
$$