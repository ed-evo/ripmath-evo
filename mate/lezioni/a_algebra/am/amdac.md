Risolvere la seguente disequazione esponenziale

$$
\textcolor{red}{2^x + 3 \cdot 2^{1-x} \geq 5}
$$

so che $2^{1-x} = 2 \cdot \frac{1}{2^x}$ quindi scrivo

$$
\textcolor{blue}{2^x + 3 \cdot 2 \cdot \frac{1}{2^x} \geq 5}
$$

ora faccio il m.c.m. e poi elimino $2^x$ al denominatore (posso farlo perché $2^x$ è un numero certamente positivo e quindi non mi cambia di verso la disequazione)

$$
\textcolor{blue}{\frac{2^{2x} + 6}{2^x} \geq \frac{5 \cdot 2^x}{2^x}}
$$

$$
\textcolor{blue}{2^{2x} + 6 \geq 5 \cdot 2^x}
$$

$$
\textcolor{blue}{2^{2x} - 5 \cdot 2^x + 6 \geq 0}
$$

Ora siccome un termine ha potenza doppia rispetto all'altro pongo [$\textcolor{blue}{2^x = y}$]{.text-blue} e quindi [$\textcolor{blue}{2^{2x} = y^2}$]{.text-blue} ed ottengo:

$$
\textcolor{blue}{y^2 - 5y + 6 > 0}
$$

questa è una normalissima disequazione di secondo grado: considero l'equazione associata

$$
\textcolor{blue}{y^2 - 5y + 6 = 0}
$$

essa ha soluzioni

$$
\textcolor{blue}{y_1 = 2 \quad y_2 = 3}
$$

e siccome il discriminante è maggiore di zero e la disequazione maggiore di zero dovremo prendere per la disequazione i valori esterni all'intervallo delle radici cioè

$$
\textcolor{blue}{y < 2 \lor y > 3}
$$

Ora devo risolvere le due disequazioni [$\textcolor{blue}{2^x < 2}$]{.text-blue} e [$\textcolor{blue}{2^x > 3}$]{.text-blue}

le risolvo una per volta:

- $$
\textcolor{blue}{2^x < 2}
$$
  $$
\textcolor{blue}{2^x < 2^1}
$$
  $$
\textcolor{blue}{x < 1}
$$

- $$
\textcolor{blue}{2^x > 3}
$$
  siccome il $3$ non si può ridurre a potenza del $2$ applico il logaritmo ad entrambi i membri
  $$
\textcolor{blue}{\log 2^x > \log 3}
$$
  per le proprietà dei logaritmi
  $$
\textcolor{blue}{x \log 2 > \log 3}
$$
  $$
\textcolor{blue}{x > \frac{\log 3}{\log 2}}
$$

Quindi il risultato finale è

$$
\textcolor{red}{x < 1 \lor x > \frac{\log 3}{\log 2}}
$$