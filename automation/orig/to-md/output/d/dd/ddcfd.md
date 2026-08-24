# [Altro metodo per calcolare le equazioni delle tangenti condotte da un punto alla circonferenza]{.text-red}

Come hai visto il metodo indicato per trovare le equazioni delle rette tangenti condotte da un punto alla circonferenza è piuttosto complicato come calcoli anche se interessante dal punto di vista teorico.

In alcuni istituti tecnici ho visto usare il metodo seguente:

[la retta tangente alla circonferenza sarà la retta del fascio tale che la sua distanza dal centro è uguale al raggio]{.text-blue}

Quindi, applicando la formula della distanza da un punto ad una retta impongo che nel fascio di rette la distanza dal centro sia uguale al raggio: troverò così i valori di $m$ che sostituiti nel fascio mi danno l'equazione delle tangenti.
Particolarmente facile è applicare questo metodo quando il centro del fascio è sulla circonferenza.

Vediamo ad esempio di applicare questo metodo ad un esercizio già fatto in precedenza.

Trovare le tangenti alla circonferenza 

$\textcolor{red}{x^2 + y^2 - 10y + 16 = 0}$

condotte dall'origine $\textcolor{red}{O(0,0)}$.
È la circonferenza di centro $C(0,5)$ e raggio $3$.

Per trovare l'equazione delle rette tangenti considero il fascio di rette con centro l'origine:

$\textcolor{red}{y = mx}$

ed impongo che la distanza del fascio da $\textcolor{red}{C(0,5)}$ sia uguale a $3$ (raggio).

$$
\textcolor{blue}{d = \frac{y_0 - mx_0 - q}{\pm\sqrt{1 + m^2}} = 3}
$$

Sostituisco i valori che ho:
$x_0 = 0$ $y_0 = 5$ $q = 0$ $m = m$

$$
\textcolor{red}{\frac{5 - m \cdot 0 - 0}{\pm\sqrt{1 + m^2}} = 3}
$$

$$
\textcolor{red}{\frac{5}{\pm\sqrt{1 + m^2}} = 3}
$$

Faccio il minimo comune multiplo per togliere il denominatore (posso farlo senza condizioni perché è certamente diverso da zero essendo radice di somma di due quadrati):

$\textcolor{red}{5 = \pm 3\sqrt{1 + m^2}}$

Elevo al quadrato da entrambe le parti:

$$
\textcolor{red}{25 = 9(1 + m^2)}
$$
$$
\textcolor{red}{25 = 9 + 9m^2}
$$
$$
\textcolor{red}{9m^2 = 25 - 9}
$$
$$
\textcolor{red}{9m^2 = 16}
$$

$$
\textcolor{red}{m^2 = 16/9}
$$

$$
\textcolor{red}{m = \pm\sqrt{16/9} = \pm 4/3}
$$

Le due rette tangenti sono:
$\textcolor{red}{y = 4/3 x}$ $\textcolor{red}{y = -4/3 x}$

***

Vediamo anche un esempio con il punto sulla circonferenza (anche qui riprendiamo un problema già fatto).
Trovare l'equazione della tangente alla circonferenza

$\textcolor{red}{x^2 + y^2 - 25 = 0}$

condotta dal suo punto $\textcolor{red}{P(3,4)}$.
È la circonferenza di centro $O(0,0)$ e raggio $5$.

Per trovare l'equazione della retta tangente considero il fascio di rette passante per il punto $P(3,4)$:

$\textcolor{red}{y - 4 = m(x - 3)}$
$\textcolor{red}{y = mx - 3m + 4}$

impongo che la distanza del fascio da $\textcolor{red}{C(0,0)}$ sia uguale a $5$ (raggio).

$$
\textcolor{blue}{d = \frac{y_0 - mx_0 - q}{\pm\sqrt{1 + m^2}} = 5}
$$

Sostituisco i valori che ho:
$x_0 = 0$ $y_0 = 0$ $q = -3m + 4$ $m = m$

$$
\textcolor{red}{\frac{0 - m \cdot 0 + 3m - 4}{\pm\sqrt{1 + m^2}} = 5}
$$

Faccio il minimo comune multiplo per togliere il denominatore (anche qui posso farlo senza condizioni perché è certamente diverso da zero essendo radice di somma di due quadrati):

$\textcolor{red}{3m - 4 = \pm 5\sqrt{1 + m^2}}$

Elevo al quadrato da entrambe le parti per far sparire la radice:

$$
\textcolor{red}{9m^2 - 24m + 16 = 25 + 25m^2}
$$

Porto i termini prima dell'uguale, sommo e cambio di segno:

$$
\textcolor{red}{16m^2 + 24m + 9 = 0}
$$

> **Nota:** Come c'era da aspettarsi il termine prima dell'uguale è un quadrato essendo il punto sulla circonferenza.

$$
\textcolor{red}{(4m + 3)^2 = 0}
$$
$$
\textcolor{red}{4m + 3 = 0}
$$
$$
\textcolor{red}{m = - 3/4}
$$

per ottenere la tangente sostituisco questo valore a $m$ nel fascio:

$\textcolor{red}{y = mx - 3m + 4}$
$\textcolor{red}{y = -3/4 x - 3 \cdot (-3/4) + 4}$

L'equazione è:

$$
\textcolor{red}{y = -\frac{3}{4}x + \frac{25}{4}}
$$