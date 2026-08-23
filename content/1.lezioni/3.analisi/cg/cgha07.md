Determinare i punti di massimo e minimo per la seguente funzione in tutto l'intervallo di definizione:

$$\textcolor{red}{y = 2\sin x + \cos 2x}$$

L'intervallo di definizione è tutto $$\mathbb{R}$$ ma essendo la funzione periodica di periodo $$2\pi$$ mi limiterò a cercare massimi e minimi nell'intervallo $$[0, 2\pi)$$

$$\textcolor{red}{\text{C.E.} = (-\infty, +\infty)}$$

Trovo la derivata prima e la pongo uguale a zero:

$$\textcolor{red}{y' = 2\cos x - 2\sin 2x}$$

Sviluppando $$\sin 2x$$:

$$\textcolor{red}{y' = 2\cos x - 4\sin x \cos x}$$
$$\textcolor{red}{y' = 2\cos x(1 - 2\sin x)}$$

Pongo la derivata uguale a zero:

$$\textcolor{red}{2\cos x(1 - 2\sin x) = 0}$$

La spezzo nelle due equazioni:

- $$\textcolor{red}{2\cos x = 0 \implies \cos x = 0 \implies x = \frac{\pi}{2} + k\pi}$$
- $$\textcolor{red}{(1 - 2\sin x) = 0 \implies 2\sin x = 1 \implies \sin x = \frac{1}{2} \implies x = \frac{\pi}{6} + 2k\pi, \quad x = \frac{5\pi}{6} + 2k\pi}$$

Nell'intervallo $$[0, 2\pi)$$ ho quindi i valori:
$$\textcolor{red}{\frac{\pi}{6}, \quad \frac{\pi}{2}, \quad \frac{5\pi}{6}, \quad \frac{3\pi}{2}}$$

Trovo i valori della $$y$$ corrispondente sostituendo i vari valori al posto di $$x$$ nell'equazione di partenza:

- $$\textcolor{red}{y(\frac{\pi}{6}) = 2\sin \frac{\pi}{6} + \cos \frac{2\pi}{6} = 2\sin \frac{\pi}{6} + \cos \frac{\pi}{3} = 2 \cdot \frac{1}{2} + \frac{1}{2} = \frac{3}{2} \implies A(\frac{\pi}{6}, \frac{3}{2})}$$
- $$\textcolor{red}{y(\frac{\pi}{2}) = 2\sin \frac{\pi}{2} + \cos \frac{2\pi}{2} = 2\sin \frac{\pi}{2} + \cos \pi = 2 \cdot 1 - 1 = 1 \implies B(\frac{\pi}{2}, 1)}$$
- $$\textcolor{red}{y(\frac{5\pi}{6}) = 2\sin \frac{5\pi}{6} + \cos \frac{10\pi}{6} = 2\sin \frac{5\pi}{6} + \cos \frac{5\pi}{3} = 2 \cdot \frac{1}{2} + \frac{1}{2} = \frac{3}{2} \implies C(\frac{5\pi}{6}, \frac{3}{2})}$$
- $$\textcolor{red}{y(\frac{3\pi}{2}) = 2\sin \frac{3\pi}{2} + \cos \frac{6\pi}{2} = 2\sin \frac{3\pi}{2} + \cos 3\pi = 2 \cdot (-1) + (-1) = -3 \implies D(\frac{3\pi}{2}, -3)}$$

Nei punti [A, B, C, D]{.text-red} potrei avere un massimo, un minimo o un flesso orizzontale. Per sapere se è un massimo, un minimo o un flesso conviene studiare la derivata prima. Pongo la derivata prima maggiore di zero:

$$\textcolor{red}{2\cos x(1 - 2\sin x) > 0}$$

Equivale a dire che esplicitando i due fattori e ponendoli maggiori di zero:

$$\textcolor{red}{2\cos x > 0}$$
$$\textcolor{red}{1 - 2\sin x > 0}$$

La funzione sarà positiva dove i due fattori hanno segni concordi.

> **Studio dei segni:**
> 
> $$2\cos x > 0 \implies 0 \xrightarrow{+} \frac{\pi}{2} \xrightarrow{-} \frac{3\pi}{2} \xrightarrow{+} 2\pi$$
> $$1 - 2\sin x > 0 \implies 0 \xrightarrow{+} \frac{\pi}{6} \xrightarrow{-} \frac{5\pi}{6} \xrightarrow{+} 2\pi$$
> 
> Segno di $$y'$$:
> $$0 \xrightarrow{+} \frac{\pi}{6} \xrightarrow{-} \frac{\pi}{2} \xrightarrow{+} \frac{5\pi}{6} \xrightarrow{-} \frac{3\pi}{2} \xrightarrow{+} 2\pi$$
> 
> Andamento di $$y$$:
> $$\text{Crescente} \rightarrow \text{Massimo (M)} \rightarrow \text{Decrescente} \rightarrow \text{minimo (m)} \rightarrow \text{Crescente} \rightarrow \text{Massimo (M)} \rightarrow \text{Decrescente} \rightarrow \text{minimo (m)} \rightarrow \text{Crescente}$$

Allora possiamo dire:

$$\textcolor{red}{A(\frac{\pi}{6} + 2k\pi, \frac{3}{2})} \text{ è un punto di Massimo}$$
$$\textcolor{red}{B(\frac{\pi}{2} + 2k\pi, 1)} \text{ è un punto di minimo}$$
$$\textcolor{red}{C(\frac{5\pi}{6} + 2k\pi, \frac{3}{2})} \text{ è un punto di Massimo}$$
$$\textcolor{red}{D(\frac{3\pi}{2} + 2k\pi, -3)} \text{ è un punto di minimo}$$