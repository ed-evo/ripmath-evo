# [Costruzione di una progressione aritmetica dati due termini]{.text-red}

Vediamo, su un esempio, come procedere per costruire una progressione aritmetica conoscendone due termini.
Supponiamo di conoscere il terzo termine $$a_3 = 8$$ ed anche il settimo termine $$a_7 = 24$$.

Per ottenere il settimo termine partendo dal terzo devo aggiungere al terzo la ragione per $$4$$ volte ($$7-3$$), quindi, per ottenere la ragione basterà ragionare alla rovescia:
Cioè per ottenere la ragione sottraggo dal settimo termine il terzo e poi divido tale differenza per $$4$$.

$$
d = \frac{24 - 8}{4} = \frac{16}{4} = 4
$$

Quindi la ragione è $$4$$ e la mia progressione è:
$$0, 4, 8, 12, 16, 20, 24, 28, \dots$$

Adesso facciamo lo stesso ragionamento con due termini generici, in modo da avere la formula generale.

Supponiamo di conoscere i termini $$a_k$$ ed $$a_n$$ essendo $$n > k$$ (siccome se $$n < k$$ la differenza diventa negativa la formula è comunque valida: infatti se $$n < k$$ invece di aggiungere devo sottrarre).
Allora per ottenere $$a_n$$ partendo da $$a_k$$, dovrò aggiungere a tale termine la ragione $$d$$ moltiplicata per $$(n-k)$$.

$$
a_n = a_k + d \cdot (n-k)
$$

Adesso tratto tale uguaglianza come un'equazione: devo trovare $$d$$, quindi prima scrivo l'equazione alla rovescia (oppure, se preferisci, cambio di posto i termini rispetto all'uguale, cambiandoli di segno e poi li cambio di nuovo di segno):

$$
d \cdot (n-k) + a_k = a_n
$$

Porto il termine senza la $$d$$ dopo l'uguale:

$$
d \cdot (n-k) = a_n - a_k
$$

Adesso divido entrambi i termini per $$(n-k)$$ (posso farlo perché $$n$$ è diverso da $$k$$), semplificando al primo termine resta $$d$$.

$$
\textcolor{red}{d = \frac{a_n - a_k}{n-k}}
$$

> **Esempio:**
> Dato il quinto termine $$a_5 = -2$$ ed il venticinquesimo termine $$a_{25} = 28$$ trovare i primi $$7$$ termini della progressione aritmetica.
>
> Applico la formula:
> $$
> d = \frac{a_n - a_k}{n-k} = \frac{28 - (-2)}{25 - 5} = \frac{28 + 2}{20} = \frac{30}{20} = \frac{3}{2}
> $$
> Quindi la ragione $$d = 3/2$$.
>
> Costruisco i termini della progressione:
> Quinto termine: $$a_5 = -2$$
>
> Per ottenere il quarto termine tolgo la ragione dal quinto termine:
> Quarto termine $$a_4 = -2 - 3/2 = -7/2$$
>
> Per ottenere il terzo termine tolgo la ragione dal quarto termine:
> Terzo termine $$a_3 = -7/2 - 3/2 = -10/2 = -5$$
>
> Per ottenere il secondo termine tolgo la ragione dal terzo termine:
> Secondo termine $$a_2 = -5 - 3/2 = -13/2$$
>
> Per ottenere il primo termine tolgo la ragione dal secondo termine:
> Primo termine $$a_1 = -13/2 - 3/2 = -16/2 = -8$$
>
> Invece per ottenere il sesto termine aggiungo la ragione al quinto termine:
> Sesto termine $$a_6 = -2 + 3/2 = -1/2$$
>
> Per ottenere il settimo termine aggiungo la ragione al sesto termine:
> Settimo termine $$a_7 = -1/2 + 3/2 = 1$$
>
> Quindi la mia progressione è:
> $$-8, -13/2, -5, -7/2, -2, -1/2, 1, \dots$$