# Equivalenza anticlessidra-sfera

Mostriamo ora che vale sempre il teorema:

**Se prendo una semisfera ed un'anticlessidra di altezza pari al raggio $r$ della semisfera giacenti sullo stesso piano e le taglio con un piano parallelo alla base hanno sempre la stessa area.**

In parole povere, se taglio due fette tipo mortadella, allora le due fette hanno la stessa area.

Per mostrarlo basterà calcolare le due aree per un generico piano ad altezza $h$.

- Area della sezione di anticlessidra
  si tratta di una corona circolare di raggio maggiore $r$ e raggio minore $h$ (uguale all'altezza), quindi basterà fare la differenza fra il cerchio maggiore ed il cerchio minore:

  $$
  \text{Area corona circolare} = \text{Area cerchio maggiore} - \text{Area cerchio minore} = \pi r^2 - \pi h^2 = \pi (r^2 - h^2)
  $$

- Area della sezione della semisfera
  si tratta di un cerchio di raggio il segmento $\overline{DE}$.
  Quindi:

  $$
  \text{Area} = \pi \overline{DE}^2
  $$

  Devo trovare il valore di $\overline{DE}^2$; so che:
  $\overline{OD} = h$, $\overline{OE} = r$
  Posso calcolarne il valore applicando il teorema di Pitagora al triangolo $\text{ODE}$:

  $$
  \overline{OD}^2 + \overline{DE}^2 = \overline{OE}^2
  $$

  $$
  \overline{DE}^2 = \overline{OE}^2 - \overline{DO}^2 = r^2 - h^2
  $$

  In definitiva ottengo:

  $$
  \text{Area} = \pi \overline{DE}^2 = \pi (r^2 - h^2)
  $$

  che è identico al valore trovato per la corona circolare.

Come volevamo.