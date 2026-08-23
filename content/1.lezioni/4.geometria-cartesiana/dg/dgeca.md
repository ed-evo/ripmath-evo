# [Esercizio]{.text-red}

[Data la parabola $$y = -x^2 + 6x - 5$$, indicate con $$A$$ e $$B$$ le intersezioni fra la retta $$y = k$$ e la parabola e con $$A'$$ e $$B'$$ le proiezioni di $$A$$ e $$B$$ sull'asse delle $$x$$, determinare il valore di $$k$$ perché il perimetro del rettangolo $$AA'B'B$$ abbia valore $$10$$ unità del piano.]{.text-blue}

> **Nota:** Il metodo generale per risolvere questi problemi è quello di procedere come se al posto del parametro ci fosse un numero qualunque: una volta trovato il dato che viene posto come condizione si uguaglia tale dato con quello fornito dal problema: si ottiene un'equazione che, risolta, ci dà il valore del parametro cercato. A destra la rappresentazione grafica che in questi casi è molto utile.

In questo caso il dato è il perimetro del rettangolo $$AA'B'B$$. Per trovare il perimetro devo trovare le misure dei lati, quindi devo trovare le coordinate delle intersezioni fra la retta $$y = k$$ e la parabola $$y = -x^2 + 6x - 5$$.

Faccio il sistema fra la retta e la parabola:

$$
\begin{cases}
\textcolor{red}{y = -x^2 + 6x - 5} \\
\textcolor{red}{y = k}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{k = -x^2 + 6x - 5} \\
\textcolor{red}{y = k}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{x^2 - 6x + 5 + k = 0} \\
\textcolor{red}{--------}
\end{cases}
$$

Risolvo l'equazione di secondo grado ed ottengo:

$$\textcolor{red}{x = 3 + \sqrt{4-k}}$$ 
$$\textcolor{red}{x = 3 - \sqrt{4-k}}$$

> **Nota:** Da notare che per la realtà della radice il valore di $$k$$ deve essere minore di $$4$$ come vedi anche dalla figura: per valori maggiori di $$4$$ la retta passa sopra la parabola senza tagliarla.

Quindi avremo, ricordando che $$A'$$ e $$B'$$ hanno la stessa $$x$$ di $$A$$ e $$B$$ e che $$A$$ si trova più a sinistra e quindi vi assoceremo il valore con il meno davanti alla radice:

$$\textcolor{red}{A = (3 - \sqrt{4-k}, k)}$$
$$\textcolor{red}{B = (3 + \sqrt{4-k}, k)}$$
$$\textcolor{red}{A' = (3 - \sqrt{4-k}, 0)}$$
$$\textcolor{red}{B' = (3 + \sqrt{4-k}, 0)}$$

Quindi avremo (per la misura dei segmenti, essendo orizzontali o verticali, basta fare la differenza fra le coordinate omonime di valore diverso):

$$\textcolor{red}{AA' = k - 0 = k}$$

$$\textcolor{red}{A'B' = 3 + \sqrt{4-k} - [3 - \sqrt{4-k}] =}$$
$$\textcolor{red}{= 3 + \sqrt{4-k} - 3 + \sqrt{4-k} = 2\sqrt{4-k}}$$

Di conseguenza il perimetro del rettangolo $$AA'BB'$$ sarà:

$$\textcolor{red}{2 AA' + 2 A'B' = 2k + 4\sqrt{4-k}}$$

Ora devo uguagliare i valori del perimetro trovato con i valori dati:

$$\textcolor{red}{2k + 4\sqrt{4-k} = 10}$$

Per renderla più semplice divido tutti i termini per $$2$$:

$$\textcolor{red}{k + 2\sqrt{4-k} = 5}$$

È un'equazione irrazionale, devo isolare la radice ed elevare al quadrato:

$$\textcolor{red}{2\sqrt{4-k} = 5 - k}$$

$$\textcolor{red}{4(\sqrt{4-k})^2 = (5 - k)^2}$$

$$\textcolor{red}{4(4 - k) = 25 - 10k + k^2}$$

$$\textcolor{red}{16 - 4k = k^2 - 10k + 25}$$

$$\textcolor{red}{k^2 - 10k + 25 + 4k - 16 = 0}$$

$$\textcolor{red}{k^2 - 6k + 9 = 0}$$

Risolvo ed ottengo:

$$\textcolor{red}{k = 3}$$ soluzione doppia

> **Verifica:** Devo vedere se la soluzione è accettabile: sostituisco il valore $$3$$ all'equazione di partenza:
> 
> $$\textcolor{red}{3 + 2\sqrt{4-3} = 5}$$
> $$\textcolor{red}{3 + 2 = 5}$$
> $$\textcolor{red}{5 = 5}$$
> la soluzione $$k = 3$$ è accettabile.

[Quindi avremo che il rettangolo ha perimetro 10 quando il valore di $$k$$ è $$3$$.]{.text-blue}