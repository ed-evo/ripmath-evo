# [Determinazione dei punti di flesso obliquo]{.text-red}

> Veramente con questo metodo troviamo sia i flessi obliqui che quelli orizzontali: poiché nei punti di flesso la tangente attraversa la curva, la curva stessa dovrà a destra ed a sinistra del punto avere una concavità di tipo diverso, quindi la determinazione del flesso è legata alla [determinazione della concavità della curva](cgfa.html).

In pratica basta calcolare la derivata seconda e porla uguale a zero. Se nei punti in cui si annulla la derivata seconda la derivata terza è diversa da zero avrai un punto di flesso. Successivamente puoi determinare con lo studio della derivata seconda se la concavità è verso l'alto o verso il basso per tracciare la curva.

Facciamo un esempio semplice: troviamo gli eventuali flessi della funzione
$$
\textcolor{red}{y = x^3 - 3x^2 + 4}
$$

Calcolo la derivata prima:
$$
\textcolor{red}{y' = 3x^2 - 6x}
$$

Calcolo la derivata seconda:
$$
\textcolor{red}{y'' = 6x - 6}
$$

Pongo la derivata seconda uguale a zero:
$$
\textcolor{red}{6x - 6 = 0}
$$
$$
\textcolor{red}{6x = 6}
$$
$$
\textcolor{red}{x = 1}
$$

Calcolo le coordinate del punto sostituendo $1$ alla $x$ nella funzione di partenza:
$$
\textcolor{red}{f(1) = 1^3 - 3 \cdot 1^2 + 4 = 1 - 3 + 4 = 2}
$$

Il punto $F(1, 2)$ è un probabile punto di flesso. Per vedere se è un flesso calcolo la derivata terza:
$$
\textcolor{red}{y''' = 6}
$$
si tratta di un flesso.

Posso inoltre calcolare la tangente di flesso con la formula:
$$
\textcolor{red}{y - y_0 = m(x - x_0)}
$$
essendo $x_0$ ed $y_0$ le coordinate del punto di flesso $F(1, 2)$ ed $m$ il valore della derivata prima nel punto:
$$
\textcolor{red}{y - 2 = -3(x - 1)}
$$
$$
\textcolor{red}{y = -3x + 3 + 2}
$$
$$
\textcolor{red}{y = -3x + 5}
$$

Ora, per meglio determinare il punto di flesso, ne studio la concavità studiando il segno della derivata seconda:
$$
\textcolor{red}{y'' > 0}
$$
$$
\textcolor{red}{6x - 6 > 0}
$$
$$
\textcolor{red}{6x > 6}
$$
$$
\textcolor{red}{x > 1}
$$

Per $x < 1$ avremo la concavità verso il basso, mentre per $x > 1$ avremo la concavità verso l'alto (le proporzioni non sono troppo rispettate).

Se vuoi cimentarti con un [esempio](cgfb.html) un po' più complicato.