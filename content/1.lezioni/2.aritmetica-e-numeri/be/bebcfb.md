# [esercizio]{.text-red}

> Anche se è meno "professionale" io preferisco risolvere i problemi sugli angoli complessi usando i gradi invece dei radianti: mi sembrano più immediati, mentre sento i radianti più tecnici ed impersonali

Trovare le radici quarte del numero complesso

$$
\textcolor{red}{z = 16(\cos 120^\circ + i \sin 120^\circ)}
$$

applichiamo la formula

$$
\textcolor{red}{(\sqrt[4]{z})_k = \sqrt[4]{16} \left( \cos \frac{120^\circ + k 360^\circ}{4} + i \sin \frac{120^\circ + k 360^\circ}{4} \right)}
$$

[Con $$k = 0, 1, 2, 3$$]{.text-red}

chiamiamo le 4 radici $$w_0, w_1, w_2, w_3$$,

- per $$k=0$$ otteniamo la prima soluzione $$w_0$$
  $$
  \textcolor{red}{w_0 = 2(\cos 30^\circ + i \sin 30^\circ)}
  $$

- per $$k=1$$ otteniamo
  $$
  \textcolor{red}{w_1 = 2 \left( \cos \frac{120^\circ + 360^\circ}{4} + i \sin \frac{120^\circ + 360^\circ}{4} \right)}
  $$
  eseguendo i calcoli
  $$
  \textcolor{red}{w_1 = 2(\cos 120^\circ + i \sin 120^\circ)}
  $$

- per $$k=2$$ otteniamo
  $$
  \textcolor{red}{w_2 = 2 \left( \cos \frac{120^\circ + 720^\circ}{4} + i \sin \frac{120^\circ + 720^\circ}{4} \right)}
  $$
  eseguendo i calcoli
  $$
  \textcolor{red}{w_2 = 2(\cos 210^\circ + i \sin 210^\circ)}
  $$

- per $$k=3$$ otteniamo
  $$
  \textcolor{red}{w_3 = 2 \left( \cos \frac{120^\circ + 1080^\circ}{4} + i \sin \frac{120^\circ + 1080^\circ}{4} \right)}
  $$
  eseguendo i calcoli
  $$
  \textcolor{red}{w_3 = 2(\cos 300^\circ + i \sin 300^\circ)}
  $$

> con i gradi è semplice controllare se hai fatto errori: lo scarto fra gli angoli trovati è sempre costante e, se la radice è quarta, lo scarto è $$90^\circ$$ (perché l'angolo giro viene diviso in 4 parti) quindi se la prima radice è $$30^\circ$$ le altre saranno
> $$30^\circ + 90^\circ = 120^\circ$$
> $$120^\circ + 90^\circ = 210^\circ$$
> $$210^\circ + 90^\circ = 300^\circ$$
> con i radianti è lo stesso ma è più difficile accorgersene