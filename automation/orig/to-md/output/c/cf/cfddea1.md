# [Svolgimento]{.text-red}

$$
\textcolor{red}{y = x^3 \sin(2x)}
$$

Si tratta di un prodotto fra le due funzioni $$\textcolor{red}{x^3}$$ e $$\textcolor{red}{\sin(2x)}$$, quindi applico la [regola della derivata di un prodotto](cfddb.html):

$$
\textcolor{red}{y' = f' \cdot g + f \cdot g'}
$$

- La derivata di $$\textcolor{red}{x^3}$$ è $$\textcolor{red}{3x^2}$$
- $$\textcolor{red}{\sin(2x)}$$ è funzione di funzione perché l'argomento non è $$\textcolor{red}{x}$$ ma è $$\textcolor{red}{2x}$$
- La prima funzione è $$\textcolor{red}{\sin}$$, la cui derivata è $$\textcolor{red}{\cos}$$, quindi la prima parte sarà $$\textcolor{red}{\cos(2x)}$$
- La seconda funzione è $$\textcolor{red}{2x}$$, la cui derivata è $$\textcolor{red}{2}$$, quindi la derivata di $$\textcolor{red}{\sin(2x)}$$ è $$\textcolor{red}{\cos(2x) \cdot 2}$$, cioè $$\textcolor{red}{2\cos(2x)}$$

Applicando la regola:

$$
\textcolor{red}{y' = 3x^2 \cdot \sin(2x) + x^3 \cdot 2\cos(2x)}
$$

$$
\textcolor{red}{y' = 3x^2 \sin(2x) + 2x^3 \cos(2x)}
$$

> **Nota:** Fai attenzione perché viene spontaneo non considerare $$\sin(2x)$$ e $$\cos(2x)$$ come funzione di funzione e quindi è facile sbagliare.