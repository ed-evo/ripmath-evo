# [esercizio]{.text-red}

## Esercizio 2

Data la famiglia di parabole
$$
y = (2-k)x^2 - kx + 2k - 2
$$
1) Se esistono i punti base della famiglia determinarne le coordinate
2) Scrivere l'equazione della retta $$r$$ appartenente alla famiglia
3) Determinare le parabole della famiglia per $$k=0$$ e per $$k=3$$
4) Mostrare che nessuna parabola della famiglia è tangente alla retta $$r$$
5) Riportare i risultati su un piano cartesiano

1. Se esistono i punti base della famiglia determinarne le coordinate

Separo i termini con il parametro da quelli senza parametro:
$$
y = (2-k)x^2 - kx + 2k - 2
$$
$$
y = 2x^2 - 2 - kx^2 - kx + 2k
$$
$$
y = 2x^2 - 2 + k(-x^2 - x + 2)
$$

Per trovare le ascisse dei punti base pongo uguale a zero l'espressione moltiplicata per il parametro:
$$
-x^2 - x + 2 = 0
$$
$$
x^2 + x - 2 = 0
$$

Effettuando il calcolo ottengo le soluzioni:
$$
x_1 = -2 \quad x_2 = 1
$$

Sostituisco i valori nell'equazione della famiglia:

per $$x_1 = -2$$:
$$
y = 2 \cdot (-2)^2 - 2 + k(0) = 2 \cdot 4 - 2 = 6
$$
per $$x_2 = 1$$:
$$
y = 2 \cdot (1)^2 - 2 + k(0) = 2 \cdot 1 - 2 = 0
$$

Quindi esistono due punti base le cui coordinate sono:
$$
A \equiv (-2; 6) \quad B \equiv (1; 0)
$$

2. Scrivere l'equazione della retta $$r$$ appartenente alla famiglia

Per trovare la retta dobbiamo trovare il valore di $$k$$ che elimina il termine $$x^2$$.
Quindi, presa l'equazione della famiglia:
$$
y = (2-k)x^2 - kx + 2k - 2
$$
pongo $$ (2-k)x^2 = 0 $$, cioè $$ 2-k = 0 $$ ed otteniamo $$ k = 2 $$.
Sostituendo $$2$$ al posto di $$k$$ nell'equazione della famiglia otteniamo:
$$
y = (2-2)x^2 - 2 \cdot x + 2 \cdot 2 - 2
$$
$$
y = -2x + 2
$$
È una retta passante per i due punti base della famiglia e viene anche chiamata parabola degenere del fascio.

3. Determinare le parabole della famiglia per $$k=0$$ e per $$k=3$$

> Sostituiamo a $$k$$ nell'equazione della famiglia i valori assegnati, troviamo le equazioni delle parabole corrispondenti.

Sostituisco $$k=0$$:
$$
y = (2-0)x^2 - 0 \cdot x + 2 \cdot 0 - 2
$$
ottengo:
$$
y = 2x^2 - 2
$$

> È una parabola con asse verticale, concavità verso l'alto, simmetrica rispetto all'asse delle ordinate, con vertice nel punto $$(0; -2)$$ e che taglia l'asse delle ascisse nei punti $$(-1; 0)$$ e $$(1; 0)$$ e l'asse delle ordinate nel punto $$(0; -2)$$.

Sostituisco $$k=3$$:
$$
y = (2-3)x^2 - 3 \cdot x + 2 \cdot 3 - 2
$$
ottengo:
$$
y = -x^2 - 3x + 4
$$

> È una parabola con asse verticale, concavità verso il basso, con asse di simmetria la retta $$x = -\frac{3}{2}$$, con vertice nel punto $$(-3/2; 25/4)$$ e che taglia l'asse delle ascisse nei punti $$(-4; 0)$$ e $$(1; 0)$$ e l'asse delle ordinate nel punto $$(0; +4)$$.

4. Mostrare che nessuna parabola della famiglia è tangente alla retta $$r$$

> Intuitivamente, essendo la retta $$r$$ la parabola degenere della famiglia anch'essa, come tutte le parabole passa per i punti base quindi ha sempre due intersezioni distinte con qualunque altra parabola della famiglia e, di conseguenza, non può essere tangente a nessuna. Per mostrarlo algebricamente invece facciamo il sistema fra la retta $$r$$ e l'equazione della famiglia, troviamo l'equazione risultante e vedremo che essa non dipende dal valore di $$k$$.

Faccio il sistema fra le equazioni della famiglia e della retta:

$$
\begin{cases} 
y = (2-k)x^2 - kx + 2k - 2 \\ 
y = -2x + 2 
\end{cases}
$$

Sostituisco:

$$
\begin{cases} 
-2x + 2 = (2-k)x^2 - kx + 2k - 2 \\ 
y = -2x + 2 
\end{cases}
$$

Calcolo:

$$
\begin{cases} 
(2-k)x^2 + 2x - kx + 2k - 2 - 2 = 0 \\ 
y = -2x + 2 
\end{cases}
$$

$$
\begin{cases} 
(2-k)x^2 + (2-k)x + 2k - 4 = 0 \\ 
y = -2x + 2 
\end{cases}
$$

Quindi abbiamo l'equazione risolvente:
$$
(2-k)x^2 + (2-k)x - 4 + 2k = 0
$$
o meglio:
$$
(2-k)x^2 + (2-k)x - 2(2-k) = 0
$$

Supponendo $$2-k \neq 0$$, cioè $$k \neq 2$$, posso semplificare ed ottengo:
$$
x^2 + x - 2 = 0
$$
Quindi l'equazione risolvente non dipende più da $$k$$ e quindi non è possibile porre il delta del sistema uguale a zero, cioè non è possibile avere la tangenza fra la retta e una parabola non degenere della famiglia.
Da notare che per $$k=2$$ ottengo la parabola degenere, cioè la retta $$r$$.

5. Riportare i risultati su un piano cartesiano