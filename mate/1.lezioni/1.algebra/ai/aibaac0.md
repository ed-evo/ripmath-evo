# Metodo di confronto

Risolviamo il sistema generico
$$
\begin{cases}
ax + by = c \\
dx + ey = f
\end{cases}
$$
ove $$a$$, $$b$$, $$c$$, $$d$$, $$e$$, $$f$$ sono numeri dati.

Isolo il termine con $$x$$ nelle due equazioni:
$$
\begin{cases}
ax = c - by \\
dx = f - ey
\end{cases}
$$

Ricavo la $$x$$ da entrambe le equazioni:
$$
\begin{cases}
x = \frac{c - by}{a} \\
x = \frac{f - ey}{d}
\end{cases}
$$

Eguaglio i valori delle $$x$$ trovati e come seconda equazione scelgo una delle due:
$$
\begin{cases}
\frac{c - by}{a} = \frac{f - ey}{d} \\
x = \frac{c - by}{a}
\end{cases}
$$

Sopra faccio il minimo comune multiplo, sotto metto una linea al posto dell'equazione:
$$
\begin{cases}
\frac{cd - bdy}{ad} = \frac{af - aey}{ad} \\
\hline
\end{cases}
$$

Elimino i denominatori e porto i termini con l'incognita prima dell'uguale e quelli noti dopo l'uguale:
$$
\begin{cases}
aey - bdy = af - cd \\
\hline
\end{cases}
$$

Ricavo la $$y$$ e riscrivo l'equazione al posto della linea:
$$
\begin{cases}
y = \frac{af - cd}{ae - bd} \\
x = \frac{c - by}{a}
\end{cases}
$$

Sostituisco il valore trovato nella seconda equazione e da questo punto, anche se è un errore, per semplicità, ometto la parentesi graffa:
$$
x = \frac{c - by}{a}
$$

Sostituisco:
$$
x = \frac{c - b \left( \frac{af - cd}{ae - bd} \right)}{a}
$$

Moltiplico sopra per $$-b$$ (così resta il segno $$+$$):
$$
x = \frac{c + \frac{-abf + bcd}{ae - bd}}{a}
$$

Minimo comune multiplo sopra:
$$
x = \frac{\frac{ace - bcd - abf + bcd}{ae - bd}}{a}
$$

Sommo e scrivo prima i positivi:
$$
x = \frac{\frac{ace - abf}{ae - bd}}{a}
$$

Moltiplico il numeratore per l'inverso del denominatore:
$$
x = \frac{ace - abf}{ae - bd} \cdot \frac{1}{a}
$$

Raccolgo $$a$$ al numeratore per semplificarlo con la $$a$$ al denominatore:
$$
x = \frac{\textcolor{blue}{a}(ce - bf)}{ae - bd} \cdot \frac{1}{\textcolor{blue}{a}}
$$

Semplifico:
$$
x = \frac{ce - bf}{ae - bd}
$$

Quindi, riscrivendo la graffa, la soluzione del sistema sarà:
$$
\begin{cases}
x = \frac{ce - bf}{ae - bd} \\
y = \frac{af - cd}{ae - bd}
\end{cases}
$$