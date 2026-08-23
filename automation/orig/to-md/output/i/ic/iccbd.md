# Equazioni in seno e coseno di secondo grado lineari non omogenee

Per risolvere equazioni di questo genere basta ricordare la [prima relazione fondamentale](../ib/ibca.html): 
prenderemo il termine noto e lo moltiplicheremo per [$$\sin^2 x + \cos^2 x$]{.text-blue} in questo modo l'equazione si trasforma in omogenea e la risolviamo come nella pagina precedente.

Un esempio chiarirà meglio il concetto.

***

Risolvere l'equazione:

[$$2 \sin x \cos x - \sin^2 x - \cos^2 x = -2$]{.text-blue}

moltiplico il termine noto per $$\sin^2 x + \cos^2 x$$

[$$2 \sin x \cos x - \sin^2 x - \cos^2 x = -2(\sin^2 x + \cos^2 x)$$]{.text-red}
[$$2 \sin x \cos x - \sin^2 x - \cos^2 x = -2\sin^2 x - 2\cos^2 x$]{.text-red}

porto tutti i termini prima dell'uguale:

[$$2 \sin x \cos x - \sin^2 x - \cos^2 x + 2\sin^2 x + 2\cos^2 x = 0$]{.text-red}

sommo i termini simili ed ordino rispetto a $$\sin x$$:

[$$\sin^2 x + 2 \sin x \cos x + \cos^2 x = 0$]{.text-red}

divido ogni termine per $$\cos^2 x$$ supponendo [$$\cos x \neq 0$]{.text-red}

$$
\frac{\sin^2 x}{\cos^2 x} + \frac{2 \sin x \cos x}{\cos^2 x} + \frac{\cos^2 x}{\cos^2 x} = \frac{0}{\cos^2 x}
$$

Applico la [seconda relazione fondamentale](../ib/ibcb.html):

[$$\tan^2 x + 2 \tan x + 1 = 0$]{.text-red}

È un'equazione di secondo grado nell'incognita $$\tan x$$: applico la [formula risolutiva](../../a/af/afcc.html).

***

> veramente, se l'osservi bene si può risolvere in modo [più semplice](iccbda.html)

$$
\tan x = \frac{-2 \pm \sqrt{4 - 4}}{2}
$$

> potevamo usare la [formula ridotta](iccbdb.html)

otteniamo:

[$$\tan x = -1$]{.text-red}

Il valore dell'angolo corrispondente a $$\tan x = 1$$ è $$45^\circ$$.
Quindi abbiamo:

[$$x = -45^\circ + k 180^\circ$]{.text-red}

o preferibilmente:

[$$x = -\frac{\pi}{4} + k\pi$]{.text-red}

Non è finita!
Siccome ho supposto [$$\cos x \neq 0$]{.text-red} devo controllare se la soluzione $$\cos x = 0$$ soddisfa l'equazione di partenza: siccome $$\cos x = 0$$ si ottiene nel primo giro per gli angoli $$90^\circ$$ e $$270^\circ$$ devo controllare i valori dell'equazione:

[$$2 \sin x \cos x - \sin^2 x - \cos^2 x = -2$]{.text-blue}

a $$90^\circ$$ ed a $$270^\circ$$:

- Controllo per $$x = 90^\circ$$ (se vuoi essere preciso usa $$\pi/2$$):
  [$$2 \sin 90^\circ \cos 90^\circ - \sin^2 90^\circ - \cos^2 90^\circ = -2$$]{.text-red}
  [$$-1 = 2$$]{.text-red} $\quad$ $$x = 90^\circ$$ non è soluzione
- Controllo per $$x = 270^\circ$$ (se vuoi essere preciso usa $$3\pi/2$$):
  [$$2 \sin 270^\circ \cos 270^\circ - \sin^2 270^\circ - \cos^2 270^\circ = -2$$]{.text-red}
  [$$-1 = 2$$]{.text-red} $\quad$ $$x = 270^\circ$$ non è soluzione

Quindi la soluzione finale è:

[$$x = -45^\circ + k 180^\circ$]{.text-blue}

oppure (utilizzando il primo angolo dall'origine degli angoli):

$$x = 135^\circ + k 180^\circ$$

o meglio:

[$$x = \frac{3\pi}{4} + k\pi$]{.text-blue}