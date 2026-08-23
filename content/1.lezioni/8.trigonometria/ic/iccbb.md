# Equazioni in seno e coseno di primo grado lineari non omogenee

Stavolta non possiamo dividere per $$\cos x$$ perché c'è un termine noto: per risolvere un'equazione di questo genere si usano le formule parametriche.

$$
\textcolor{blue}{\sin \alpha = \frac{2t}{1 + t^2}} \quad \textcolor{blue}{\cos \alpha = \frac{1 - t^2}{1 + t^2}}
$$

Sostituendo a $$\sin x$$ e $$\cos x$$ le espressioni riportate si ottiene un'equazione di secondo grado in $$t$$ ($$\tan \frac{x}{2}$$) che è possibile risolvere.

> Anche se abbiamo un'equazione fratta non abbiamo bisogno di condizioni di realtà perché il denominatore $$1 + t^2$$ è certamente positivo come somma di due quadrati.

Vediamo un esempio: risolvere l'equazione [$$\sin x + \cos x = 1$${.text-blue}]

Sostituisco
$$
\textcolor{red}{\frac{2t}{1 + t^2} + \frac{1 - t^2}{1 + t^2} = 1}
$$

Faccio il minimo comune multiplo
$$
\textcolor{red}{\frac{2t + 1 - t^2}{1 + t^2} = \frac{1 + t^2}{1 + t^2}}
$$

Elimino i denominatori e porto prima dell'uguale
$$
\textcolor{red}{2t + 1 - t^2 - 1 - t^2 = 0}
$$
$$
\textcolor{red}{-2t^2 + 2t = 0}
$$

Divido per $$-2$$
$$
\textcolor{red}{t^2 - t = 0}
$$

Equazione di secondo grado spuria
$$
\textcolor{red}{t(t - 1) = 0}
$$

Ho le due equazioni
- $$\textcolor{red}{t = 0}$$
- $$\textcolor{red}{t - 1 = 0}$$

E le due soluzioni
- $$\textcolor{red}{t = 0}$$
- $$\textcolor{red}{t = 1}$$

Ora sono equazioni di tipo fondamentale
- Risolvo la prima
  $$
  \textcolor{red}{\tan \frac{x}{2} = 0}
  $$
  L'angolo la cui tangente è $$0$$ è $$0^\circ$$
  $$
  \textcolor{red}{\frac{x}{2} = 0^\circ + k 180^\circ}
  $$
  Quindi siccome devo trovare $$x$$
  $$
  \textcolor{red}{x = 0^\circ + k 360^\circ}
  $$

- Risolvo la seconda
  $$
  \textcolor{red}{\tan \frac{x}{2} = 1}
  $$
  L'angolo la cui tangente è $$1$$ è $$45^\circ$$
  $$
  \textcolor{red}{\frac{x}{2} = 45^\circ + k 180^\circ}
  $$
  Quindi siccome devo trovare $$x$$
  $$
  \textcolor{red}{x = 90^\circ + k 360^\circ}
  $$

Ho quindi le soluzioni [$$x = 0^\circ + k 360^\circ \quad x = 90^\circ + k 360^\circ$${.text-blue}]
o meglio
[$$x = 0 + 2k\pi \quad x = \frac{\pi}{2} + 2k\pi$${.text-blue}]