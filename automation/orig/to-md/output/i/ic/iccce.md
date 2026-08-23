# [esercizio]{.text-red-darken-1}

Risolvere l'equazione:

$$\textcolor{blue}{\sin 3x \cos 5x = \sin 2x \cos 6x}$$

Abbiamo gli angoli $$3x$$, $$5x$$, $$2x$$ e $$6x$$; non è il caso di ridurre allo stesso angolo; utilizziamo le formule di [Werner](icafe.html).

Scriviamo prima le funzioni con gli angoli maggiori (dovendo fare la sottrazione):

$$\textcolor{red}{\cos 5x \sin 3x = \cos 6x \sin 2x}$$

Applico ora la seconda formula ed ottengo:

$$
\textcolor{red}{\frac{\sin(5x+3x) - \sin(5x-3x)}{2} = \frac{\sin(6x+2x) - \sin(6x-2x)}{2}}
$$

Sommo ai numeratori e tolgo i denominatori:

$$\textcolor{red}{\sin 8x - \sin 2x = \sin 8x - \sin 4x}$$

Porto prima dell'uguale:

$$\textcolor{red}{\sin 8x - \sin 2x - \sin 8x + \sin 4x = 0}$$

Sommo ed ordino:

$$\textcolor{red}{\sin 4x - \sin 2x = 0}$$

Il primo angolo è $$4x$$, il secondo è $$2x$$; riduciamo tutto a $$2x$$ (formule di [duplicazione](icabd.html)):

$$\textcolor{red}{2 \sin 2x \cos 2x - \sin 2x = 0}$$

Raccogliamo $$\sin 2x$$ a fattor comune:

$$\textcolor{red}{\sin 2x (2 \cos 2x - 1) = 0}$$

Poniamo ora uguali a zero entrambi i fattori: devo risolvere le due equazioni:

- $$\textcolor{red}{\sin 2x = 0}$$
- $$\textcolor{red}{2 \cos 2x - 1 = 0}$$

- Risolvo la prima:
  $$\textcolor{red}{\sin 2x = 0}$$
  so che il seno vale zero per l'angolo di $$0^\circ$$ e di $$180^\circ$$, quindi:
  $$\textcolor{red}{2x = 0^\circ + k \cdot 360^\circ}$$
  $$\textcolor{red}{2x = 180^\circ + k \cdot 360^\circ}$$
  però io cerco l'angolo $$x$$ e quindi dividiamo per $$2$$:
  $$\textcolor{blue}{x = 0^\circ + k \cdot 180^\circ}$$
  $$\textcolor{blue}{x = 90^\circ + k \cdot 180^\circ}$$

- Risolvo la seconda:
  $$\textcolor{red}{2 \cos 2x - 1 = 0}$$
  ricavo $$\cos 2x$$:
  $$\textcolor{red}{2 \cos 2x = 1}$$
  $$\textcolor{red}{\cos 2x = 1/2}$$
  so che il coseno vale $$1/2$$ per gli angoli $$\pm 60^\circ$$, quindi posso scrivere:
  $$\textcolor{red}{2x = \pm 60^\circ + k \cdot 360^\circ}$$
  però io cerco l'angolo $$x$$ e quindi dividiamo per $$2$$:
  $$\textcolor{blue}{x = \pm 30^\circ + k \cdot 180^\circ}$$

Raccogliendo ho quindi le soluzioni:
$$\textcolor{blue}{x = 0^\circ + k \cdot 180^\circ}$$
$$\textcolor{blue}{x = \pm 30^\circ + k \cdot 180^\circ}$$
$$\textcolor{blue}{x = 90^\circ + k \cdot 180^\circ}$$

O meglio, ordinando le soluzioni e ricordando che $$180 - 30 = 150$$ per togliere il $$\pm$$:
$$\textcolor{blue}{x = 0^\circ + k \cdot 180^\circ}$$
$$\textcolor{blue}{x = 30^\circ + k \cdot 180^\circ}$$
$$\textcolor{blue}{x = 90^\circ + k \cdot 180^\circ}$$
$$\textcolor{blue}{x = 150^\circ + k \cdot 180^\circ}$$