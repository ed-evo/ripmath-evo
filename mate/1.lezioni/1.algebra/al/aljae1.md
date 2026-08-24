Risolvere la seguente equazione logaritmica

$$
\textcolor{red}{\log_{2}\sqrt{4x^{2} - 3x + 4} - \log_{2}\sqrt{x^{2} + x + 1} = 1}
$$

Siccome il logaritmo è definito solamente se l'argomento è maggiore di zero dovremo risolvere l'equazione sotto le condizioni:

$$
\textcolor{blue}{
\begin{cases}
\sqrt{4x^{2} - 3x + 4} > 0 \\
\sqrt{x^{2} + x + 1} > 0
\end{cases}
}
$$

e, siccome la radice è definita positiva, possiamo risolvere

$$
\textcolor{blue}{
\begin{cases}
4x^{2} - 3x + 4 > 0 \\
x^{2} + x + 1 > 0
\end{cases}
}
$$

Trovo che entrambi i trinomi sono positivi per ogni valore di $x$ [calcoli](aljae1a.html) e quindi ogni valore trovato sarà accettabile. Adesso passo a risolvere l'equazione

$$
\textcolor{blue}{\log_{2}\sqrt{4x^{2} - 3x + 4} - \log_{2}\sqrt{x^{2} + x + 1} = 1}
$$

Per la regola del [logaritmo di una radice](algd.html) posso scrivere

$$
\textcolor{blue}{\frac{1}{2} \log_{2}(4x^{2} - 3x + 4) - \frac{1}{2} \log_{2}(x^{2} + x + 1) = 1}
$$

Moltiplico tutti i termini per $2$ (equivale a fare il m.c.m. ed eliminare i denominatori)

$$
\textcolor{blue}{\log_{2}(4x^{2} - 3x + 4) - \log_{2}(x^{2} + x + 1) = 2}
$$

Ora applico la regola del [logaritmo di un quoziente](algb.html), inoltre so che $2 = \log_{2} 4$

$$
\textcolor{blue}{\log_{2} \frac{4x^{2} - 3x + 4}{x^{2} + x + 1} = \log_{2} 4}
$$

cioè, uguagliando gli argomenti

$$
\textcolor{blue}{\frac{4x^{2} - 3x + 4}{x^{2} + x + 1} = 4}
$$

faccio il m.c.m. Non devo porre condizioni perché il termine al denominatore è sempre positivo, come visto [prima](aljae1a.html)

$$
\textcolor{blue}{\frac{4x^{2} - 3x + 4}{x^{2} + x + 1} = \frac{4(x^{2} + x + 1)}{x^{2} + x + 1}}
$$

tolgo i denominatori

$$
\textcolor{blue}{4x^{2} - 3x + 4 = 4(x^{2} + x + 1)}
$$

calcolo

$$
\textcolor{blue}{4x^{2} - 3x + 4 = 4x^{2} + 4x + 4}
$$

$$
\textcolor{blue}{4x^{2} - 3x + 4 - 4x^{2} - 4x - 4 = 0}
$$

$$
\textcolor{blue}{-7x = 0}
$$

$$
\textcolor{blue}{x = 0}
$$

siccome erano accettabili tutti i valori $\textcolor{red}{x = 0}$ è accettabile