# Area della superficie del fuso sferico

Per calcolare l'area della superficie del fuso sferico ci riferiamo allo stesso ragionamento fatto in geometria piana per calcolare l'area di un settore circolare.

Prendiamo come unità di misura un fuso di un grado: sappiamo che la superficie sferica è composta di $$360$$ fusi di questo genere, quindi, conoscendo l'area della superficie della sfera $$A_{\text{sup sfera}}$$ e l'angolo $$\alpha$$ che ci dà l'ampiezza in gradi del fuso sferico (angolo diedro formato dai due semicerchi generatori) potremo impostare la proporzione:

$$
A_{\text{sup sfera}} : 360^\circ = A_{\text{sup fuso}} : \alpha
$$

e quindi, risolvendo la proporzione, posso ricavare la formula:

$$
A_{\text{sup fuso}} = \frac{A_{\text{sup sfera}} \cdot \alpha^\circ}{360^\circ}
$$

quindi, ricordando che l'area della superficie di una sfera è $$4 \pi r^2$$, posso scrivere:

$$
A_{\text{sup fuso}} = \frac{4 \pi r^2 \cdot \alpha^\circ}{360^\circ}
$$

e, semplificando numeratore e denominatore, ottengo:

> **Area della superficie del fuso sferico**
> $$
> \frac{\pi r^2 \cdot \alpha^\circ}{90^\circ}
> $$

***

Come esercizio calcoliamo la superficie di un fuso orario terrestre (supponendo la terra sferica) sapendo che il raggio medio della terra vale $$6371\text{ Km}$$ e che un fuso orario ha ampiezza di $$15^\circ$$.

Calcolo prima la superficie della terra:

$$
A_{\text{sup terra}} = 4 \pi r^2 = 4\pi (6371\text{ Km})^2 = 162.358.564 \pi \text{ Km}^2 \cong 509.805.891 \text{ Km}^2
$$

imposto la proporzione:

$$
A_{\text{sup terra}} : 360^\circ = A_{\text{sup fuso}} : \alpha
$$

$$
509.805.891 \text{ Km}^2 : 360^\circ = A_{\text{sup fuso}} : 15^\circ
$$

$$
A_{\text{sup fuso}} = \frac{509.805.891 \text{ Km}^2 \cdot 15^\circ}{360^\circ} \cong 21.241.912 \text{ Km}^2
$$