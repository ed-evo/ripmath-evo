# Problema di Snellius

Vediamo ora come è possibile determinare la distanza fra due punti $$B$$ e $$D$$ entrambe inaccessibili.

Come nel problema precedente, spostandoci da $$A$$ a $$B$$ possiamo considerare i triangoli $$ADC$$ ed $$ABC$$.

Di $$ADC$$ conosciamo:
- la misura di $$AC$$
- L'angolo $$DAC = \alpha_1$$
- L'angolo $$DCA = \gamma_1$$

quindi il triangolo è risolvibile e posso calcolare $$AD$$ (vedi pagina precedente):

$$
\textcolor{red}{AD = \frac{AC \sin \gamma_1}{\sin \delta}}
$$

Di $$ABC$$ conosciamo:
- la misura di $$AC$$
- L'angolo $$BAC = \alpha_2$$
- L'angolo $$BCA = \gamma_2$$

quindi il triangolo è risolvibile e posso calcolare $$AB$$ (vedi pagina precedente):

$$
\textcolor{red}{AB = \frac{AC \sin \gamma_2}{\sin \beta}}
$$

Se ora considero il triangolo $$ABD$$ conosco:

- la misura di $$AD$$:
  $$
  AD = \frac{AC \sin \gamma_1}{\sin \delta}
  $$
- la misura di $$AB$$:
  $$
  AB = \frac{AC \sin \gamma_2}{\sin \beta}
  $$
- L'angolo $$BAD$$ come differenza:
  $$\text{Angolo } BAD = \alpha_1 - \alpha_2$$

quindi il triangolo $$ABD$$ è risolvibile e posso calcolare $$BD$$ ad esempio con Carnot:

$$
\textcolor{red}{BD = \sqrt{AB^2 + AD^2 - 2 \cdot AB \cdot AD \cos(\alpha_1 - \alpha_2)}}
$$

***

## Esercizio

supponiamo di spostarci dal punto $$A$$ di $$20\text{ metri}$$
$$AC = 20\text{ m}$$
calcolo gli angoli (con il teodolite)

> **Nota:** questo è un esercizio teorico e quindi considero numeri semplici: se calcoli effettivamente gli angoli nella realtà troverai anche primi e secondi e quindi i calcoli saranno molto più complicati

$$CAD = \alpha_1 = 100^\circ$$
$$CDA = \gamma_1 = 50^\circ$$
e quindi per differenza
$$\delta = ADC = 180^\circ - 100^\circ - 50^\circ = 40^\circ$$

inoltre
$$BAC = \alpha_2 = 60^\circ$$
$$BCA = \gamma_2 = 70^\circ$$
e quindi per differenza
$$\beta = ABC = 180^\circ - 60^\circ - 70^\circ = 50^\circ$$

troviamo

$$
AD = \frac{20 \sin 50^\circ}{\sin 40^\circ} = \frac{20 \cdot 0,77}{0,64} = 24,06\text{ m}
$$

$$
AB = \frac{20 \sin 70^\circ}{\sin 50^\circ} = \frac{20 \cdot 0,94}{0,77} = 24,42\text{ m}
$$

Essendo l'angolo $$BAD = \alpha_1 - \alpha_2 = 100^\circ - 60^\circ = 40^\circ$$ avremo:

$$
\textcolor{red}{BD = \sqrt{24,42^2 + 24,06^2 - 2 \cdot 24,42 \cdot 24,06 \cos 40^\circ} = 15\text{ m}}
$$

(Naturalmente è calcolato dalla calcolatrice)