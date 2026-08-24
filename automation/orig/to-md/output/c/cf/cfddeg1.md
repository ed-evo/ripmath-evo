# [Svolgimento]{.text-red}

$$
\textcolor{red}{y = 4\sin x^3 \cdot \sin^3 x}
$$

Si tratta di una costante $\textcolor{red}{4}$ per il prodotto fra le due funzioni $\textcolor{red}{\sin x^3}$ e $\textcolor{red}{\sin^3 x}$ ed entrambe si possono considerare [funzione di funzione](cfddd.html).

Infatti nella prima $\textcolor{red}{\sin}$ è funzione di $\textcolor{red}{x^3}$, nella seconda abbiamo la potenza $\textcolor{red}{3}$ che è funzione di $\textcolor{red}{\sin x}$.

$\textcolor{red}{4}$ è una costante.

La derivata di $\textcolor{red}{\sin x^3}$ è $\textcolor{red}{\cos x^3 \cdot 3x^2}$.
La derivata di $\textcolor{red}{\sin^3 x}$ è $\textcolor{red}{3\sin^2 x \cdot \cos x}$.

Avrò, applicando la regola della [derivata di un prodotto](cfddb.html):

$$
\textcolor{red}{y' = 4 \cdot [ \cos x^3 \cdot 3x^2 \cdot \sin^3 x + \sin x^3 \cdot 3\sin^2 x \cdot \cos x ]}
$$

Eseguendo i calcoli:

$$
\textcolor{red}{y' = 12x^2 \sin^3 x \cdot \cos x^3 + 12\sin^2 x \cdot \sin x^3 \cdot \cos x}
$$

> **Nota:** in questo esercizio si giocava sulla confusione che può nascere fra le due scritture:
> $\textcolor{red}{\sin x^3}$
> e
> $\textcolor{red}{\sin^3 x}$
> la prima significa: $\textcolor{red}{\sin(x \cdot x \cdot x)}$
> la seconda significa: $\textcolor{red}{\sin x \cdot \sin x \cdot \sin x}$ ed equivale a $\textcolor{red}{(\sin x)^3}$