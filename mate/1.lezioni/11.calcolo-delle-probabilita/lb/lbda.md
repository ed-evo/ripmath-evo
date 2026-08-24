# Relazioni fra coefficienti binomiali e potenza di un binomio

Cerchiamo di capire il significato dei coefficienti binomiali; ad esempio iniziamo a vedere quelli per le combinazioni di due oggetti

$$\textcolor{blue}{\binom{2}{1} = 2}$$ $$\textcolor{blue}{\binom{2}{2} = 1}$$ [Calcoli](lbdaa.html)

Vediamo anche quelli per le combinazioni per $$3$$ oggetti

$$\textcolor{blue}{\binom{3}{1} = 3}$$ $$\textcolor{blue}{\binom{3}{2} = 3}$$ $$\textcolor{blue}{\binom{3}{3} = 1}$$ [Calcoli](lbdab.html)

Se osservi questi numeri hanno qualcosa di familiare, e precisamente, a meno del primo termine, sono i coefficienti dello sviluppo del [quadrato di un binomio e del cubo di un binomio](../../a/ad/ad4cfa.html)

Proviamo allora ad aggiungere al primo posto le combinazioni di $$2$$ e $$3$$ oggetti di classe zero

$$\textcolor{blue}{\binom{2}{0} = 1}$$ $$\textcolor{blue}{\binom{2}{1} = 2}$$ $$\textcolor{blue}{\binom{2}{2} = 1}$$

$$\textcolor{blue}{\binom{3}{0} = 1}$$ $$\textcolor{blue}{\binom{3}{1} = 3}$$ $$\textcolor{blue}{\binom{3}{2} = 3}$$ $$\textcolor{blue}{\binom{3}{3} = 1}$$

Adesso vedi che le combinazioni corrispondono ai coefficienti dello sviluppo della potenza di un binomio;

ad esempio per le combinazioni su $$4$$ oggetti avremo

$$\textcolor{blue}{\binom{4}{0} = 1}$$ $$\textcolor{blue}{\binom{4}{1} = 4}$$ $$\textcolor{blue}{\binom{4}{2} = 6}$$ $$\textcolor{blue}{\binom{4}{3} = 4}$$ $$\textcolor{blue}{\binom{4}{4} = 1}$$

Infatti la potenza quarta del binomio è

$$
\textcolor{red}{(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4}
$$

[Dai un'occhiata](../../j/jb/jbea.html) all'applicazione delle combinazioni semplici per determinare l'insieme delle parti e guarda questo [triangolo di Tartaglia](../../j/jb/jbeaa.html)

Da qui il nome di coefficiente binomiale per la scrittura $$\textcolor{blue}{\binom{n}{k}}$$

### Esempio

Calcolare $$\textcolor{blue}{(a+b)^5}$$

$$
\textcolor{red}{(a+b)^5 = \binom{5}{0} a^5 \cdot b^0 + \binom{5}{1} a^4 \cdot b^1 + \binom{5}{2} a^3 \cdot b^2 + \binom{5}{3} a^2 \cdot b^3 + \binom{5}{4} a^1 \cdot b^4 + \binom{5}{5} a^0 \cdot b^5}
$$

$$
\textcolor{red}{= a^5 + 5 a^4 b + 10 a^3 b^2 + 10 a^2 b^3 + 5 a b^4 + b^5}
$$