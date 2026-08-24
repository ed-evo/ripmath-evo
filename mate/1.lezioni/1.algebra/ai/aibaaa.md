# Metodo di sostituzione

Se hai bisogno di una spiegazione [più approfondita](aibaaa0.html)

Dobbiamo risolvere

$$
\begin{cases}
\textcolor{red}{2x + 3y = 12} \\
\textcolor{red}{3x - y = 7}
\end{cases}
$$

In entrambe le equazioni la $x$ e la $y$ devono avere lo stesso valore, allora posso ricavare da una delle due equazioni il valore della $x$ (o della $y$) e sostituirla alla $x$ (alla $y$) nell'altra equazione.

In questo modo ottengo un'equazione in una sola incognita che so risolvere.

Sostituire $x$ o $y$ è indifferente e dipende dal sistema: nel nostro caso conviene ricavare la $y$ dalla seconda equazione e sostituirla nella prima.

> Io farò tutti i passaggi; tu puoi abbreviare

Isolo la $y$ nella seconda equazione

$$
\begin{cases}
\textcolor{red}{2x + 3y = 12} \\
\textcolor{red}{-y = 7 - 3x}
\end{cases}
$$

cambio di segno

$$
\begin{cases}
\textcolor{red}{2x + 3y = 12} \\
\textcolor{red}{y = -7 + 3x}
\end{cases}
$$

Sostituisco il valore della $y$ nella prima equazione. Senza scrivere la seconda equazione si mette una linea per indicare che c'è

$$
\begin{cases}
\textcolor{red}{2x + 3(-7 + 3x) = 12} \\
\textcolor{red}{\text{---------------------}}
\end{cases}
$$

Eseguo i calcoli

$$
\begin{cases}
\textcolor{red}{2x - 21 + 9x = 12} \\
\textcolor{red}{\text{---------------------}}
\end{cases}
$$

porto il numero dopo l'uguale

$$
\begin{cases}
\textcolor{red}{2x + 9x = 12 + 21} \\
\textcolor{red}{\text{---------------------}}
\end{cases}
$$

Sommo

$$
\begin{cases}
\textcolor{red}{11x = 33} \\
\textcolor{red}{\text{---------------------}}
\end{cases}
$$

Ricavo $x$ dividendo per $11$ prima e dopo l'uguale

$$
\begin{cases}
\textcolor{red}{\frac{11x}{11} = \frac{33}{11}} \\
\textcolor{red}{\text{---------------------}}
\end{cases}
$$

Trovo la soluzione ed ora riscrivo la seconda equazione

$$
\begin{cases}
\textcolor{red}{x = 3} \\
\textcolor{red}{y = -7 + 3x}
\end{cases}
$$

Nell'equazione di sotto al posto di $x$ sostituisco il valore trovato

$$
\begin{cases}
\textcolor{red}{x = 3} \\
\textcolor{red}{y = -7 + 3 \cdot 3}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{x = 3} \\
\textcolor{red}{y = -7 + 9}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{x = 3} \\
\textcolor{red}{y = 2}
\end{cases}
$$

## Verifica

Ora controllo se ho fatto giusto sostituendo nel sistema di partenza ad $x$ ed $y$ i valori trovati

$$
\begin{cases}
\textcolor{red}{2 \cdot 3 + 3 \cdot 2 = 12} \\
\textcolor{red}{3 \cdot 3 - 2 = 7}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{6 + 6 = 12} \\
\textcolor{red}{9 - 2 = 7}
\end{cases}
$$

Ho ottenuto delle uguaglianze vere quindi ho fatto tutto giusto.

> **Per risolvere un sistema col metodo di sostituzione:**
> - ricavo la variabile da una delle due equazioni (la più facile) e la sostituisco nell'altra equazione
> - questa diventa ad una sola incognita e la risolvo.
> - Una volta trovata l'incognita la sostituisco nella prima equazione e trovo il valore dell'altra incognita

Questo metodo viene usato preferibilmente quando abbiamo equazioni letterali, ma bisogna decidere caso per caso fra questo ed il metodo di Cramer.