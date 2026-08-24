# Limite finito di una successione (limite di una successione convergente)

Facciamo per semplicità un esempio numerico e consideriamo la successione:

$$
\textcolor{red}{1, \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \frac{1}{16}, \dots}
$$

Si vede subito che procedendo nei termini ci avviciniamo sempre di più al valore limite $$0$$.

Per impostare la definizione di limite dobbiamo dire che prendendo termini più avanzati la differenza fra questi termini e il limite diventerà sempre più piccola.

> [Se non sei convinto prova a fare la differenza fra il quinto termine e il limite (zero), poi fra il decimo e il limite, vedrai che la differenza diventa più piccola man mano che prendi un termine di ordine superiore]{.text-purple}

Consideriamo ora la successione generica:

$$
\textcolor{red}{a_1, a_2, a_3, a_4, a_5, \dots, a_n, \dots}
$$

per indicarla consideriamo il suo termine generico $$\textcolor{red}{a_n}$$

diremo che la successione $$\textcolor{red}{a_n}$$ ammette limite finito $$\textcolor{red}{l}$$ per $$\textcolor{red}{n \to \infty}$$ e scriveremo

$$
\textcolor{red}{\lim_{n \to \infty} a_n = l}
$$

se fissato un numero $$\epsilon$$ piccolo a piacere è possibile trovare un termine della successione tale che per quel termine e tutti i suoi successivi valga la relazione:

$$
\textcolor{red}{| a_n - l | < \epsilon}
$$