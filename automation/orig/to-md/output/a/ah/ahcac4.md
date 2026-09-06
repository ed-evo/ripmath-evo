# <span class="text-red-600">Problema</span>

<span class="text-blue-600">In un triangolo isoscele la base è $6/5$ del lato e la somma dei $2/3$ della base e dei $4/5$ del lato è $32 \text{ cm}$.
Calcolare il perimetro e l'area</span>

Come problema è abbastanza semplice, basta ricordare che il triangolo isoscele ha $2$ lati uguali.

Scrivo i dati:
$$
BC = \frac{6}{5} AB
$$
$$
\frac{2}{3} BC + \frac{4}{5} AB = 32 \text{ cm}
$$
Ho due relazioni, una mi serve per mettere la $x$ e l'altra per risolvere il problema.

> Potrei anche risolvere il problema con un sistema, in questo caso basta sostituire $x$ e $y$ ai segmenti coinvolti nelle relazioni.

So che la base è $6/5$ del lato, allora se chiamo il lato $x$ la base sarà $6/5 x$:
$$
AB = x
$$
$$
BC = \frac{6}{5} x
$$
Sostituisco nella seconda relazione:
$$
\frac{2}{3} \cdot \left( \frac{6}{5} x \right) + \frac{4}{5} x = 32
$$

> Di solito, per semplicità, nei problemi grandezze quali metri o centimetri si mettono solo nelle condizioni iniziali e nei risultati, mentre nello sviluppo delle equazioni si trascurano. Invece non è possibile trascurare un parametro come ad esempio $\text{perimetro} = 4a$, in questo caso la $a$ deve essere presente in tutto lo sviluppo del problema.

Ora sviluppo l'equazione:
$$
\frac{2}{3} \cdot \frac{6}{5} x + \frac{4}{5} x = 32
$$

Se vuoi vedere tutti i [passaggi](ahcac4a.html):
$$
\frac{4}{5} x + \frac{4}{5} x = 32
$$

$m.c.m. = 5$
$$
\frac{4x + 4x}{5} = \frac{160}{5}
$$
$$
4x + 4x = 160
$$
$$
8x = 160
$$
$$
x = \frac{160}{8} = 20
$$

Quindi:
$\textcolor{blue}{AB = 20 \text{ cm}}$
$\textcolor{blue}{BC = \frac{6}{5} \cdot 20 \text{ cm} = 24 \text{ cm}}$

Il problema non è finito: devo trovare il perimetro e l'area.

Il perimetro è semplice da trovare perché essendo il triangolo isoscele conosco la misura dei tre lati:
$\textcolor{blue}{AB = AC = 20 \text{ cm}}$
$\textcolor{blue}{BC = 24 \text{ cm}}$

$\textcolor{blue}{\text{Perimetro} = AB + BC + AC = (20 + 24 + 20) \text{ cm} = 64 \text{ cm}}$

Per quanto riguarda l'area so che l'area di un triangolo è <span class="text-purple-600">base per altezza fratto due</span>, quindi devo trovare l'altezza $AH$.
Posso utilizzare il teorema di Pitagora sul triangolo $ABH$ per trovare $AH$.

Teorema di Pitagora:
$\textcolor{blue}{AB^2 = AH^2 + BH^2}$

[Ricavo AH](ahcac4b.html):
$\textcolor{blue}{AH^2 = AB^2 - BH^2}$

$\textcolor{blue}{AH = \sqrt{AB^2 - BH^2} = \sqrt{20^2 - 12^2} = \sqrt{400 - 144} = \sqrt{256} = 16 \text{ cm}}$

Quindi:
$\textcolor{blue}{\text{Area} = \frac{BC \cdot AH}{2} = \frac{24 \cdot 16}{2} = 192 \text{ cm}^2}$

> Senza scomodare il teorema di Pitagora si poteva usare in questo caso la terna pitagorica $3 - 4 - 5$.