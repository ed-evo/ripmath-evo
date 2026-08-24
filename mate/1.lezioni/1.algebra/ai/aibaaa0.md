# Metodo di sostituzione

Risolviamo il sistema generico
$$
\begin{cases}
\textcolor{red}{ax + by = c} \\
\textcolor{red}{dx + ey = f}
\end{cases}
$$
dove $$a, b, c, d, e, f$$ sono numeri dati.

Isolo il termine con $$x$$ nella prima equazione:
$$
\begin{cases}
\textcolor{red}{ax = -by + c} \\
\textcolor{red}{dx + ey = f}
\end{cases}
$$

Ricavo la $$x$$:
$$
\begin{cases}
\textcolor{red}{x = \frac{-by + c}{a}} \\
\textcolor{red}{dx + ey = f}
\end{cases}
$$

Sostituisco nella seconda equazione alla $$x$$ il valore trovato:
$$
\begin{cases}
\textcolor{red}{x = \frac{-by + c}{a}} \\
\textcolor{red}{d\left(\frac{-by + c}{a}\right) + ey = f}
\end{cases}
$$

Al posto della prima equazione metto una linea. Nella seconda moltiplico:
$$
\begin{cases}
\text{------------------} \\
\textcolor{red}{\frac{-bdy + cd}{a} + ey = f}
\end{cases}
$$

Ora faccio il minimo comune multiplo:
$$
\begin{cases}
\text{------------------} \\
\textcolor{red}{\frac{-bdy + cd + aey}{a} = \frac{af}{a}}
\end{cases}
$$

Tolgo i denominatori:
$$
\begin{cases}
\text{------------------} \\
\textcolor{red}{-bdy + cd + aey = af}
\end{cases}
$$

Termini con $$y$$ prima dell'uguale (metto prima i positivi), termini senza $$y$$ dopo l'uguale:
$$
\begin{cases}
\text{------------------} \\
\textcolor{red}{aey - bdy = af - cd}
\end{cases}
$$

Metto in evidenza $$y$$:
$$
\begin{cases}
\text{------------------} \\
\textcolor{red}{y(ae - bd) = af - cd}
\end{cases}
$$

Ricavo $$y$$ dividendo il termine dopo l'uguale per il coefficiente della $$y$$:
$$
\begin{cases}
\text{------------------} \\
\textcolor{red}{y = \frac{af - cd}{ae - bd}}
\end{cases}
$$

> **Nota:** Devo sostituire questo valore nell'equazione sopra (rappresentata dalla linea). Da questo punto, anche se è un errore, per semplicità, ometto la parentesi graffa.

$$
\textcolor{red}{x = \frac{-by + c}{a}}
$$

Sostituisco:
$$
\textcolor{red}{x = \frac{-b \left(\frac{af - cd}{ae - bd}\right) + c}{a}}
$$

Moltiplico sopra:
$$
\textcolor{red}{x = \frac{\frac{-abf + bcd}{ae - bd} + c}{a}}
$$

Minimo comune multiplo sopra:
$$
\textcolor{red}{x = \frac{\frac{-abf + bcd + ace - bcd}{ae - bd}}{a}}
$$

Sommo e scrivo prima i positivi:
$$
\textcolor{red}{x = \frac{\frac{ace - abf}{ae - bd}}{a}}
$$

Moltiplico il numeratore per l'inverso del denominatore:
$$
\textcolor{red}{x = \frac{ace - abf}{ae - bd} \cdot \frac{1}{a}}
$$

Raccolgo $$a$$ al numeratore per semplificarlo con la $$a$$ al denominatore:
$$
\textcolor{red}{x = \frac{\textcolor{blue}{a}(ce - bf)}{ae - bd} \cdot \frac{1}{\textcolor{blue}{a}}}
$$

Semplifico:
$$
\textcolor{red}{x = \frac{ce - bf}{ae - bd}}
$$

Quindi la soluzione del sistema sarà:
$$
\begin{cases}
\textcolor{blue}{x = \frac{ce - bf}{ae - bd}} \\
\textcolor{blue}{y = \frac{af - cd}{ae - bd}}
\end{cases}
$$

Se vuoi risolvere un sistema puoi anche usare questa come formula risolutiva.