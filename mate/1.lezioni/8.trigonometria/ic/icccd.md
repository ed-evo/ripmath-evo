# esercizio

risolvere l'equazione:

[$$\sqrt{3} (1 - \sin x \cos x) + 2 \sin x = \sin x \sin 2x$$]{.text-blue}

Abbiamo l'angolo $$x$$ e l'angolo $$2x$$; riduciamo allo stesso angolo $$x$$ (formule di duplicazione)

[$$\sqrt{3} (1 - \sin x \cos x) + 2 \sin x = \sin x (2 \sin x \cos x)$$]{.text-red}

[$$\sqrt{3} (1 - \sin x \cos x) + 2 \sin x = 2 \sin^2 x \cos x$$]{.text-red}

moltiplichiamo e portiamo tutto prima dell'uguale

[$$\sqrt{3} - \sqrt{3} \sin x \cos x + 2 \sin x - 2 \sin^2 x \cos x = 0$$]{.text-red}

sono 4 termini: è un raccoglimento parziale: raccolgo [$$\sqrt{3}$$]{.text-red} fra il primo ed il secondo e [$$2 \sin x$$]{.text-red} fra il terzo ed il quarto

[$$\sqrt{3} (1 - \sin x \cos x) + 2 \sin x (1 - \sin x \cos x) = 0$$]{.text-red}

ora raccolgo la parentesi

[$$(1 - \sin x \cos x) (\sqrt{3} + 2 \sin x) = 0$$]{.text-red}

> come negli altri esercizi se ti è difficile scomporre con $$\sin x$$ e $$\cos x$$ sostituiamo delle lettere e scomponiamo:
> poniamo [$$\sin x = a$$]{.text-red} [$$\cos x = b$$]{.text-red}
> otteniamo
> [$$\sqrt{3} - ab\sqrt{3} + 2a - 2a^2b$$]{.text-red}
> raccolgo [$$\sqrt{3}$$]{.text-red} fra il primo ed il secondo e [$$2a$$]{.text-red} fra il terzo ed il quarto termine
> [$$\sqrt{3}(1 - ab) + 2a(1 - ab) = 0$$]{.text-red}
> [$$(1 - ab) (\sqrt{3} + 2a) = 0$$]{.text-red}

poniamo ora uguali a zero entrambi i fattori: devo risolvere le due equazioni

- [$$1 - \sin x \cos x = 0$$]{.text-red}
- [$$\sqrt{3} + 2 \sin x = 0$$]{.text-red}

- risolvo la prima
  [$$1 - \sin x \cos x = 0$$]{.text-red}
  cambio segno
  [$$\sin x \cos x - 1 = 0$$]{.text-red}
  è un'equazione lineare non omogenea di secondo grado

  [$$\sin x \cos x - \sin^2 x - \cos^2 x = 0$$]{.text-red}
  divido tutti i termini per [$$-\cos^2 x$$]{.text-red} ottengo
  [$$-\tan x + \tan^2 x + 1 = 0$$]{.text-red}
  ordino
  [$$\tan^2 x - \tan x + 1 = 0$$]{.text-red}
  Per scomporre risolvo l'equazione di secondo grado:

  $$
  \tan x = \frac{1 \pm \sqrt{1-4}}{2}
  $$

  il termine sotto radice è minore di zero quindi nessuna soluzione

- risolvo la seconda
  [$$\sqrt{3} + 2 \sin x = 0$$]{.text-red}
  è un'equazione tipica: ricaviamo $$\sin x$$

  $$
  \sin x = \frac{-\sqrt{3}}{2}
  $$

  so che il seno è [$$\sqrt{3}/2$$]{.text-red} per l'angolo di $$60^\circ$$
  quindi avrà valore [$$-\sqrt{3}/2$$]{.text-red} per l'angolo $$240^\circ$$ (ho usato gli archi associati)
  ricordando poi che $$180^\circ - 240^\circ = - 60^\circ = 300^\circ$$ posso scrivere
  [$$x = 240^\circ + k 360^\circ$$]{.text-blue}
  [$$x = 300^\circ + k 360^\circ$$]{.text-blue}

Raccogliendo ho quindi le soluzioni
[$$x = 240^\circ + k 360^\circ$$]{.text-blue}
[$$x = 300^\circ + k 360^\circ$$]{.text-blue}