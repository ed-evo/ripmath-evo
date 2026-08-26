# Dividere il problema in sottoproblemi elementari

In geometria cartesiana la suddivisione del problema in sottoproblemi risolvibili con una sola formula è molto più evidente che in altre discipline: risolviamo passaggio per passaggio il problema dato.

[I punti $A(0,4)$, $B(-4,1)$, $C(-1,-3)$ siano tre vertici consecutivi di un parallelogramma. Trovare le coordinate del quarto vertice]{.text-blue}

- Equazione della retta passante per i due punti $A(0,4)$ e $B(-4,1)$
  $$
  \frac{y - y_1}{y_2 - y_1} = \frac{x - x_1}{x_2 - x_1}
  $$
  [$y = \frac{3}{4}x + 4$ (retta AB)]{.text-red} Calcoli

- Equazione della retta passante per i due punti $B(-4,1)$ e $C(-1,-3)$
  $$
  \frac{y - y_1}{y_2 - y_1} = \frac{x - x_1}{x_2 - x_1}
  $$
  [$y = -\frac{4}{3}x - \frac{13}{3}$ (retta BC)]{.text-red} Calcoli

- Equazione della retta parallela alla retta BC ($y = -\frac{4}{3}x - \frac{13}{3}$) passante per il punto $A(0,4)$
  $$
  y - y_1 = m_1(x - x_1)
  $$
  [$y = -\frac{4}{3}x + 4$ (parallela per A a BC)]{.text-red} Calcoli

- Equazione della retta parallela alla retta AB ($y = \frac{3}{4}x + 4$) passante per il punto $C(-1,-3)$
  $$
  y - y_1 = m_1(x - x_1)
  $$
  [$y = \frac{3}{4}x - \frac{9}{4}$ (parallela per C ad AB)]{.text-red} Calcoli

- Sistema fra le rette parallele individuate per trovare le coordinate del punto $D$
  $$
  \begin{cases} 
  y = \frac{3}{4}x - \frac{9}{4} \\ 
  y = -\frac{4}{3}x + 4 
  \end{cases}
  $$
  [$D(3,0)$]{.text-red} Calcoli

> Ogni problema si può ridurre, in pratica, ad una decina di problemi elementari