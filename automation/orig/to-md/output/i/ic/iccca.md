# [esercizio]{.text-red}

Risolvere l'equazione

$$
\text{sen } 4x = \cos 2x
$$

Il primo angolo è $4x$, il secondo è $2x$; riduciamo tutto a $2x$ (formule di [duplicazione](icabd.html)).

$$
\textcolor{red}{2 \text{ sen } 2x \cos 2x = \cos 2x}
$$

Portiamo tutto prima dell'uguale:

$$
\textcolor{red}{2 \text{ sen } 2x \cos 2x - \cos 2x = 0}
$$

Raccogliamo $\cos 2x$ a fattor comune:

$$
\textcolor{red}{\cos 2x (2 \text{ sen } 2x - 1) = 0}
$$

> **Nota:** Spesso i miei alunni mi dicono che per loro è difficile fare le scomposizioni con seno e coseno; il mio consiglio è quello di sostituire $\text{sen } x$ e $\cos x$ con due lettere, ad esempio $a$ e $b$ e scomporre.
> Nel nostro caso poniamo:
> $\textcolor{red}{\text{sen } 2x = a}$
> $\textcolor{red}{\cos 2x = b}$
> Otteniamo:
> $\textcolor{red}{2ab - b = 0}$
> Scompongo raccogliendo a fattor comune:
> $\textcolor{red}{b(2a - 1) = 0}$
> Man mano che si acquisirà dimestichezza con i calcoli non sarà più necessario operare lo scambio.

Poniamo ora uguali a zero entrambi i fattori: devo risolvere le due equazioni:

- [$\cos 2x = 0$]{.text-red}
- [$2 \text{ sen } 2x - 1 = 0$]{.text-red}

- Risolvo la prima:
  [$\cos 2x = 0$]{.text-red}
  So che il coseno vale zero per l'angolo di $\pm 90^\circ$, quindi:
  [$2x = \pm 90^\circ + k 360^\circ$]{.text-red}
  Però io cerco l'angolo $x$ e quindi dividiamo per $2$:
  [$x = \pm 45^\circ + k 180^\circ$]{.text-blue}

- Risolvo la seconda:
  [$2 \text{ sen } 2x - 1 = 0$]{.text-red}
  Ricavo $\text{sen } 2x$:
  [$2 \text{ sen } 2x = 1$]{.text-red}
  [$\text{sen } 2x = 1/2$]{.text-red}
  So che il seno vale $1/2$ per gli angoli $30^\circ$ e $150^\circ$, quindi posso scrivere:
  - [$2x = 30^\circ + k 360^\circ$]{.text-red}
  - [$2x = 150^\circ + k 360^\circ$]{.text-red}
  Però io cerco l'angolo $x$ e quindi dividiamo per $2$:
  - [$x = 15^\circ + k 180^\circ$]{.text-blue}
  - [$x = 75^\circ + k 180^\circ$]{.text-blue}

Raccogliendo ho quindi le soluzioni:
[$x = 15^\circ + k 180^\circ$]{.text-blue}
[$x = \pm 45^\circ + k 180^\circ$]{.text-blue}
[$x = 75^\circ + k 180^\circ$]{.text-blue}

O meglio, ordinando le soluzioni e ricordando che $180 - 45 = 135$ per togliere il $\pm$:
[$x = 15^\circ + k 180^\circ$]{.text-blue}
[$x = 45^\circ + k 180^\circ$]{.text-blue}
[$x = 75^\circ + k 180^\circ$]{.text-blue}
[$x = 135^\circ + k 180^\circ$]{.text-blue}