# Teorema dell'unicità del limite

Non meravigliatevi del fatto che questi teoremi sembrino una cosa ovvia: è dovuto al fatto che stiamo riscrivendo le regole di base.

Il teorema dell'unicità del limite dice che [il limite, quando esiste, è unico]{.text-purple}, cioè una funzione non può assumere al limite due valori diversi. (In pratica significa che stringendo l'intervallo l'intervallo stesso non si suddivide ma resta tutto unito anche quando diventa piccolissimo; cosa d'altra parte necessaria se vogliamo sostituire il concetto di intervallo al concetto di punto).

> **Dimostrazione intuitiva:** Per dimostrarlo basta ragionare per assurdo: supponiamo che non sia vero il risultato e mostriamo che non è vero il teorema. Se non fosse vero che abbiamo un solo valore ne avremmo due diversi, ma allora questi due valori sarebbero due punti ad una certa distanza; allora, se prendiamo $$\epsilon$$ minore di quella distanza, l'intervallo non potrà contenere entrambi i limiti e quindi non vale il concetto di limite.

In termini matematici sembra un po' più complicato, ma è la stessa cosa. Supponiamo esistano due limiti e dimostriamo che in tal caso non può esistere nessun limite.

I due limiti siano:

$$
\lim_{x \to x_0} f(x) = l_1
$$

$$
\lim_{x \to x_0} f(x) = l_2
$$

con $$l_1 < l_2$$

Essendo i due limiti diversi la loro differenza in modulo sarà la distanza:

$$
\text{distanza} = |l_1 - l_2|
$$

Ora pongo:

$$
\epsilon = \frac{|l_1 - l_2|}{2}
$$

[cioè scelgo $$\epsilon$$ uguale alla metà della distanza ed il gioco è fatto: ho creato una coperta troppo corta che non può coprire contemporaneamente i due limiti]{.text-pink}

Ora è impossibile avere contemporaneamente:

$$
|f(x) - l_1| < \epsilon
$$

$$
|f(x) - l_2| < \epsilon
$$

Perché l'intervallo $$\epsilon$$ non può coprire contemporaneamente $$l_1$$ ed $$l_2$$ in quanto la loro distanza è maggiore di $$\epsilon$$ ed allora non può esistere il limite. Come volevamo dimostrare.