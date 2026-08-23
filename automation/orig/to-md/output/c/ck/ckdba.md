# [Tabella applicata alle funzioni di funzione]{.text-red}

Ricordando la regola per la derivata di una funzione di funzione:

$$
\textcolor{red}{y = f[g(x)]} \quad \textcolor{red}{y' = f'[g(x)] \cdot g'(x)}
$$

Se devo fare un integrale di una funzione ed è presente anche la sua derivata allora posso considerare la funzione come se fosse una $$x$$ e quindi applicare la regola di integrazione data nella tabella precedente.

**Esempio**

$$
\textcolor{red-darken-1}{\int (x^2 + 1)^4 \cdot 2x \, dx}
$$

$$2x$$ è la derivata di $$x^2 + 1$$, quindi posso fare l'integrale come se fosse $$x^4$$ dove al posto di $$x$$ c'è la funzione $$x^2 + 1$$ ed ottengo:

$$
\textcolor{red-darken-1}{\frac{(x^2 + 1)^{4+1}}{4+1} = \frac{(x^2 + 1)^5}{5} + c}
$$

Se ora derivo il risultato devo prima fare la derivata della potenza e poi la derivata dell'interno cioè di $$x^2 + 1$$ e quindi riottengo la funzione di partenza.

> Un tempo si teneva molto a risolvere gli integrali con queste regole, oggi si preferisce risolverli in modo automatico applicando l'integrazione per sostituzione: infatti basta sostituire alla funzione una variabile $$t$$ e l'integrale si può fare in modo quasi automatico.

Facciamo per le funzioni una tabella analoga alla precedente:

- $$
\textcolor{red}{\int f(x) \, dx = F(x) + c}
$$
- $$
\textcolor{red}{\int [f(x)]^n f'(x) \, dx = \frac{[f(x)]^{n+1}}{n+1} + c}
$$
(con $$n$$ diverso da $$-1$$)
- $$
\textcolor{red}{\int \frac{f'(x)}{f(x)} \, dx = \ln |f(x)| + c}
$$
- $$
\textcolor{red}{\int \cos[f(x)] \cdot f'(x) \, dx = \sin[f(x)] + c}
$$
- $$
\textcolor{red}{\int \sin[f(x)] \cdot f'(x) \, dx = -\cos[f(x)] + c}
$$
- $$
\textcolor{red}{\int e^{f(x)} \cdot f'(x) \, dx = e^{f(x)} + c}
$$
- $$
\textcolor{red}{\int a^{f(x)} \cdot f'(x) \, dx = \frac{1}{\ln a} a^{f(x)} + c}
$$
- $$
\textcolor{red}{\int \frac{f'(x)}{\sqrt{1 - f(x)^2}} \, dx = \arcsin[f(x)] + c}
$$
- $$
\textcolor{red}{\int \frac{f'(x)}{1 + [f(x)]^2} \, dx = \arctan[f(x)] + c}
$$

> **Nota:** Per $$\ln f(x)$$ si intende $$\log_e f(x)$$.