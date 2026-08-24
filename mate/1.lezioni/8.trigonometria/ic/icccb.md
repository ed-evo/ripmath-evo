# esercizio

risolvere l'equazione:

$$
\textcolor{blue}{\sin x - \cos x = 2 \cos^2 x - \sin 2x}
$$

Abbiamo l'angolo $$x$$ e l'angolo $$2x$$; riduciamo allo stesso angolo $$x$$ (formule di duplicazione)

$$
\textcolor{red}{\sin x - \cos x = 2 \cos^2 x - 2 \sin x \cos x}
$$

portiamo tutto prima dell'uguale

$$
\textcolor{red}{\sin x - \cos x - 2 \cos^2 x + 2 \sin x \cos x = 0}
$$

sono $$4$$ termini: è un raccoglimento parziale: raccolgo $$\textcolor{red}{\sin x}$$ fra il primo ed il quarto e $$\textcolor{red}{-\cos x}$$ fra il secondo ed il terzo

$$
\textcolor{red}{\sin x (1 + 2 \cos x) - \cos x (1 + 2 \cos x) = 0}
$$

ora raccolgo la parentesi

$$
\textcolor{red}{(1 + 2 \cos x) (\sin x - \cos x) = 0}
$$

> **Nota:** come nell'altro esercizio se ti è difficile scomporre con $$\sin x$$ e $$\cos x$$ sostituiamo delle lettere e scomponiamo:
> $$\textcolor{red}{\sin x = a}$$
> $$\textcolor{red}{\cos x = b}$$
> otteniamo
> $$\textcolor{red}{a - b - 2b^2 + 2ab = 0}$$
> raccolgo $$\textcolor{red}{a}$$ fra il primo ed il quarto e $$\textcolor{red}{-b}$$ fra il secondo ed il terzo termine
> $$\textcolor{red}{a(1 + 2b) - b(1 + 2b) = 0}$$
> $$\textcolor{red}{(1 + 2b) (a - b) = 0}$$

poniamo ora uguali a zero entrambi i fattori: devo risolvere le due equazioni

- $$
\textcolor{red}{1 + 2 \cos x = 0}
$$
- $$
\textcolor{red}{\sin x - \cos x = 0}
$$

- risolvo la prima
$$
\textcolor{red}{1 + 2\cos x = 0}
$$
ricavo $$\cos x$$
$$
\textcolor{red}{2\cos x = -1}
$$
$$
\textcolor{red}{\cos x = - \frac{1}{2}}
$$
so che il coseno vale $$-1/2$$ per l'angolo di $$\pm 120^\circ$$, quindi
$$
\textcolor{blue}{x = \pm 120^\circ + k 360^\circ}
$$

- risolvo la seconda
$$
\textcolor{red}{\sin x - \cos x = 0}
$$
è un'equazione lineare omogenea dividiamo per $$\cos x$$

$$
\textcolor{red}{\frac{\sin x}{\cos x} - \frac{\cos x}{\cos x} = \frac{0}{\cos x}}
$$

Ricordando che seno fratto coseno vale tangente

$$
\textcolor{red}{\tan x - 1 = 0}
$$

$$
\textcolor{red}{\tan x = 1}
$$
so che la tangente vale $$1$$ per l'angolo di $$45^\circ$$ quindi posso scrivere

$$
\textcolor{blue}{x = 45^\circ + k 180^\circ}
$$

> **Controllo:** controllo che $$\cos x = 0$$ non sia soluzione: $$\cos x = 0$$ corrisponde a $$x = 90^\circ$$, sostituisco nell'equazione:
> $$
> \textcolor{red}{\sin 90^\circ - \cos 90^\circ = 0}
> $$
> $$
> \textcolor{red}{1 + 0 = 0}
> $$
> impossibile

Raccogliendo ho quindi le soluzioni

$$
\textcolor{blue}{x = 45^\circ + k 180^\circ}
$$
$$
\textcolor{blue}{x = \pm 120^\circ + k 360^\circ}
$$