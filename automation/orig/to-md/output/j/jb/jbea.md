# [Approfondimento sul numero degli elementi della potenza di un insieme]{.text-red}
## [e sua relazione con il triangolo di Tartaglia]{.text-red}

Non solo gli elementi della potenza di un insieme sono pari a $$2^n$$ ma corrispondono anche alla riga del triangolo di Tartaglia corrispondente al numero degli elementi: infatti consideriamo ad esempio la riga del triangolo di Tartaglia della potenza $$4$$, essa vale

$$
1 \quad 4 \quad 6 \quad 4 \quad 1
$$

allora l'insieme potenza di un insieme con $$4$$ elementi è composto dai seguenti elementi:

- $$1$$ insieme con $$0$$ elementi (insieme vuoto)
- $$4$$ insiemi con $$1$$ elemento
- $$6$$ insiemi con $$2$$ elementi
- $$4$$ insiemi con $$3$$ elementi
- $$1$$ insieme con $$4$$ elementi (l'insieme improprio)

e la somma di tutti quanti vale

$$
1 + 4 + 6 + 4 + 1 = 16 = 2^4
$$

> **Nota:** Come corollario ne deriva che la somma degli elementi di ogni riga del triangolo di Tartaglia è una potenza del $$2$$.

Vediamone l'esempio su un insieme di $$4$$ oggetti:

[$$A = \{ 1, 2, 3, 4 \}$$]{.text-red}

allora

[$$ \mathcal{P}(A) = \{ \emptyset, \{ 1 \}, \{ 2 \}, \{ 3 \}, \{ 4 \}, \{ 1, 2 \}, \{ 1, 3 \}, \{ 1, 4 \}, \{ 2, 3 \}, \{ 2, 4 \}, \{ 3, 4 \}, \{ 1, 2, 3 \}, \{ 1, 2, 4 \}, \{ 1, 3, 4 \}, \{ 2, 3, 4 \}, \{ 1, 2, 3, 4 \} \} $$]{.text-red}

Cerchiamo di capire il perché: siccome negli insiemi non conta l'ordine, cioè $$\{a, b\} = \{b, a\}$$, allora per trovare il numero di insiemi che posso formare con un insieme ad esempio di $$4$$ elementi devo considerare le combinazioni semplici di quattro elementi e precisamente:

Combinazioni di classe $$0$$:
$$
\textcolor{blue}{\binom{4}{0}} = \textcolor{blue}{1} \quad \textcolor{red}{\emptyset}
$$

Combinazioni di classe $$1$$:
$$
\textcolor{blue}{\binom{4}{1}} = \textcolor{blue}{4} \quad \textcolor{red}{\{ 1 \}, \{ 2 \}, \{ 3 \}, \{ 4 \}}
$$

Combinazioni di classe $$2$$:
$$
\textcolor{blue}{\binom{4}{2}} = \textcolor{blue}{6} \quad \textcolor{red}{\{ 1, 2 \}, \{ 1, 3 \}, \{ 1, 4 \}, \{ 2, 3 \}, \{ 2, 4 \}, \{ 3, 4 \}}
$$

Combinazioni di classe $$3$$:
$$
\textcolor{blue}{\binom{4}{3}} = \textcolor{blue}{4} \quad \textcolor{red}{\{ 1, 2, 3 \}, \{ 1, 2, 4 \}, \{ 1, 3, 4 \}, \{ 2, 3, 4 \}}
$$

Combinazioni di classe $$4$$:
$$
\textcolor{blue}{\binom{4}{4}} = \textcolor{blue}{1} \quad \textcolor{red}{\{ 1, 2, 3, 4 \}}
$$

Ma abbiamo visto nel calcolo combinatorio che le combinazioni su $$n$$ oggetti non sono altro che i coefficienti dello sviluppo del binomio, cioè i termini della riga corrispondente del triangolo di Tartaglia, quindi abbiamo una stretta corrispondenza fra righe del triangolo di Tartaglia ed elementi dell'insieme potenza di un insieme.