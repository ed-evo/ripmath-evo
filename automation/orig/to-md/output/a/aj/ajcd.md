# [Esempi di calcolo di un determinante utilizzandone le proprietà]{.text-red}

Vediamo come è possibile, utilizzando le regole della pagina precedente, trasformare un determinante in un altro con lo stesso valore ma con una riga (colonna) che abbia alcuni elementi nulli; in questo modo mi conviene sviluppare il determinante secondo quella riga (colonna).

***

Calcolare il valore del determinante

$$
\textcolor{red}{\begin{vmatrix}
1 & 2 & 3 & 4 \\
2 & 1 & 2 & 3 \\
3 & 2 & 1 & 2 \\
4 & 3 & 2 & 1
\end{vmatrix}}
$$

dalla seconda colonna sottraggo la quarta colonna. Ottengo

$$
\textcolor{red}{\begin{vmatrix}
1 & -2 & 3 & 4 \\
2 & -2 & 2 & 3 \\
3 & 0 & 1 & 2 \\
4 & 2 & 2 & 1
\end{vmatrix}}
$$

adesso alla prima riga sommo l'ultima riga. Ottengo

$$
\textcolor{red}{\begin{vmatrix}
5 & 0 & 5 & 5 \\
2 & -2 & 2 & 3 \\
3 & 0 & 1 & 2 \\
4 & 2 & 2 & 1
\end{vmatrix}}
$$

Ora alla seconda riga sommo l'ultima riga ed ottengo un determinante con una colonna di tutti zeri meno un termine

$$
\textcolor{red}{\begin{vmatrix}
5 & 0 & 5 & 5 \\
6 & 0 & 4 & 4 \\
3 & 0 & 1 & 2 \\
4 & 2 & 2 & 1
\end{vmatrix}}
$$

ora sviluppo secondo la seconda colonna

$$
\textcolor{red}{\begin{vmatrix}
5 & 0 & 5 & 5 \\
6 & 0 & 4 & 4 \\
3 & 0 & 1 & 2 \\
4 & 2 & 2 & 1
\end{vmatrix} = + 2 \cdot \begin{vmatrix}
5 & 5 & 5 \\
6 & 4 & 4 \\
3 & 1 & 2
\end{vmatrix}}
$$

> **Nota:** Ho messo il segno più perché il $$2$$ ha posto $$_{4,2}$$ (quarta riga seconda colonna) quindi posto pari.

***

Ora dovremmo sviluppare: nei determinanti di ordine $$3$$ di solito non conviene semplificare, conviene calcolare immediatamente o con il [metodo di Sarrus](../ai/aibbbd.html) o con il metodo normale.
Comunque essendo questo un esercizio procediamo a semplificare.

***

Dalla seconda riga [sottraggo la terza moltiplicata per $$2$$](ajcda.html), poi sviluppo lungo la seconda riga ed ottengo

$$
\textcolor{red}{\begin{vmatrix}
5 & 0 & 5 & 5 \\
6 & 0 & 4 & 4 \\
3 & 0 & 1 & 2 \\
4 & 2 & 2 & 1
\end{vmatrix} = + 2 \cdot \begin{vmatrix}
5 & 5 & 5 \\
6 & 4 & 4 \\
3 & 1 & 2
\end{vmatrix} = + 2 \cdot \begin{vmatrix}
5 & 5 & 5 \\
0 & 2 & 0 \\
3 & 1 & 2
\end{vmatrix} = + 2 \cdot (+ 2 \cdot \begin{vmatrix}
5 & 5 \\
3 & 2
\end{vmatrix})}
$$

> **Nota:** Ho messo il segno più perché il $$2$$ ha posto $$_{2,2}$$ (seconda riga seconda colonna) quindi posto pari.
> Potevo anche sottrarre la terza colonna dalla seconda, come vedi ci sono tante possibilità; un buon numero di esercizi ti consentirà di trovare sempre la strada migliore.

$$
\textcolor{red}{= 2 [ 2(10-15)] = 2[2(-5)] = -20}
$$

***

aggiungere altri esercizi (in futuro)